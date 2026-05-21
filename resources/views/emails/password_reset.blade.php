@extends('emails.layouts.master')

@section('title', 'Reset Your Password - ' . config('app.name', 'Bell And John'))
@section('header_title', 'Password Reset')

@section('content')
    <h2>Hello {{ $user->first_name }},</h2>
    
    <p>You are receiving this email because we received a password reset request for your account.</p>
    
    <p>Please click the button below to reset your password:</p>
    
    <p style="text-align: center;">
        <a href="{{ $resetUrl }}" class="button">Reset Password</a>
    </p>
    
    <p>This password reset link will expire in 60 minutes.</p>
    
    <p>If you did not request a password reset, no further action is required.</p>
    
    <hr style="border: none; border-top: 1px solid #eeeeee; margin: 20px 0;">
    
    <p style="font-size: 12px; color: #777777;">
        If you're having trouble clicking the "Reset Password" button, copy and paste the URL below into your web browser:
        <br>
        <a href="{{ $resetUrl }}" style="color: #006aff; word-break: break-all;">{{ $resetUrl }}</a>
    </p>

@endsection
