@extends('layouts.app')

@section('content')


<style>
.product-details .product-size-label{
    width: max-content !important;
    border-radius: 5px;
    padding: 0px 10px !important;
}

.size-item.disabled label,
.sc-item.disabled label {
    opacity: .4;
    pointer-events: none;
}


</style>


<style>
.stars a {
    font-size: 24px;
    color: #ccc;
    text-decoration: none;
    cursor: pointer;
}
.stars a.active {
    color: #f4c150;
}
</style>


<script>
    window.productId = {{ $product->id }};
</script>



<div class="ibm-bcrms-main">
 <div class="ibm-bcrms">
 <div class="container-fluid">
 <ul class="ibm-breadcrumb ">
 <li><a href="{{url('/')}}">Home</a></li>
 <li><a href="{{url('/')}}">{{ $product->category?->name }}</a></li>
 <li class="active">{{$product->name}}</li>
 </ul>

 </div>
</div>
</div>


 <section class="vs-product-wrapper product-details ">
  <div class="container-fluid">
    <div class="row ">
   
  <div class="col-lg-6 col-md-12">
    <div class="pr-left-stikk">
   <div class="pr-left-stikk-flex">
  <div class=" col-mythump productdetail-order2">

    <div class="product-thumbs myuthumb" tabindex="1" >

        <div class="product-thumbs-track">
        
        <div class="pt active" data-imgbigurl="{{asset('storage')}}/{{$product->image}}">
          <img src="{{asset('storage')}}/{{$product->image}}" alt="">
        </div>

        @foreach($product->additional_images as $ad_image)
        <div class="pt" data-imgbigurl="{{asset('storage')}}/{{$ad_image}}">
          <img src="{{asset('storage')}}/{{$ad_image}}" alt="">
        </div>
        @endforeach
         
        </div>

    </div>


   </div>
   
  <div class=" productdetail-order1">
	<div class="product-imgsec">
  <div class="product-pic-zoom"> 
  <img class="product-big-img" src="{{asset('storage')}}/{{$product->image}}" alt="" width="100%">

 
   </div>
   </div>
   </div>
  
  </div>
    </div>
  </div>
      <div class="col-lg-6">
        <div class="product-about">
        
          <h2 class="product-title">{{ $product->name }}</h2>
	
        <h3 class="rating-ppr">
          @for ($i = 1; $i <= 5; $i++)
              <i class="fa fa-star {{ $i <= round($reviewStats['avg']) ? '' : 'tt' }}"></i>
          @endfor
          {{ $reviewStats['avg'] ?: '0' }}
        </h3>
          
         <div class="product-info-list">

            <ul>
              
              <!--<li> Stock : <span><span id="stock_detail">-</span> in stock</span></li>-->
      
            </ul>

          </div>
		  	    <p class="price">€ <span id="price_detail">{{ number_format($product->price, 2) }}</span> <del>@if($product->price_strike>0) {{ number_format($product->price_strike, 2) }} @endif</del></p>

         		  <div class="fw-size-s">
                   
					 </div>



      @if (!empty($product->variant_options))
          @foreach ($product->variant_options as $group)
              @if (!empty($group['label']) && !empty($group['attributes']))
              <div class="fw-size-choose">
                  <p><strong>{{ $group['label'] }}</strong></p>
                  <div class="sc-items-wrap d-flex flex-wrap gap-2">
                      @foreach ($group['attributes'] as $attr)
                          <span class="product-size-label variant-tag">{{ $attr }}</span>
                      @endforeach
                  </div>
              </div>
              @endif
          @endforeach
      @endif






         <div class="quantity">
          <p>Quantity</p>
          <div class="pro-qty">
            <input type="text" id="qty_input" value="1" min="1" max="10">
          </div>
        </div>


		 <div class="actions-ss">
		  <a id="add_to_cart_btn" href="javascript:void(0);" class="cart1-link add_to_cart_btn" data-product-id="{{$product->id}}" data-variant-id=""><i class="fal fa-shopping-bag"></i> Add to cart</a>
		    
      <!--<a href="javascript:void(0);" class="cart2-link"><i class="fal fa-heart"></i> Add to Wishlist</a>-->


    <a href="javascript:void(0)"
   class="cart2-link wishlist-detail-btn {{ auth('customer')->check() && $product->isWishlistedByCustomer() ? 'active' : '' }}"
   data-product-id="{{ $product->id }}">

    <i class="fa fa-heart"></i>
    <span class="wishlist-text">
        {{ auth('customer')->check() && $product->isWishlistedByCustomer()
            ? 'Wishlisted'
            : 'Add to Wishlist' }}
    </span>
  </a>
      
		 </div>

          <!--
          <div class="actions">
            <a href="{{url('/checkout')}}" class="vs-btn style2 text-center">Buy Now</a>
          </div>
          -->
     
        </div>
      </div>
    </div>
  </div>
 
</section>



<div class="prfaw-innersec">
  <div class="container-fluid">
    <div class="row  ">
      <div class="col-lg-12  ">
	  
 
        <div class="vs-accordion accordion" id="productAccordion">
          <div class="accordion-item">
            <div class="accordion-header" id="accordionOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Terms</button>
            </div>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="accordionOne" data-bs-parent="#productAccordion">
              <div class="accordion-body">
               

              {!! $product->terms !!}


              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" id="accordionTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Care instructions</button>
            </div>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="accordionTwo" data-bs-parent="#productAccordion">
              <div class="accordion-body">
              
              {!! $product->care_instructions !!}

              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" id="accordion3">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">Description</button>
            </div>
            <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="accordion3" data-bs-parent="#productAccordion">
              <div class="accordion-body">
                
              {!! $product->description !!}

              </div>
            </div>
          </div>
      
 
		   
        
        </div>
      </div>
	  
 
 
    </div>
  </div>
</div>



<div class="Review-prodsec">
<div class="container-fluid">
<div class="rebbsec">

    <div class="title-area text-center">
      <h2 class="sec-title">Customer Reviews</h2>

    </div>
<div class="row justify-content-center align-items-center">
<div class="col-lg-9">
<div class="row justify-content-between align-items-center">
<div class="col-auto">

<div class="rr-counts">

<h3>{{ number_format($reviewStats['avg'], 1) }} out of 5</h3>
<h4>Based on {{ $reviewStats['count'] }} reviews</h4>

</div>
</div>

<div class="col-auto">
<div class="realsec">

<h4>Real People Real Stories</h4>

@for ($star = 5; $star >= 1; $star--)
<h3>
@for ($i = 1; $i <= 5; $i++)
    <i class="fa fa-star {{ $i <= $star ? '' : 'tt' }}"></i>
@endfor
<span>{{ $reviewStats['stars'][$star] ?? 0 }}</span>
</h3>
@endfor

@php /*
<h3><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><span>9</span> </h3>
<h3><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star tt"></i><span>0</span> </h3>

<h3><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star tt"></i><i class="fa fa-star tt"></i><span>0</span> </h3>

<h3><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star tt"></i><i class="fa fa-star tt"></i><i class="fa fa-star tt"></i><span>0</span> </h3>

<h3><i class="fa fa-star"></i><i class="fa fa-star tt"></i><i class="fa fa-star tt"></i><i class="fa fa-star tt"></i><i class="fa fa-star tt"></i><span>0</span> </h3>
*/ @endphp

</div>

</div>

<div class="col-auto">


@if($canReview)
<button class="th-btn review_view_btn">
    Write a review
</button>
@elseif(!auth('customer')->check())
<button class="th-btn" onclick="Swal.fire('Login required','Please login to review','warning')">
    Write a review
</button>
@endif


</div>

</div>
</div>
</div>

<div class="rehr"></div>
<div class="row justify-content-center align-items-center" >
<div class="col-lg-9">

        @if($canReview)
<div class="th-comment-form review-form">
    <div class="form-title">
        <h3 class="blog-inner-title">Write a review</h3>
    </div>

    <form method="POST" action="{{ route('products.reviews.store', $product->id) }}">
        @csrf

        <!-- Rating -->
        <div class="form-group rating-select text-center mb-3">
            <label>Rating</label>
            <p class="stars" id="rating-stars">
                @for($i = 1; $i <= 5; $i++)
                    <a href="#" data-value="{{ $i }}" class="star star-{{ $i }}">★</a>
                @endfor
            </p>
            <input type="hidden" name="rating" id="rating" value="5">
        </div>

        <!-- Review -->
        <div class="col-md-12 form-group">
            <textarea
                name="review"
                placeholder="Write your review"
                class="form-control"
                required
                minlength="10"></textarea>
            <i class="text-title far fa-pencil-alt"></i>
        </div>

        <div class="col-12 form-group mb-0 text-center">
            <button type="submit" class="th-btn">Post Review</button>
        </div>
    </form>
</div>
@endif
		
</div>
</div>
		  
		  
		  <div class="th-sort-bar">
      <div class="row justify-content-between align-items-center">
        <div class="col-md">
          <p class="woocommerce-result-count"><strong>Reviews {{ $reviewStats['count'] }}</strong></p>
        </div>
        <div class="col-md-auto">
          <form class="woocommerce-ordering" method="get">
            <select name="orderby" class="orderby" aria-label="Shop order">
              <option value="menu_order" selected="selected">Sort By</option>
              <option value="Best Seller">Most Recent</option>
              <option value="Featured">Lowest Rating</option>
              <option value="Price low to high">Highest Rating</option>
              
            </select>
          </form>
        </div>
      </div>
    </div>
		  
		  <div class="row  gal-row grid-container gutter-30 has-init-isotope" >

 
      @forelse($product->approvedReviews as $review)
      <div class="col-lg-4 col-md-4 col-sm-6">
          <div class="Ceworkforce-box">
              <h5>
                  @for ($i = 1; $i <= 5; $i++)
                      <i class="fa fa-star {{ $i <= $review->rating ? '' : 'tt' }}"></i>
                  @endfor
              </h5>

              <div class="Cework-box-content">
                  <div class="Cework-box-img d-flex align-items-center">
                      <img src="{{ asset('/img/ruser.png') }}" alt="">
                      <h3>{{ $review->customer->first_name }}</h3>
                  </div>

                  <p>{{ $review->review }}</p>
              </div>
          </div>
      </div>
      @empty
      <p class="text-center">No reviews yet.</p>
      @endforelse
 
      

    
</div>
         

    </div>



</div>
</div>

</div>


<section class="vs-product-wrapper productsec">
  <div class="container-fluid">
    <div class="title-area text-center">
      <h2 class="sec-title">Related Products
</h2>
      
      
    </div>
   <div id="c_444" class="row justify-content-between vs-carousel arrow-margin" data-arrows="true" data-autoplay="true" data-autoplay-speed="3000" data-slide-show="3" data-ml-slide-show="3" data-lg-slide-show="3" data-md-slide-show="3" data-sm-slide-show="4" data-xs-slide-show="1"  data-dots="2"  data-dots="2"  data-ml-dots="2"  data-xl-dots="2"   data-lg-dots="2">
     

   @foreach($related as $rel)

   <div class="col-6 col-md-4 col-lg-3 d-flex">

      <div class="tt-product thumbprod-center product-nohover">

      <div class="tt-image-box">

      <a href="{{ url('products/'.$rel->slug) }}">
        
      <span class="tt-img"><img src="{{ asset('storage/'.$rel->image) }}" alt=""></span>

      <span class="tt-img-roll-over"><img src="{{ asset('storage/'.$rel->image) }}" alt=""> 	</span>

			</a>

			</div>

          <div class="tt-description">

            <h2 class="tt-title"><a href="{{ url('products/'.$rel->slug) }}">{{$rel->name}}</a></h2>

            <div class="tt-price"><span>€{{ number_format($rel->price, 2) }}</span> </div>
          
          </div>
		  
		  <div class="product-bb-btns">
			
			<a href="{{ url('products/'.$rel->slug) }}" class="th-btn"><i class="fa-regular fa-cart-shopping"></i> View Product</a>

			</div>
        </div>
      </div>

    @endforeach

     
     
    </div>
  </div>
</section>

@endsection


@section('footer_extras')

<script src="{{asset('js/jquery.slicknav.min.js')}}"></script>

<script src="{{asset('js/jquery.nicescroll.min.js')}}"></script>

<script src="{{asset('js/jquery.zoom.min.js')}}"></script> 

<script src="{{asset('js/jquery-ui.min.js')}}"></script> 
<script src="{{asset('js/mains.js?v1.0')}}"></script>

<script src="{{asset('js/functions.js')}}"></script> 
<script src="{{asset('js/plugins.min.js')}}"></script>



<script>
$(document).ready(function() {
    $('.variant-selector').change(function() {
        var price = $(this).data('price');
        var variantId = $(this).val();
        
        $('#price_detail').hide().html(price).fadeIn(300);
        $('#add_to_cart_btn').data('variant-id', variantId);
    });
});
</script>

<script>
$(document).ready(function () {

    $(document).on('click', '.wishlist-detail-btn', function (e) {

        e.preventDefault();

        let btn = $(this);
        let productId = btn.data('product-id');

        // Prevent double click
        if (btn.hasClass('loading')) return;
        btn.addClass('loading');

        $.ajax({
            url: "{{ route('wishlist.toggle') }}",
            type: "POST",
            data: {
                product_id: productId,
                _token: "{{ csrf_token() }}"
            },
            success: function (res) {

                if (res.status === 'added') {
                    btn.addClass('active');
                    btn.find('.wishlist-text').text('Wishlisted');
                }

                if (res.status === 'removed') {
                    btn.removeClass('active');
                    btn.find('.wishlist-text').text('Add to Wishlist');
                }
            },
            error: function (xhr) {

                if (xhr.status === 401) {
                    Swal.fire({
                        toast: true,
                        icon: 'warning',
                        title: 'Please login to manage wishlist',
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            },
            complete: function () {
                btn.removeClass('loading');
            }
        });
    });

});
</script>


<script>
document.addEventListener('DOMContentLoaded', function () {

    const stars = document.querySelectorAll('#rating-stars .star');
    const ratingInput = document.getElementById('rating');

    stars.forEach(star => {
        star.addEventListener('click', function (e) {
            e.preventDefault();

            const value = this.dataset.value;
            ratingInput.value = value;

            stars.forEach(s => {
                s.classList.toggle('active', s.dataset.value <= value);
            });
        });
    });

});
</script>

@endsection