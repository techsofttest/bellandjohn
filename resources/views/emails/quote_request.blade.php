@extends('emails.layouts.master')

@section('title', 'New Quote Request - ' . config('app.name', 'Bell And John'))

@section('content')
    <h2>New Quote Request Received</h2>

    <p>A new quote request has been submitted via the website on <strong>{{ now()->format('d M, Y \a\t H:i') }}</strong>.</p>

    <div class="info-box">
        <div class="info-row">
            <span class="info-label">Order #:</span>
            <span><strong>{{ $order->order_number }}</strong></span>
        </div>
        <div class="info-row">
            <span class="info-label">Date:</span>
            <span>{{ $order->placed_at ? $order->placed_at->format('d M, Y H:i') : now()->format('d M, Y H:i') }}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Status:</span>
            <span style="text-transform: capitalize;">{{ $order->status }}</span>
        </div>
    </div>

    <h3 style="color: #2b9346; margin-top: 25px; margin-bottom: 5px;">Customer Details</h3>

    <div class="info-box">
        <div class="info-row">
            <span class="info-label">Name:</span>
            <span>{{ ($order->billing_address['first_name'] ?? '') . ' ' . ($order->billing_address['last_name'] ?? '') }}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Email:</span>
            <span><a href="mailto:{{ $order->billing_address['email'] ?? '' }}" style="color: #2b9346;">{{ $order->billing_address['email'] ?? 'N/A' }}</a></span>
        </div>
        <div class="info-row">
            <span class="info-label">Phone:</span>
            <span>{{ $order->billing_address['phone'] ?? 'N/A' }}</span>
        </div>
        @if (!empty($order->billing_address['company']))
        <div class="info-row">
            <span class="info-label">Company:</span>
            <span>{{ $order->billing_address['company'] }}</span>
        </div>
        @endif
        <div class="info-row">
            <span class="info-label">Address:</span>
            <span>
                {{ $order->billing_address['address'] ?? '' }},
                {{ $order->billing_address['city'] ?? '' }},
                {{ $order->billing_address['state'] ?? '' }}
                {{ $order->billing_address['zip'] ?? '' }}
            </span>
        </div>
        <div class="info-row">
            <span class="info-label">Country:</span>
            <span>{{ $order->billing_address['country'] ?? 'N/A' }}</span>
        </div>
    </div>

    <h3 style="color: #2b9346; margin-top: 25px; margin-bottom: 10px;">Requested Products</h3>

    <table style="width: 100%; border-collapse: collapse; margin: 0 0 20px 0; font-size: 13px;">
        <thead>
            <tr style="background-color: #2b9346; color: #ffffff;">
                <th style="padding: 10px 12px; text-align: left;">#</th>
                <th style="padding: 10px 12px; text-align: left;">Product</th>
                <th style="padding: 10px 12px; text-align: left;">SKU</th>
                <th style="padding: 10px 12px; text-align: center;">Quantity</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($order->items as $index => $item)
            <tr style="background-color: {{ $loop->even ? '#f8f9fa' : '#ffffff' }}; border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px 12px; color: #777;">{{ $index + 1 }}</td>
                <td style="padding: 10px 12px;"><strong>{{ $item->title }}</strong></td>
                <td style="padding: 10px 12px; color: #777;">{{ $item->sku ?: 'N/A' }}</td>
                <td style="padding: 10px 12px; text-align: center;"><strong>{{ $item->quantity }}</strong></td>
            </tr>
            @endforeach
        </tbody>
    </table>

    @if ($order->notes)
    <div class="info-box">
        <div class="info-row">
            <span class="info-label">Notes:</span>
            <span style="display: block; margin-top: 5px; white-space: pre-line;">{{ $order->notes }}</span>
        </div>
    </div>
    @endif

    <p style="margin-top: 25px;">
        <a href="{{ url('/admin') }}" class="button">View in Admin Panel</a>
    </p>
@endsection
