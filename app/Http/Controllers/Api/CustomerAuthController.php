<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\CustomerOtpMail;

class CustomerAuthController extends Controller
{
    /**
     * Customer Registration
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:customers,email',
            'phone' => 'nullable|string|max:20',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()->first(),
                'errors' => $validator->errors()
            ], 422);
        }

        $customer = Customer::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);

        $token = $customer->createToken('customer_token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'Registration successful',
            'customer' => [
                'id' => $customer->id,
                'name' => $customer->name,
                'email' => $customer->email,
                'phone' => $customer->phone,
            ],
            'token' => $token
        ], 201);
    }

    /**
     * Customer Login
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()->first(),
                'errors' => $validator->errors()
            ], 422);
        }

        $customer = Customer::where('email', $request->email)->first();

        if (!$customer || !Hash::check($request->password, $customer->password)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid email address or password'
            ], 401);
        }

        // Revoke existing tokens if any to keep single-device or avoid token bloat
        $customer->tokens()->delete();

        $token = $customer->createToken('customer_token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'Login successful',
            'customer' => [
                'id' > $customer->id,
                'name' => $customer->name,
                'email' => $customer->email,
                'phone' => $customer->phone,
            ],
            'token' => $token
        ], 200);
    }

    /**
     * Get authenticated customer profile
     */
    public function me(Request $request)
    {
        $customer = $request->user();

        return response()->json([
            'status' => 'success',
            'customer' => [
                'id' => $customer->id,
                'name' => $customer->name,
                'email' => $customer->email,
                'phone' => $customer->phone,
            ]
        ], 200);
    }

    /**
     * Customer Logout
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Logged out successfully'
        ], 200);
    }

    /**
     * Forgot Password - Request OTP
     */
    public function forgotPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()->first()
            ], 422);
        }

        $customer = Customer::where('email', $request->email)->first();

        if (!$customer) {
            return response()->json([
                'status' => 'error',
                'message' => 'We could not find a customer with that email address.'
            ], 404);
        }

        // Generate 6-digit random code
        $code = rand(100000, 999999);

        // Store OTP in cache for 10 minutes
        Cache::put('otp_' . $request->email, $code, now()->addMinutes(10));

        // Log OTP
        Log::info("Password reset OTP for customer {$request->email}: {$code}");

        // Send Email
        try {
            Mail::to($request->email)->send(new CustomerOtpMail($code));
        } catch (\Exception $e) {
            Log::error('Failed to send OTP email: ' . $e->getMessage());
        }

        return response()->json([
            'status' => 'success',
            'message' => 'A 6-digit verification code has been sent to your email.',
        ], 200);
    }

    /**
     * Verify OTP
     */
    public function verifyOtp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'otp' => 'required|string|size:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()->first()
            ], 422);
        }

        $cachedCode = Cache::get('otp_' . $request->email);

        // Standard developer/testing fallback code (123456) in local environment
        $isLocal = config('app.env') === 'local' || env('APP_ENV') === 'local';
        $isValidOtp = ($cachedCode && (string)$cachedCode === (string)$request->otp) || ($isLocal && $request->otp === '123456');

        if (!$isValidOtp) {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid or expired verification code.'
            ], 422);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Verification code verified successfully.'
        ], 200);
    }

    /**
     * Reset Password using OTP
     */
    public function resetPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'otp' => 'required|string|size:6',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()->first(),
                'errors' => $validator->errors()
            ], 422);
        }

        $cachedCode = Cache::get('otp_' . $request->email);
        $isLocal = config('app.env') === 'local' || env('APP_ENV') === 'local';
        $isValidOtp = ($cachedCode && (string)$cachedCode === (string)$request->otp) || ($isLocal && $request->otp === '123456');

        if (!$isValidOtp) {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid or expired verification code.'
            ], 422);
        }

        $customer = Customer::where('email', $request->email)->first();

        if (!$customer) {
            return response()->json([
                'status' => 'error',
                'message' => 'Customer account not found.'
            ], 404);
        }

        // Update password
        $customer->password = Hash::make($request->password);
        $customer->save();

        // Clear OTP from Cache
        Cache::forget('otp_' . $request->email);

        return response()->json([
            'status' => 'success',
            'message' => 'Your password has been reset successfully. Please sign in.'
        ], 200);
    }

    /**
     * Change Password (authenticated user)
     */
    public function changePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'current_password' => 'required|string',
            'new_password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()->first(),
                'errors' => $validator->errors()
            ], 422);
        }

        $customer = $request->user();

        if (!Hash::check($request->current_password, $customer->password)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Current password is incorrect.'
            ], 422);
        }

        if ($request->current_password === $request->new_password) {
            return response()->json([
                'status' => 'error',
                'message' => 'New password must be different from your current password.'
            ], 422);
        }

        $customer->password = Hash::make($request->new_password);
        $customer->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Your password has been changed successfully.'
        ], 200);
    }
}
