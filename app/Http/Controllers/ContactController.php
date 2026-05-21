<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name'  => 'required|string|max:255',
            'email'      => 'required|email|max:255',
            'phone'      => 'required|string|max:30',
            'subject'    => 'required|string|max:255',
            'message'    => 'required|string|max:5000',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $data = $request->only(['first_name', 'last_name', 'email', 'phone', 'subject', 'message']);

        try {
            $adminEmail = env('MAIL_ADMIN_EMAIL', env('MAIL_FROM_ADDRESS', 'admin@bellnjohn.com'));
            Mail::to($adminEmail)->send(new ContactFormMail($data));
        } catch (\Exception $e) {
            Log::error('Contact form mail failed: ' . $e->getMessage());
            return back()->with('error', 'Failed to send message. Please try again later.')->withInput();
        }

        return back()->with('success', 'Your message has been sent successfully. We will get back to you shortly.');
    }
}
