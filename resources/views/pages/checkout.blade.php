@extends('layouts.app')


@section('content')


<div class="ibm-bcrms-main">
 <div class="ibm-bcrms">
 <div class="container-fluid">
 <ul class="ibm-breadcrumb ">
 <li><a href="{{url('/')}}">Home</a></li>
 <li class="active">Checkout</li>
 </ul>
  <h3>Checkout</h3>
 </div>
</div>
</div>

 
<div class="vs-checkout-wrapper Checkout-sec finaa-ccf">
  <div class="container-fluid">
  <div class="row">
  
  <div class="col-lg-8 order-2 order-lg-1">

  @guest('customer')

<div class="woocommerce-form-login-toggle">
    <div class="woocommerce-info">
        Returning customer?
        <a href="javascript:void(0)" class="showlogin">Click here to login</a>
    </div>
</div>

<form action="{{ route('customer.login') }}"
      method="POST"
      class="woocommerce-form-login"
      style="display:none;">

    @csrf

    <div class="row">
        <div class="col-lg-12">
            <div class="row">

                <div class="form-group col-sm-6">
                    <input type="email"
                           name="email"
                           class="form-control"
                           placeholder="Email address"
                           required>
                </div>

                <div class="form-group col-sm-6">
                    <input type="password"
                           name="password"
                           class="form-control"
                           placeholder="Password"
                           required>
                </div>

                <div class="form-group col-12">
                    <button type="submit" class="vs-btn shadow-none">
                        Login
                    </button>
                </div>

            </div>
        </div>
    </div>

</form>

@endguest


    <div class="woocommerce-form-coupon-toggle">
      <div class="woocommerce-info">Have a coupon? <a href="#" class="showcoupon">Click here to enter your code</a></div>
    </div>
    <form action="#" class="woocommerce-form-coupon" style="display:none;">
      <div class="row">
        <div class="col-lg-6 col-md-7">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Write your coupon code">
          </div>
          <div class="form-group">
            <button type="submit" class="vs-btn shadow-none">Apply coupon</button>
          </div>
        </div>
      </div>
    </form>
	

    <form method="POST" action="{{url('checkout/confirm')}}" class="woocommerce-checkout mt-40">

    @csrf



<div class="row">


<div id="shipping_section">

<h4 class="mb-3">Shipping Address</h4>


<style>

  .address-card {
    display: block;
    cursor: pointer;
}

.address-radio {
    display: none;
}

.address-content {
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    padding: 16px;
    background-color: #fff;
    transition: all 0.2s ease;
}

/* Selected */
.address-radio:checked + .address-content {
    border-color: #0d6efd;
    background-color: #f0f7ff;
}

/* Hover */
.address-content:hover {
    border-color: #0d6efd;
}

  .address-type-badge{
    background: grey;
    padding: 5px;
    border-radius: 10px;
    margin: 5px 10px;
  }

</style>

@auth('customer')
    @if($addresses->count())
        <div class="mb-4">
            <label class="form-label fw-bold mb-2">
                Select Shipping Address
            </label>

            <div class="address-list">

                {{-- Saved Addresses --}}
                @foreach($addresses as $address)
                    <label class="address-card w-100 mb-3">
                        <input
                            type="radio"
                            name="shipping_address_id"
                            value="{{ $address->id }}"
                            class="address-radio shipping-address-radio"
                            {{ $address->is_default ? 'checked' : '' }}
                        >

                        <div class="address-content">
                            <strong class="address-type-badge">
                                {{ ucfirst($address->address_type) }}
                            </strong>

                            @if($address->fullname)
                                {{ $address->fullname }},
                            @endif
                             {{ $address->address_line1 }}…
                        </div>
                    </label>
                @endforeach

                {{-- Add New Address Option --}}
                <label class="address-card w-100 mb-3">
                    <input
                        type="radio"
                        name="shipping_address_id"
                        value="new"
                        class="address-radio shipping-address-radio"
                    >

                    <div class="address-content text-center text-muted">
                        ➕ Add New Address
                    </div>
                </label>

            </div>
        </div>
    @endif
@endauth


<div
    id="shipping_manual_form"
    class="p-3 mb-4 border rounded"
    style="
        @auth('customer')
            {{ $addresses->count() ? 'display:none;' : '' }}
        @endauth
    "
>
    <div class="row g-3">

        <div class="col-md-12">
            <input type="text" name="shipping[name]" class="form-control" placeholder="Full Name" required>
        </div>

        <div class="col-md-6">
            <input type="text" name="shipping[phone]" class="form-control" placeholder="Phone" required>
        </div>

        <div class="col-md-6">
            <input type="email" name="shipping[email]" class="form-control" placeholder="Email" required>
        </div>

        <div class="col-12">
            <input type="text" name="shipping[address]" class="form-control" placeholder="Address" required>
        </div>

        <div class="col-md-4">
            <input type="text" name="shipping[city]" class="form-control" placeholder="City" required>
        </div>

        <div class="col-md-4">
            <input type="text" name="shipping[state]" class="form-control" placeholder="State" required>
        </div>

        <div class="col-md-4">
            <input type="text" name="shipping[pincode]" class="form-control" placeholder="Pincode" required>
        </div>


        <div class="col-md-12">
          <label class="fw-bold mb-1">Address Type</label>
          <select name="shipping[address_type]" class="form-control" required>
              <option value="home">Home</option>
              <option value="work">Work</option>
          </select>
      </div>



    </div>
</div>




</div>

  </div>

  
  <div class="row">



{{-- BILLING ADDRESS --}}

<h4 class="mb-3">Billing Address</h4>

<div class="form-check mb-3">
    <input class="form-check-input"
           type="checkbox"
           id="same_as_shipping"
           name="same_as_shipping"
           value="1"
           checked>
    <label class="form-check-label" for="same_as_shipping">
        Same as shipping address
    </label>
</div>


<div id="billing_section" style="display:none;">


@auth('customer')
    @if($addresses->count())
        <div class="mb-4">
            <label class="form-label fw-bold mb-2">
                Select Billing Address
            </label>

            <div class="address-list">

                {{-- Saved Addresses --}}
                @foreach($addresses as $address)
                    <label class="address-card w-100 mb-3">
                        <input
                            type="radio"
                            name="billing_address_id"
                            value="{{ $address->id }}"
                            class="address-radio shipping-address-radio"
                            {{ $address->is_default ? 'checked' : '' }}
                        >

                        <div class="address-content">
                            <strong class="address-type-badge">
                                {{ ucfirst($address->address_type) }}
                            </strong>

                            @if($address->fullname)
                                {{ $address->fullname }},
                            @endif
                            {{ $address->address_line1 }}…
                        </div>
                    </label>
                @endforeach

                <label class="address-card w-100 mb-3">
                  <input
                      type="radio"
                      name="billing_address_id"
                      value="new"
                      class="address-radio billing-address-radio"
                  >
                  <div class="address-content text-center text-muted">
                      ➕ Add New Address
                  </div>
              </label>

            </div>
        </div>
    @endif
@endauth




<div
    id="billing_manual_form"
    class="p-3 border rounded"
    style="display:none;"
>
    <div class="row g-3">

        <div class="col-md-12">
            <input type="text" name="billing[name]" class="form-control" placeholder="Full Name">
        </div>

        <div class="col-md-6">
            <input type="text" name="billing[phone]" class="form-control" placeholder="Phone">
        </div>

        <div class="col-md-6">
            <input type="email" name="billing[email]" class="form-control" placeholder="Email">
        </div>

        <div class="col-12">
            <input type="text" name="billing[address]" class="form-control" placeholder="Address">
        </div>

        <div class="col-md-4">
            <input type="text" name="billing[city]" class="form-control" placeholder="City">
        </div>

        <div class="col-md-4">
            <input type="text" name="billing[state]" class="form-control" placeholder="State">
        </div>

        <div class="col-md-4">
            <input type="text" name="billing[pincode]" class="form-control" placeholder="Pincode">
        </div>


        <div class="col-md-12">
          <label class="fw-bold mb-1">Address Type</label>
          <select name="billing[address_type]" class="form-control" required>
              <option value="home">Home</option>
              <option value="work">Work</option>
          </select>
      </div>



    </div>
</div>

</div>

</div>

	 
<div class="Delvery-address-new">
		 
				<h2 class="h4">	Payment</h2>
	
<p>All transactions are secure and encrypted.</p>
<div class="pay-sec">

<p><strong>Stripe Secure (UPI, Cards, Int'l Cards, Wallets)</strong></p>
<div class="payment dert-pp "> 
		  <img src="{{asset('img/pay1.jpg')}}" alt=""> <img src="{{asset('img/pay2.jpg')}}" alt=""> <img src="{{asset('img/pay3.jpg')}}" alt=""> <img src="{{asset('img/pay4.jpg')}}" alt=""> <img src="{{asset('img/pay5.jpg')}}" alt=""> <img src="{{asset('img/pay6.jpg')}}" alt=""> </div>
</div>

<button type="submit" class="vs-btn ">Pay Now</button>
    
		</div>

	
     
    </form>
  
  </div>
  
  <div class="col-lg-4 order-1 order-lg-2">
  
    <div class="checkoutlast-sticky">
  <div class="checkoutlast">
  
  
    <h4 class=" ">Your Order</h4>
    


    <table class="cart_table mb-20">
    <tbody class="m-tt-check">

        @forelse($cart as $item)
            @php
                $rowTotal = $item['price'] * $item['qty'];
            @endphp

            <tr class="cart_item">
                <td class="product-td-full">
                    <a class="cart-productimage" href="#">
                        <img width="71" height="71"
                             src="{{ asset('storage/'.$item['image']) }}"
                             alt="{{ $item['name'] }}">
                        <div class="checoo-count">{{ $item['qty'] }}</div>
                    </a>
                </td>

                <td class="product-td-full">
                    <a class="cart-productname checout" href="#">
                        {{ $item['name'] }}
                    </a>

                    @if(!empty($item['color']))
                        <p>Color: {{ $item['color'] }}</p>
                    @endif

                    @if(!empty($item['size']))
                        <p>Size: {{ $item['size'] }}</p>
                    @endif
                </td>

                <td class="product-td-full cat-min-tdr">
                    <span class="amount">
                        <bdi>€ {{ number_format($rowTotal, 2) }}</bdi>
                    </span>
                </td>
            </tr>

        @empty
            <tr>
                <td colspan="3" class="text-center">
                    Your cart is empty
                </td>
            </tr>
        @endforelse

    </tbody>

    @if(count($cart))
    <tfoot class="checkout-ordertable mob-chec-table">

        <tr class="cart-subtotal">
            <th>Subtotal</th>
            <td colspan="4">
                <span class="amount">
                    <bdi>€ {{ number_format($subtotal, 2) }}</bdi>
                </span>
            </td>
        </tr>

        <tr class="woocommerce-shipping-totals shipping">
            <th>Shipping</th>
            <td colspan="4">Free shipping</td>
        </tr>

        <tr class="cart-subtotal">
            <th>Discount</th>
            <td colspan="4">
                <span class="amount">
                    <bdi>
                        € {{ number_format($discount, 2) }}
                        @if($discount > 0)
                            <small>(Coupon)</small>
                        @endif
                    </bdi>
                </span>
            </td>
        </tr>

        <tr class="order-total">
            <th>Total</th>
            <td colspan="4">
                <strong>
                    <span class="amount">
                        <bdi class="main-total">
                            € {{ number_format($total, 2) }}
                        </bdi>
                    </span>
                </strong>
            </td>
        </tr>

    </tfoot>
    @endif
</table>




    </form>
 
  </div>
  
  </div>
  
  </div>
  
  
  </div>
  
    
  
  </div>
</div>



@endsection


@section('footer_extras')


 <script>
 function myFunction1() {
  var x = document.getElementById("myDIV1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
 </script>
 <script>
 function myFunction2() {
  var x = document.getElementById("myDIV2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
 </script>
 
  <script>
 function myFunction3() {
  var x = document.getElementById("myDIV3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
 </script>




<script>
document.addEventListener('DOMContentLoaded', function () {

    const shippingSelect = document.getElementById('shipping_address_select');
    const shippingManual = document.getElementById('shipping_manual_form');

    if (shippingSelect) {
        shippingSelect.addEventListener('change', function () {
            shippingManual.style.display = this.value ? 'none' : 'block';
        });
    }

    const sameAsShipping = document.getElementById('same_as_shipping');
    const billingSection = document.getElementById('billing_section');

    sameAsShipping.addEventListener('change', function () {
        billingSection.style.display = this.checked ? 'none' : 'block';
    });

});
</script>




<script>
document.addEventListener('DOMContentLoaded', function () {

    const radios = document.querySelectorAll('.shipping-address-radio');
    const manualForm = document.getElementById('shipping_manual_form');

    if (!manualForm) return;

    const manualInputs = manualForm.querySelectorAll('input, select, textarea');

    function toggleManualForm(show) {
        manualForm.style.display = show ? 'block' : 'none';

        manualInputs.forEach(input => {
            if (show) {
                input.setAttribute('required', 'required');
            } else {
                input.removeAttribute('required');
            }
        });
    }

    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            toggleManualForm(this.value === 'new');
        });
    });

    // 🔹 Initial state on page load
    const checked = document.querySelector('.shipping-address-radio:checked');
    toggleManualForm(!checked || checked.value === 'new');

});
</script>


<script>
document.addEventListener('DOMContentLoaded', function () {

    const billingRadios = document.querySelectorAll('.billing-address-radio');
    const billingManualForm = document.getElementById('billing_manual_form');

    if (!billingManualForm) return;

    const inputs = billingManualForm.querySelectorAll('input, select, textarea');

    function toggleBillingManual(show) {
        billingManualForm.style.display = show ? 'block' : 'none';

        inputs.forEach(input => {
            show
                ? input.setAttribute('required', 'required')
                : input.removeAttribute('required');
        });
    }

    billingRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            toggleBillingManual(this.value === 'new');
        });
    });

});
</script>




@endsection