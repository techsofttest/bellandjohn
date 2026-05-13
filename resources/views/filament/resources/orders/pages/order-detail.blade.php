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

        .order-detail-header-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .order-detail-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: rgb(17, 24, 39);
        }

        .dark .order-detail-title {
            color: rgb(243, 244, 246);
        }

        .order-detail-status-badges {
            display: flex;
            gap: 0.5rem;
        }

        .order-status-badge {
            padding: 0.25rem 0.75rem;
            border-radius: 0.375rem;
            font-size: 0.75rem;
            font-weight: 500;
        }

        .order-status-paid {
            background: rgb(220, 252, 231);
            color: rgb(22, 101, 52);
        }

        .dark .order-status-paid {
            background: rgb(20, 83, 45);
            color: rgb(187, 247, 208);
        }

        .order-status-unfulfilled {
            background: rgb(254, 243, 199);
            color: rgb(146, 64, 14);
        }

        .dark .order-status-unfulfilled {
            background: rgb(120, 53, 15);
            color: rgb(253, 224, 71);
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

        .order-detail-btn {
            padding: 0.375rem 0.75rem;
            border: 1px solid rgb(209, 213, 219);
            background: rgb(22 22 23);
            border-radius: 0.375rem;
            font-size: 0.813rem;
            cursor: pointer;
            color: rgb(17, 24, 39);
            font-weight: 500;
            transition: all 0.15s;
        }

        .dark .order-detail-btn {
            background: rgb(55, 65, 81);
            border-color: rgb(75, 85, 99);
            color: rgb(243, 244, 246);
        }

        .order-detail-btn:hover {
            background: rgb(249, 250, 251);
        }

        .dark .order-detail-btn:hover {
            background: rgb(75, 85, 99);
        }

        .order-detail-btn-primary {
            background: rgb(37, 99, 235);
            color: rgb(22 22 23);
            border-color: rgb(37, 99, 235);
        }

        .dark .order-detail-btn-primary {
            background: rgb(59, 130, 246);
            border-color: rgb(59, 130, 246);
        }

        .order-detail-btn-primary:hover {
            background: rgb(29, 78, 216);
        }

        .dark .order-detail-btn-primary:hover {
            background: rgb(37, 99, 235);
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

        .order-product-sku {
            font-size: 0.75rem;
            color: rgb(156, 163, 175);
        }

        .dark .order-product-sku {
            color: rgb(107, 114, 128);
        }

        .order-product-price {
            text-align: right;
        }

        .order-product-quantity {
            font-size: 0.813rem;
            color: rgb(107, 114, 128);
            margin-bottom: 0.25rem;
        }

        .dark .order-product-quantity {
            color: rgb(156, 163, 175);
        }

        .order-product-total {
            font-size: 0.875rem;
            font-weight: 500;
            color: rgb(17, 24, 39);
        }

        .dark .order-product-total {
            color: rgb(243, 244, 246);
        }

        .order-detail-summary {
            padding-top: 1rem;
            border-top: 1px solid rgb(229, 231, 235);
        }

        .dark .order-detail-summary {
            border-top-color: rgb(55, 65, 81);
        }

        .order-summary-row {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 1rem;
            font-size: 0.813rem;
        }

        .order-summary-label {
            color: rgb(107, 114, 128);
        }

        .dark .order-summary-label {
            color: rgb(156, 163, 175);
        }

        .order-summary-value {
            color: rgb(17, 24, 39);
            font-weight: 500;
        }

        .dark .order-summary-value {
            color: rgb(243, 244, 246);
        }

        .order-summary-total {
            background: rgb(249, 250, 251);
            margin: 0.5rem 0 0 0;
            padding: 0.75rem 1rem;
            border-radius: 0.375rem;
        }

        .dark .order-summary-total {
            background: rgb(55, 65, 81);
        }

        .order-summary-total .order-summary-label,
        .order-summary-total .order-summary-value {
            font-size: 0.875rem;
            font-weight: 600;
            color: rgb(17, 24, 39);
        }

        .dark .order-summary-total .order-summary-label,
        .dark .order-summary-total .order-summary-value {
            color: rgb(243, 244, 246);
        }

        .order-info-row {
            display: flex;
            justify-content: space-between;
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
            font-weight: 500;
            text-align: right;
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

        .order-timeline {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .order-timeline-item {
            display: flex;
            gap: 0.75rem;
        }

        .order-timeline-dot {
            width: 8px;
            height: 8px;
            background: rgb(107, 114, 128);
            border-radius: 50%;
            margin-top: 0.375rem;
            flex-shrink: 0;
        }

        .dark .order-timeline-dot {
            background: rgb(156, 163, 175);
        }

        .order-timeline-content {
            flex: 1;
        }

        .order-timeline-title {
            font-size: 0.813rem;
            font-weight: 500;
            color: rgb(17, 24, 39);
            margin-bottom: 0.25rem;
        }

        .dark .order-timeline-title {
            color: rgb(243, 244, 246);
        }

        .order-timeline-meta {
            font-size: 0.75rem;
            color: rgb(107, 114, 128);
        }

        .dark .order-timeline-meta {
            color: rgb(156, 163, 175);
        }

        .order-note-input {
            width: 100%;
            padding: 0.625rem;
            border: 1px solid rgb(209, 213, 219);
            border-radius: 0.375rem;
            font-size: 0.813rem;
            font-family: inherit;
            resize: vertical;
            min-height: 80px;
            background: rgb(22 22 23);
            color: rgb(17, 24, 39);
        }

        .dark .order-note-input {
            background: rgb(55, 65, 81);
            border-color: rgb(75, 85, 99);
            color: rgb(243, 244, 246);
        }

        .order-note-input:focus {
            outline: none;
            border-color: rgb(37, 99, 235);
            box-shadow: 0 0 0 1px rgb(37, 99, 235);
        }

        .dark .order-note-input:focus {
            border-color: rgb(59, 130, 246);
            box-shadow: 0 0 0 1px rgb(59, 130, 246);
        }

        .order-card-actions {
            display: flex;
            gap: 0.5rem;
            margin-top: 0.75rem;
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
        <div class="order-detail-header-top">
            <h1 class="order-detail-title">
                {{ $this->record->order_number }}
            </h1>

            <div class="order-detail-status-badges">
                <span class="order-status-badge order-status-{{ $this->record->payment_status }}">
                    {{ ucfirst($this->record->payment_status) }}
                </span>
            </div>
        </div>

        <div class="order-detail-meta">
            <span>
                {{ $this->record->placed_at?->format('F j, Y \a\t g:i A') }}
            </span>
            <span>•</span>
            <span>{{ $this->record->items->count() }} items</span>
        </div>
    </div>

    <div class="order-detail-content">

        {{-- LEFT COLUMN --}}
        <div class="order-detail-main-section">

            {{-- PRODUCTS --}}
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

                            <div class="order-product-price">
                                <div class="order-product-quantity">
                                    {{ $item->quantity }} × {{ number_format($item->price, 2) }}
                                </div>
                                <div class="order-product-total">
                                    {{ number_format($item->total, 2) }}
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>

                {{-- SUMMARY --}}
                <div class="order-detail-summary">
                    <div class="order-summary-row">
                        <span>Subtotal</span>
                        <span>{{ number_format($this->record->subtotal, 2) }}</span>
                    </div>

                    <div class="order-summary-row">
                        <span>Shipping</span>
                        <span>{{ number_format($this->record->shipping_total, 2) }}</span>
                    </div>

                    <div class="order-summary-row">
                        <span>Tax</span>
                        <span>{{ number_format($this->record->tax_total, 2) }}</span>
                    </div>

                    <div class="order-summary-row order-summary-total">
                        <span>Total</span>
                        <span>{{ number_format($this->record->total, 2) }}</span>
                    </div>
                </div>
            </div>

            {{-- PAYMENT --}}
            <div class="order-detail-card">
                <div class="order-detail-card-header">
                    <h2 class="order-detail-card-title">Payment</h2>
                </div>

                <div class="order-info-row">
                    <span>Payment method</span>
                    <span>{{ ucfirst($this->record->payment_method) }}</span>
                </div>

                <div class="order-info-row">
                    <span>Status</span>
                    <span>{{ ucfirst($this->record->payment_status) }}</span>
                </div>

                <div class="order-info-row">
                    <span>Amount</span>
                    <span>{{ number_format($this->record->total, 2) }}</span>
                </div>
            </div>

        </div>

        {{-- RIGHT COLUMN --}}
        <div class="order-detail-main-section">

            {{-- CUSTOMER --}}
            <div class="order-detail-card">
                <div class="order-detail-card-header">
                    <h2 class="order-detail-card-title">Customer</h2>
                </div>

                <div class="order-info-row">
                    <span>Name</span>
                    <span>{{ $this->record->customer_name }}</span>
                </div>

                <div class="order-info-row">
                    <span>Email</span>
                    <span>{{ $this->record->customer_email }}</span>
                </div>

                <div class="order-info-row">
                    <span>Phone</span>
                    <span>{{ $this->record->customer_phone }}</span>
                </div>
            </div>

            {{-- SHIPPING ADDRESS --}}
            <div class="order-detail-card">
                <div class="order-detail-card-header">
                    <h2 class="order-detail-card-title">Shipping address</h2>
                </div>

                @php($shipping = $this->record->shipping_address)
                <div class="order-address-block">
                    <div class="order-address-name">{{ $shipping['name'] ?? '' }}</div>
                    <div>{{ $shipping['address'] ?? '' }}</div>
                    <div>{{ $shipping['city'] ?? '' }}</div>
                    <div>{{ $shipping['state'] ?? '' }} {{ $shipping['pincode'] ?? '' }}</div>
                </div>
            </div>

            {{-- BILLING ADDRESS --}}
            <div class="order-detail-card">
                <div class="order-detail-card-header">
                    <h2 class="order-detail-card-title">Billing address</h2>
                </div>

                @php($billing = $this->record->billing_address)
                <div class="order-address-block">
                    <div class="order-address-name">{{ $billing['name'] ?? '' }}</div>
                    <div>{{ $billing['address'] ?? '' }}</div>
                    <div>{{ $billing['city'] ?? '' }}</div>
                    <div>{{ $billing['state'] ?? '' }} {{ $billing['pincode'] ?? '' }}</div>
                </div>
            </div>

        </div>
    </div>
</div>

                <!-- Timeline Card -->
                <!--
                <div class="order-detail-card">
                    <div class="order-detail-card-header">
                        <h2 class="order-detail-card-title">Timeline</h2>
                    </div>
                    <div class="order-timeline">
                        <div class="order-timeline-item">
                            <div class="order-timeline-dot"></div>
                            <div class="order-timeline-content">
                                <div class="order-timeline-title">Order placed</div>
                                <div class="order-timeline-meta">November 6, 2025 at 2:45 PM</div>
                            </div>
                        </div>

                        <div class="order-timeline-item">
                            <div class="order-timeline-dot"></div>
                            <div class="order-timeline-content">
                                <div class="order-timeline-title">Payment received</div>
                                <div class="order-timeline-meta">November 6, 2025 at 2:45 PM</div>
                            </div>
                        </div>

                        <div class="order-timeline-item">
                            <div class="order-timeline-dot"></div>
                            <div class="order-timeline-content">
                                <div class="order-timeline-title">Order confirmation sent</div>
                                <div class="order-timeline-meta">November 6, 2025 at 2:46 PM</div>
                            </div>
                        </div>

                    </div>
                </div>
                -->










    



</x-filament::page>
