@extends('layouts.app')


@section('content')




<section class="Myaccountsec">
  <div class="container-fluid">
    <div class="row">
      
      @include('user.user-sidebar')

    
      <div class="col-lg-9 col-md-8">
      <div id="General" class="tabcontent profile">
	  
	  
	  
	
  <div class="Address">
  
  
  
  

  <div class="">


 <div class="checkoutlast">
    <h5>Order Details</h5>

    <table class="cart_table mb-20">
        <tbody class="m-tt-check">

        @foreach ($order->items as $item)
            <tr class="cart_item">
                <td class="product-td-full">
                    <a class="cart-productimage" href="{{ url('products') }}/{{$item->product->slug}}">
                        <img width="71" height="71"
                             src="{{ asset('storage') }}/{{$item->product->image}}"
                             alt="">
                        <div class="checoo-count">{{ $item->quantity }}</div>
                    </a>
                </td>

                <td class="product-td-full">
                    <a class="cart-productname checout"
                       href="{{ url('products') }}/{{$item->product->slug}}">
                        {{ $item->product->name }}
                    </a>

                    @if ($item->color_name)
                        <p>Color: {{ $item->color_name }}</p>
                    @endif

                    @if ($item->size_name)
                        <p>Size: {{ $item->size_name }}</p>
                    @endif
                </td>

                <td class="product-td-full cat-min-tdr">
                    <span class="amount">
                        <bdi>€ {{ number_format($item->price, 2) }}</bdi>
                    </span>
                </td>
            </tr>
        @endforeach

        </tbody>

        <tfoot class="checkout-ordertable mob-chec-table">
            <tr>
                <th>Subtotal</th>
                <td colspan="4">€ {{ number_format($order->subtotal, 2) }}</td>
            </tr>

            <tr>
                <th>Shipping</th>
                <td colspan="4">
                    {{ $order->shipping_amount > 0 
                        ? '€ ' . number_format($order->shipping_amount, 2) 
                        : 'Free shipping' }}
                </td>
            </tr>

            @if ($order->discount_amount > 0)
            <tr>
                <th>Discount</th>
                <td colspan="4">
                    € {{ number_format($order->discount_amount, 2) }}
                    @if ($order->coupon_code)
                        ({{ $order->coupon_code }})
                    @endif
                </td>
            </tr>
            @endif

            <tr class="order-total">
                <th>Total</th>
                <td colspan="4">
                    <strong>
                        <span class="woocommerce-Price-amount amount">
                            <bdi class="main-total">
                                € {{ number_format($order->total, 2) }}
                            </bdi>
                        </span>
                    </strong>
                </td>
            </tr>
        </tfoot>
    </table>
</div>

  
  </div>
		  
		 
      
		
		
		<div class="row">
    <div class="col-lg-6">
        <div class="saveaddress">
            <h4>Billing address</h4>

            <h3>{{ $order->billing_address['name'] ?? 'N/A' }}</h3>
            <p>{{ $order->billing_address['address'] ?? '' }}</p>
            <p>{{ $order->billing_address['city'] ?? '' }}</p>
            <p>{{ $order->billing_address['pincode'] ?? '' }}</p>
            <p>{{ $order->billing_address['country'] ?? '' }}</p>
            <p>Mobile: {{ $order->billing_address['phone'] ?? '' }}</p>
            <p>Email: {{ $order->billing_address['email'] ?? '' }}</p>


        </div>
    </div>

    <div class="col-lg-6">
        <div class="saveaddress">
            <h4>Shipping address</h4>

            <h3>{{ $order->shipping_address['name'] ?? 'N/A' }}</h3>
            <p>{{ $order->shipping_address['address'] ?? '' }}</p>
            <p>{{ $order->shipping_address['city'] ?? '' }}</p>
            <p>{{ $order->shipping_address['pincode'] ?? '' }}</p>
            <p>{{ $order->shipping_address['country'] ?? '' }}</p>
            <p>Mobile: {{ $order->shipping_address['phone'] ?? '' }}</p>
            <p>Email: {{ $order->shipping_address['email'] ?? '' }}</p>

        </div>
    </div>
</div>


          </div>
          
          
         
        </div>

        
      </div>
    </div>
  </div>
</section>






@endsection