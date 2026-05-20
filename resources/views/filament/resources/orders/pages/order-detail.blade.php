<x-filament::page>


<style>
        .order-detail-wrapper {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            padding: 1.5rem;
        }

        .order-detail-header {
            background: rgb(255 255 255);
            padding: 1.25rem 1.5rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        .dark .order-detail-header {
            background: rgb(22 22 23);
        }

        .order-detail-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: rgb(17, 24, 39);
        }

        .dark .order-detail-title {
            color: rgb(243, 244, 246);
        }

        .order-detail-meta {
            display: flex;
            gap: 1.5rem;
            font-size: 0.813rem;
            color: rgb(107, 114, 128);
        }

        .dark .order-detail-meta {
            color: rgb(156, 163, 175);
        }

        .order-detail-content {
            display: grid;
            grid-template-columns: 1fr 380px;
            gap: 1rem;
        }

        .order-detail-main-section {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .order-detail-card {
            background: rgb(255 255 255);
            border-radius: 0.5rem;
            padding: 1.25rem;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        .dark .order-detail-card {
            background: rgb(22 22 23);
        }

        .order-detail-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .order-detail-card-title {
            font-size: 0.875rem;
            font-weight: 600;
            color: rgb(17, 24, 39);
        }

        .dark .order-detail-card-title {
            color: rgb(243, 244, 246);
        }

        .order-product-list {
            border: 1px solid rgb(229, 231, 235);
            border-radius: 0.5rem;
            overflow: hidden;
        }

        .dark .order-product-list {
            border-color: rgb(55, 65, 81);
        }

        .order-product-item {
            display: flex;
            gap: 0.75rem;
            padding: 1rem;
            border-bottom: 1px solid rgb(229, 231, 235);
        }

        .dark .order-product-item {
            border-bottom-color: rgb(55, 65, 81);
        }

        .order-product-item:last-child {
            border-bottom: none;
        }

        .order-product-image {
            width: 60px;
            height: 60px;
            border-radius: 0.5rem;
            object-fit: cover;
            border: 1px solid rgb(229, 231, 235);
        }

        .dark .order-product-image {
            border-color: rgb(55, 65, 81);
        }

        .order-product-details {
            flex: 1;
        }

        .order-product-name {
            font-size: 0.875rem;
            font-weight: 500;
            color: rgb(17, 24, 39);
            margin-bottom: 0.25rem;
        }

        .dark .order-product-name {
            color: rgb(243, 244, 246);
        }

        .order-product-variant {
            font-size: 0.813rem;
            color: rgb(107, 114, 128);
            margin-bottom: 0.125rem;
        }

        .dark .order-product-variant {
            color: rgb(156, 163, 175);
        }

        .order-product-price {
            text-align: right;
        }

        .order-product-quantity {
            font-size: 0.813rem;
            color: rgb(107, 114, 128);
        }

        .dark .order-product-quantity {
            color: rgb(156, 163, 175);
        }

        .order-info-row {
            display: flex;
            align-items: center;
            padding: 0.75rem 0;
            border-bottom: 1px solid rgb(229, 231, 235);
        }

        .dark .order-info-row {
            border-bottom-color: rgb(55, 65, 81);
        }

        .order-info-row:last-child {
            border-bottom: none;
        }

        .order-info-label {
            font-size: 0.813rem;
            color: rgb(107, 114, 128);
        }

        .dark .order-info-label {
            color: rgb(156, 163, 175);
        }

        .order-info-value {
            font-size: 0.813rem;
            color: rgb(17, 24, 39);
            font-weight: 505;
        }

        .dark .order-info-value {
            color: rgb(243, 244, 246);
        }

        .order-address-block {
            font-size: 0.813rem;
            color: rgb(17, 24, 39);
            line-height: 1.6;
        }

        .dark .order-address-block {
            color: rgb(243, 244, 246);
        }

        .order-address-name {
            font-weight: 600;
            margin-bottom: 0.25rem;
        }

        @media (max-width: 1024px) {
            .order-detail-content {
                grid-template-columns: 1fr;
            }
        }
    </style>

<div class="order-detail-wrapper">

    {{-- HEADER --}}
    <div class="order-detail-header">
        <h1 class="order-detail-title" style="margin-bottom: 0.5rem;">
            Request details: {{ $this->record->order_number }}
        </h1>

        <div class="order-detail-meta">
            <span>
                Submitted on {{ $this->record->placed_at?->format('F j, Y \a\t g:i A') }}
            </span>
            <span>•</span>
            <span>{{ $this->record->items->count() }} solutions / products</span>
        </div>
    </div>

    {{-- TWO COLUMN CONTENT GRID --}}
    <div class="order-detail-content" style="margin-bottom: 1rem;">

        {{-- LEFT COLUMN: PRODUCTS LIST --}}
        <div class="order-detail-main-section">
            <div class="order-detail-card">
                <div class="order-detail-card-header">
                    <h2 class="order-detail-card-title">Products</h2>
                </div>

                <div class="order-product-list">
                    @foreach ($this->record->items as $item)
                        <div class="order-product-item">
                            <img
                                src="{{asset('storage')}}/{{ $item->product?->image ?? asset('images/placeholder.png') }}"
                                class="order-product-image"
                                alt="{{ $item->title }}"
                            >

                            <div class="order-product-details">
                                <div class="order-product-name">
                                    {{ $item->title }}
                                </div>

                                @if ($item->variant)
                                    <div class="order-product-variant">
                                        {{ $item->variant->name }}
                                    </div>
                                @endif
                            </div>

                            <div class="order-product-price" style="display: flex; align-items: center; justify-content: center; min-width: 80px;">
                                <div class="order-product-quantity" style="font-size: 0.95rem; font-weight: 700; color: rgb(17, 24, 39); margin: 0;">
                                    Qty: {{ $item->quantity }}
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>

        {{-- RIGHT COLUMN: ADDRESS CARD --}}
        <div class="order-detail-main-section">
            <div class="order-detail-card">
                <div class="order-detail-card-header">
                    <h2 class="order-detail-card-title">Address</h2>
                </div>

                @php($address = $this->record->shipping_address ?? $this->record->billing_address)
                <div class="order-address-block">
                    @if (isset($address['first_name']))
                        <div class="order-address-name">{{ $address['first_name'] }} {{ $address['last_name'] }}</div>
                    @else
                        <div class="order-address-name">{{ $address['name'] ?? 'Recipient' }}</div>
                    @endif
                    
                    @if (!empty($address['company']))
                        <div class="order-address-company font-bold text-slate-500 dark:text-slate-400 mb-1" style="font-size: 0.813rem;">
                            Company: {{ $address['company'] }}
                        </div>
                    @endif
                    
                    <div>{{ $address['address'] ?? '' }}</div>
                    <div>{{ $address['city'] ?? '' }}, {{ $address['state'] ?? '' }}</div>
                    <div>{{ $address['country'] ?? '' }} {{ $address['zip'] ?? $address['pincode'] ?? '' }}</div>
                </div>
            </div>
        </div>

    </div>

    {{-- CUSTOMER DETAILS: FULL WIDTH BELOW --}}
    <div class="order-detail-card" style="margin-bottom: 1.5rem;">
        <div class="order-detail-card-header">
            <h2 class="order-detail-card-title">Customer</h2>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
            <div class="order-info-row" style="border-bottom: none; padding: 0.25rem 0; display: flex; gap: 0.5rem;">
                <span class="order-info-label" style="font-weight: 600;">Name:</span>
                <span class="order-info-value" style="text-align: left;">
                    {{ trim(($address['first_name'] ?? '') . ' ' . ($address['last_name'] ?? '')) ?: ($this->record->customer_name ?? 'Recipient') }}
                </span>
            </div>

            <div class="order-info-row" style="border-bottom: none; padding: 0.25rem 0; display: flex; gap: 0.5rem;">
                <span class="order-info-label" style="font-weight: 600;">Email:</span>
                <span class="order-info-value" style="text-align: left;">{{ $this->record->customer_email }}</span>
            </div>

            <div class="order-info-row" style="border-bottom: none; padding: 0.25rem 0; display: flex; gap: 0.5rem;">
                <span class="order-info-label" style="font-weight: 600;">Phone:</span>
                <span class="order-info-value" style="text-align: left;">{{ $this->record->customer_phone }}</span>
            </div>
        </div>
    </div>

</div>

</x-filament::page>
