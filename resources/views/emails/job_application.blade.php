@extends('emails.layouts.master')

@section('title', 'New Quote Application - ' . config('app.name', 'Bell And John'))
@section('header_title', 'New Application Received')

@section('content')
    <h2>Hello,</h2>
    
    <p>A new job application has been submitted for the following position:</p>
    
    <div class="info-box">
        <div class="info-row">
            <span class="info-label">Job Title:</span> <span>{{ $job->designation->name }}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Applicant:</span> <span>{{ $applicant->first_name }} {{ $applicant->last_name }}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Applicant Email:</span> <span>{{ $applicant->email }}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Date:</span> <span>{{ now()->format('d M, Y H:i') }}</span>
        </div>
    </div>
    
    <p>You can view the full application details in your dashboard.</p>
    
    <p>
        <a href="{{ url('/') }}" class="button">Go to Dashboard</a>
    </p>

@endsection
