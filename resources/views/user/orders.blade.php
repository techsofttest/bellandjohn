@extends('layouts.app')


@section('content')



 <section class="Myaccountsec">
  <div class="container-fluid">
    <div class="row">
      

      @include('user.user-sidebar')
  
    
      <div class="col-lg-9 col-md-8">

      <div id="General" class="tabcontent profile">
	  
	
      <div class="Address">
      <h5>Order History</h5>

      <div class="woocommerce-cart-form">


      @forelse($orders as $order)

<table class="cart_table mb-30">
    <thead class="dash-tr">
        <tr>
            <th class="cart-col-image">
                {{ $order->created_at->format('M d, Y') }}
            </th>

            <th class="cart-col-productname">
                #{{ $order->order_number }}
            </th>

            <th class="cart-col-productname">
                <span class="oo-sorder">
                    {{ ucfirst($order->payment_method) }} Order
                </span>
            </th>

            <th class="cart-col-productname">
                <span class="oo-sstatus-{{ $order->payment_status === 'paid' ? 'success' : 'fail' }}">
                    {{ ucfirst($order->payment_status) }}
                </span>
            </th>
        </tr>
    </thead>

    <tbody>

        {{-- Order Items --}}
        @foreach($order->items as $item)
        <tr class="cart_item">
            <td data-title="Order Id">
                <img width="80" height="80"
                     src="{{ asset('storage/'.$item->product->image) }}"
                     alt="">
            </td>

            <td class="product-td-full">
                <a class="cart-productname"
                   href="{{ url('products/'.$item->product->slug) }}">
                    {{ $item->title }}
                </a>

                @if($item->variant)
                    
                @endif

                <p class="color-carttablee">
                    Quantity: {{ $item->quantity }}
                </p>
            </td>

            <td class="product-td-full">
                <p class="price-carttablee">
                    {{ $order->currency }} {{ number_format($item->total, 2) }}
                </p>
            </td>

            <td>
                <a href="{{ url('products/'.$item->product->slug) }}"
                   class="reorder-swc">
                    Re Order
                </a>
            </td>
        </tr>
        @endforeach

        {{-- Order Footer --}}
        <tr class="cart_item final-tt">
            <td colspan="2">
                <p class="color-carttablee">
                    {{ $order->items->sum('quantity') }} Items
                </p>
            </td>

            <td>
                <p class="price-carttablee">
                    {{ $order->currency }} {{ number_format($order->total, 2) }}
                </p>
            </td>

            <td>
                <div class="Order-buttons">
                    <a href="{{ route('customer.orderdetail', $order->id) }}"
                       class="oview">
                        View Order
                    </a>
                </div>
            </td>
        </tr>

    </tbody>
</table>

@empty
    <p class="text-center">You have no orders yet.</p>
@endforelse
	  
	  
	  
	    <table class="cart_table mb-30">
        <thead class="dash-tr">
          <tr>
            <th class="cart-col-image">Oct 5 2025</th>
            <th class="cart-col-productname">#16079</th>
			 <th class="cart-col-productname"> <span class="oo-sorder">Un Paid</span></th>
            
         		 <th class="cart-col-productname"> <span class="oo-sstatus-fail">Failed</span></th>
            
 
          </tr>
        </thead>
        <tbody>
          <tr class="cart_item">
            <td data-title="Order Id"><img width="80" height="80" src="assets/img/products/p1-1.jpg" alt=""></td>
         <td data-title="Product Name" class="product-td-full"><a class="cart-productname" href="product-detail.html">Goldplated Rings</a>
			
	 
		<p class="color-carttablee"> Color: White</p>
				<p class="color-carttablee">Quantity: 1</p>
			</td>
		 
           <td data-title="Product Name" class="product-td-full"> 
			
			<p class="price-carttablee">€ 1,875.00 </p>
	 
			</td>
           
            <td data-title="Action"><div class=" "><a href="product-detail.html"   class="reorder-swc">Re Order</a></div></td>
          </tr>
		  
		  <tr class="cart_item final-tt">
        
         <td data-title="Product Name" class="product-td-full" colspan="2"> 
			
	 
		<p class="color-carttablee">1 Items</p>
				 
			</td>
		 
           <td data-title="Product Name" class="product-td-full"> 
			
			<p class="price-carttablee">€ 1,875.00 </p>
	 
			</td>
           
            <td data-title="Action"><div class="Order-buttons"><a href="order-details.html" title="View Order" class="oview">View Order</a></div></td>
          </tr>
		  </tbody>
      </table>
	  
	  <!-- ----------->
    </div>
          </div>
          
          
         
        </div>

        
      </div>
    </div>
  </div>
</section>




 


@endsection