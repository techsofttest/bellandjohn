@extends('emails.layouts.master')

@section('title', 'New Pending Approval - ' . config('app.name', 'Bell And John'))
@section('header_title', 'New Job Posted')

@section('content')
    <h2>Hello Admin,</h2>
    
    <p>A new job has been posted by an employer and is awaiting your approval:</p>
    
    <div class="info-box">
        <div class="info-row">
            <span class="info-label">Designation:</span> <span>{{ $job->designation->name ?? 'N/A' }}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Employer:</span> <span>{{ $employer->first_name }} {{ $employer->last_name }}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Posted Date:</span> <span>{{ $job->created_at->format('d M, Y H:i') }}</span>
        </div>
    </div>
    
    <p>Please log in to the admin panel to review and approve this job posting.</p>
    
    <p>
        <a href="{{ url('/admin/jobs') }}" class="button">Go to Admin Panel</a>
    </p>

@endsection
