@extends('emails.layouts.master')

@section('title', 'Subscription Successful - ' . config('app.name', 'Bell And John'))
@section('header_title', 'Payment Successful')

@section('content')
    <h2>Hello {{ $user->first_name }},</h2>
    
    <p>Thank you for subscribing to Pharma Healthcare Jobs. We have successfully received your payment and your new plan has been activated.</p>
    
    <div class="info-box">
        <div class="info-row">
            <span class="info-label">Plan Name:</span> <span>{{ $planName }}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Transaction ID:</span> <span>{{ $paymentId }}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Start Date:</span> <span>{{ \Carbon\Carbon::parse($startDate)->format('d M, Y') }}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Expiration Date:</span> <span><strong>{{ \Carbon\Carbon::parse($expirationDate)->format('d M, Y') }}</strong></span>
        </div>
    </div>
    
    <p>You can now continue to use our platform with your new plan features unlocked.</p>
    
    <p>
        <a href="{{ url('/') }}" class="button">Go to Dashboard</a>
    </p>

@endsection
