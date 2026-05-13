@extends('layouts.app')


@section('content')


<div class="ibm-bcrms-main">
 <div class="ibm-bcrms">
 <div class="container-fluid">
 <ul class="ibm-breadcrumb ">
 <li><a href="{{url('/')}}">Home</a></li>
 <li class="active">Your cart</li>
 </ul>
  <h3>Your cart</h3>
 </div>
</div>
</div>

<!--
 <div class="container-fluid">
<div class="cShipping-Address-box-nmain">
 
<div class="cShipping-Address-box">
	<div class="cShipping-address-left">
	 
	<div class="cship-ff"><strong>Deliver to: </strong> Bibin <span>Home</span> +353 1 677 3727</div>
	<div class="cship-ss">Q House Suite 408 76 Furze Rd Sandyford Ind Estate Dublin D18 HH67 Ireland</div>
	</div>
	<a onclick="myFunction3()" class="change-add">Change</a>
 
</div>

	</div>
	</div>
-->


 <div class="vs-cart-wrapper wishlist-sec">
  <div class="container-fluid">
    
    <form action="#" class="woocommerce-cart-form">
      <table class="cart_table">
        <thead>
          <tr>
          
            <th colspan="2" class="cart-col-productname">Product </th>
			 
   
         
            <th class="cart-col-total">Quantity</th>
			
            <th class="cart-col-remove">Total</th>
			   <th class="cart-col-remove">Action</th>
          </tr>
        </thead>
        <tbody>


         @php $subtotal = 0; @endphp

@forelse($cart as $key => $item)
@php
    $rowTotal = $item['price'] * $item['qty'];
    $subtotal += $rowTotal;
@endphp

<tr class="cart_item">
    <td data-title="Product Image">
        <a class="cart-productimage" href="#">
            <img width="120" height="120"
                 src="{{ asset('storage/'.$item['image']) }}" alt="">
        </a>
    </td>

    <td data-title="Product Name" class="product-td-full">
        <a class="cart-productname" href="#">
            {{ $item['name'] }}
        </a>

        <p class="price-carttablee">
            € {{ number_format($item['price'], 2) }}
        </p>

        <p class="size-carttablee">
            Size: {{ $item['size'] ?? '-' }}
        </p>

        <p class="color-carttablee">
            Color: {{ $item['color'] ?? '-' }}
        </p>

    </td>

    <td data-title="Quantity">
        <div class="quantitynew">
            <div class="pro-qty">
                <input type="text"
                       value="{{ $item['qty'] }}"
                       data-key="{{ $key }}"
                       class="cart-qty">
            </div>
        </div>
    </td>

    <td data-title="Sub Total">
        <p class="total-carttablee">
            € {{ number_format($rowTotal, 2) }}
        </p>
    </td>

    <td data-title="Action">
        <a href="javascript:void(0)"
           class="remove remove-cart"
           data-key="{{ $key }}">
            <i class="fal fa-trash-alt"></i>
        </a>
    </td>
</tr>
@empty
<tr>
    <td colspan="6" class="text-center">
        Your cart is empty
    </td>
</tr>
@endforelse


@php
    $discount = session('discount', 0);
    $grandTotal = $subtotal - $discount;
@endphp
        
        
            <td colspan="6" class="actions">
			<div class="vs-cart-coupon">
			
			<form>
                <input type="text" class="form-control" placeholder="Coupon Code...">
                <button type="submit" class="vs-btn rounded-1 shadow-none">Apply Coupon</button>
				
				</form>
              </div>
			  <a href="#" class=" cont-shopinn">Continue shopping</a>
              
			  
			 </td>
          </tr>
		  
        </tbody>
      </table>
    </form>
	
	<div class="row justify-content-end">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <h2 class="ccsummary-title">Cart Totals</h2>
        <table class="cart_totals">
          <tbody>
           
          <tr>
    <td>Cart Subtotal</td>
    <td><span class="amount">€ {{ number_format($subtotal, 2) }}</span></td>
</tr>

<tr>
    <td>Discount</td>
    <td><span class="amount">€ {{ number_format($discount, 2) }}</span></td>
</tr>

          </tbody>
          <tfoot>
           
          <tr class="order-total">
    <td class="est-title">Estimated total</td>
    <td>
        <strong>
            <span class="amount">€ {{ number_format($grandTotal, 2) }}</span>
        </strong>
    </td>
</tr>

          </tfoot>
        </table>
        <div class="wc-proceed-to-checkout mb-30"><a href="{{url('checkout')}}" class="vs-btn rounded-1 shadow-none">Proceed to checkout</a></div>
      </div>
    </div>
 
  </div>
</div>






@endsection


@section('footer_extras')

<script src="{{asset('js/jquery.slicknav.min.js')}}"></script>

<script src="{{asset('js/jquery.nicescroll.min.js')}}"></script>

<script src="{{asset('js/jquery.zoom.min.js')}}"></script> 

<script src="{{asset('js/jquery-ui.min.js')}}"></script> 

<script src="{{asset('js/mains.js')}}"></script>

<script src="{{asset('js/functions.js')}}"></script> 

<script src="{{asset('js/plugins.min.js')}}"></script>



<script>
$(document).on('click', '.pro-qty .qtybtn', function () {

    let $btn   = $(this);
    let $wrap  = $btn.closest('.pro-qty');
    let $input = $wrap.find('.cart-qty');

    let key = $input.data('key');
    let qty = parseInt($input.val());

    $.post("{{ route('cart.update') }}", { key: key, qty: qty }, function () {
        location.reload();
    });

});
</script>


<script>
$(document).on('click', '.remove-cart', function () {

    let key = $(this).data('key');

    alertify.confirm(
        'Remove Item',
        'Are you sure you want to remove this item?',
        function () {
            $.post("{{ route('cart.remove') }}", { key: key }, function () {
                location.reload();
            });
        },
        function () {}
    );

});
</script>



@endsection