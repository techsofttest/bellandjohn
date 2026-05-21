@extends('emails.layouts.master')

@section('title', 'New Contact Message - ' . config('app.name', 'Bell And John'))

@section('content')
    <h2>New Contact Form Submission</h2>

    <p>You have received a new message via the website contact form.</p>

    <div class="info-box">
        <div class="info-row">
            <span class="info-label">Name:</span>
            <span>{{ $data['first_name'] }} {{ $data['last_name'] }}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Email:</span>
            <span><a href="mailto:{{ $data['email'] }}" style="color: #2b9346;">{{ $data['email'] }}</a></span>
        </div>
        <div class="info-row">
            <span class="info-label">Phone:</span>
            <span>{{ $data['phone'] ?? 'N/A' }}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Subject:</span>
            <span><strong>{{ $data['subject'] }}</strong></span>
        </div>
    </div>

    <h3 style="color: #2b9346; margin-top: 20px; margin-bottom: 5px;">Message</h3>
    <div class="info-box">
        <p style="margin: 0; line-height: 1.8; white-space: pre-line;">{{ $data['message'] }}</p>
    </div>

    <p style="margin-top: 20px; color: #777; font-size: 12px;">
        Received on {{ now()->format('d M, Y \a\t H:i') }}
    </p>
@endsection
