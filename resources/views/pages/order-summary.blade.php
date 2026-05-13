@extends('layouts.app')

@push('styles')
<style>
   
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 50px 30px;
            text-align: center;
            color: white;
        }

        .success-icon {
            width: 100px;
            height: 100px;
            background: white;
            border-radius: 50%;
            margin: 0 auto 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes popIn {
            0% {
                transform: scale(0) rotate(-180deg);
                opacity: 0;
            }
            100% {
                transform: scale(1) rotate(0deg);
                opacity: 1;
            }
        }

        .checkmark {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: block;
            stroke-width: 4;
            stroke: #10b981;
            stroke-miterlimit: 10;
            box-shadow: inset 0px 0px 0px #10b981;
            animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
        }

        .checkmark-circle {
            stroke-dasharray: 166;
            stroke-dashoffset: 166;
            stroke-width: 4;
            stroke-miterlimit: 10;
            stroke: #10b981;
            fill: none;
            animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }

        .checkmark-check {
            transform-origin: 50% 50%;
            stroke-dasharray: 48;
            stroke-dashoffset: 48;
            animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
        }

        @keyframes stroke {
            100% {
                stroke-dashoffset: 0;
            }
        }

        @keyframes scale {
            0%, 100% {
                transform: none;
            }
            50% {
                transform: scale3d(1.1, 1.1, 1);
            }
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 15px;
            font-weight: 700;
        }

        .header p {
            font-size: 1.2rem;
            opacity: 0.95;
        }

        .content {
            padding: 50px;
        }

        .order-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
        }

        .info-box {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 25px;
            border-radius: 16px;
            text-align: center;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .info-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            border-color: #667eea;
        }

        .info-label {
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #6b7280;
            font-weight: 600;
            margin-bottom: 10px;
        }

        .info-value {
            font-size: 1.2rem;
            font-weight: 700;
            color: #1f2937;
        }

        .section {
            margin-bottom: 40px;
        }

        .section-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 3px solid #e5e7eb;
            position: relative;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 80px;
            height: 3px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .item {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 20px;
            margin-bottom: 15px;
            background: #f9fafb;
            border-radius: 12px;
            transition: all 0.3s ease;
            border-left: 4px solid transparent;
        }

        .item:hover {
            background: #f3f4f6;
            border-left-color: #667eea;
            transform: translateX(5px);
        }

        .item-details {
            flex: 1;
        }

        .item-name {
            font-size: 1.1rem;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 8px;
        }

        .item-qty {
            font-size: 0.9rem;
            color: #6b7280;
        }

        .item-price {
            font-size: 1.2rem;
            font-weight: 700;
            color: #667eea;
            white-space: nowrap;
            margin-left: 20px;
        }

        .summary {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 30px;
            border-radius: 16px;
            margin-top: 30px;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            font-size: 1rem;
            color: #4b5563;
        }

        .summary-row.total {
            border-top: 2px solid #d1d5db;
            margin-top: 15px;
            padding-top: 20px;
            font-size: 1.4rem;
            font-weight: 700;
            color: #1f2937;
        }

        .summary-row.total .amount {
            color: #10b981;
        }

        .address-box {
            background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
            padding: 30px;
            border-radius: 16px;
            border-left: 5px solid #667eea;
        }

        .address-box p {
            margin-bottom: 8px;
            color: #374151;
            font-size: 1rem;
            line-height: 1.6;
        }

        .address-box .name {
            font-weight: 700;
            font-size: 1.1rem;
            color: #1f2937;
            margin-bottom: 15px;
        }

        .buttons {
            display: flex;
            gap: 20px;
            margin-top: 40px;
            flex-wrap: wrap;
        }

        .btn {
            flex: 1;
            min-width: 220px;
            padding: 18px 40px;
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
            text-decoration: none;
            display: inline-block;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
        }

        .btn-secondary {
            background: white;
            color: #667eea;
            border: 3px solid #667eea;
        }

        .btn-secondary:hover {
            background: #667eea;
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .notice {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
            border-radius: 12px;
            color: #1e40af;
            font-size: 0.95rem;
            border: 2px solid #93c5fd;
        }

        .notice::before {
            content: '✉️ ';
            font-size: 1.2rem;
            margin-right: 8px;
        }

        @media (max-width: 768px) {
            body {
                padding: 20px 10px;
            }

            .header {
                padding: 40px 20px;
            }

            .header h1 {
                font-size: 1.8rem;
            }

            .content {
                padding: 30px 20px;
            }

            .order-info {
                grid-template-columns: 1fr;
                gap: 15px;
            }

            .item {
                flex-direction: column;
                gap: 10px;
            }

            .item-price {
                margin-left: 0;
                align-self: flex-end;
            }

            .buttons {
                flex-direction: column;
            }

            .btn {
                min-width: 100%;
            }

            .summary {
                padding: 20px;
            }

            .address-box {
                padding: 20px;
            }
        }

</style>
@endpush

@section('content')




<div class="container my-5">
  <div class="row justify-content-center">
    <div class="col-md-7 col-lg-6">

      <div class="card shadow-sm border-success">
        <div class="card-body text-center">

          <div class="mb-3">
            <span class="display-4 text-success">✓</span>
          </div>

          <h4 class="text-success mb-2">Order Placed Successfully</h4>
          <p class="text-muted mb-4">
            Thank you for your purchase! Your order has been confirmed.
          </p>

          <ul class="list-group list-group-flush text-start mb-4">
            <li class="list-group-item d-flex justify-content-between">
                <span>Order ID</span>
                <strong>#{{ $order->order_number }}</strong>
            </li>

            <li class="list-group-item d-flex justify-content-between">
                <span>Payment Status</span>
                <strong class="text-capitalize">
                    {{ $order->payment_status }}
                </strong>
            </li>

            <li class="list-group-item d-flex justify-content-between">
                <span>Total Amount</span>
                <strong>
                    {{ $order->currency }} {{ number_format($order->total, 2) }}
                </strong>
            </li>

            <li class="list-group-item d-flex justify-content-between">
                <span>Estimated Delivery</span>
                <span>
                    {{ $order->placed_at->addDays(5)->format('M d, Y') }}
                </span>
            </li>
        </ul>

          <div class="d-grid gap-2">
            <a href="{{url('/')}}" class="btn btn-outline-secondary">Continue Shopping</a>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>





@endsection