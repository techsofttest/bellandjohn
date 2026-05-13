@extends('layouts.app')


@section('content')

<style>

#price-slider {
    margin-top: 8px;
}

.noUi-target {
    border-radius: 6px;
}

.noUi-connect {
    background: #0d6efd; /* bootstrap primary */
}

.noUi-handle {
    border-radius: 50%;
    width: 18px;
    height: 18px;
    top: -6px;
}

.price-labels {
    font-size: 14px;
    color: #333;
}

</style>


<!-- noUiSlider CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.8.0/nouislider.min.css" rel="stylesheet">


<div class="ibm-bcrms-main">
 <div class="ibm-bcrms">
 <div class="container-fluid">
 <ul class="ibm-breadcrumb ">
 <li><a href="{{url('/')}}">Home</a></li>
 <li><a href="{{url('/products')}}">Products</a></li>
 <li class="active">{{$pp_title}}</li>
 </ul>
  <h3>{{$pp_title}}</h3>
 </div>
</div>
</div>


<div class="product-inner-ss">
  <div class="container-fluid">
  
  <div class="row">


  <div class="col-lg-3 col-md-4">

	<form method="GET" action="{{ url()->current() }}">
  
    <div class="ff-side-mainsec">
	<div class="ff-filter">
	
	<h3 class="ff-filter-heading">Filter:</h3>
	
	</div>
    
	
	<div class="ff-availbility">
	<h3 class="ff-availbility-heading">Availability</h3>
<ul class="ff-availability-ul ">

							<div class="filter-attribute-list-inner">

                                
								<li class="filter-attribute-item" style="display:none;">
									<input class="filter-attribute-checkbox ib-m" type="checkbox" id="in_stock" name="in_stock" value="1"
									{{ request('in_stock') ? 'checked' : '' }}>
									<label for="in_stock" class="filter-attribute-label ib-m">
									In stock
									</label>
								</li>
							 
								<li class="filter-attribute-item">

									<input class="filter-attribute-checkbox ib-m" type="checkbox" id="out_stock" name="out_stock" value="1"
   	 								{{ request('out_stock') ? 'checked' : '' }}>

									<label for="out_stock" class="filter-attribute-label ib-m">
									Out of stock
									</label>

								</li>
							 
							</div>
						</ul>
	
	</div>


	<div class="ff-price">
	
	<h3 class="ff-price-heading">Price</h3>
	
	<!--<p>The highest price is € 5,500.00</p>-->
	
	<div class="row">


	 <div class="col-12">

        <!-- Price display -->
        <div class="d-flex justify-content-between mb-2 price-labels">
            <span>
                From €<strong id="price-from-label">0</strong>
            </span>
            <span>
                To €<strong id="price-to-label">50000</strong>
            </span>
        </div>

        <!-- Slider -->
        <div id="price-slider"></div>

        <!-- Hidden inputs (used by Laravel request) -->
        <input type="hidden" name="price_from" id="price_from" value="{{ request('price_from') ?? 0 }}">
        <input type="hidden" name="price_to" id="price_to" value="{{ request('price_to') ?? 50000 }}">

    </div>

	
	</div>


	</div>
		<aside class="sidebar-aa">
		  <ul class="filter ul-reset">
				<li class="filter-item">
					<section class="filter-item-inner">
						<h3 class="filter-item-inner-heading minus">
							Category
						</h3>
						<ul class="filter-attribute-list ul-reset">
							<div class="filter-attribute-list-inner">


							@foreach($categories as $category)
							<li class="filter-attribute-item">
								<input type="checkbox"
									name="categories[]"
									value="{{ $category->id }}"
									id="category-{{ $category->id }}"
									{{ in_array($category->id, request('categories', [])) ? 'checked' : '' }}>
								<label for="category-{{ $category->id }}">
									{{ $category->name }}
								</label>
							</li>
							@endforeach

									
									 
							</div>
						</ul>
					</section>
				</li>

			 

		 
			</ul>
		</aside>


		<div class="mt-4 d-grid gap-2">
    <button type="submit" class="btn btn-primary">
        Filter
    </button>

    <a href="{{ url()->current() }}" class="btn btn-outline-secondary">
        Clear
    </a>
</div>

	
	</div>

	</form>

  </div>


    <div class="col-lg-9 col-md-8">
  
  <div class="ff-right-mainsec">
  
  <div class="ff-right-result">
  
  <div class="row align-items-center justify-content-between">
  <div class="col-auto">
  <p class="ff-right-result-p">{{count($products)}} products</p>
  </div>
    <div class="col-auto">
  <select id="sort" class="selectpicker">
            
            <option selected disabled >Sort by</option>
            <option value="Featured">Featured</option>
 <option value="Best selling">Best selling</option>
 <option value="Price, high to low ">Price, high to low</option>
  <option value="Price, low to high ">Price, low to high</option>
          </select>
  </div>
  </div>
  </div>
  <!--  start   -->
  
  <div class="row">
  

    @forelse($products as $product)
    <div class="col-12 col-md-6 col-lg-4 d-flex">
        <div class="tt-product thumbprod-center product-nohover">
            <div class="tt-image-box">
                <a href="{{ url('products/' . $product->slug) }}">
                    <span class="tt-img">
                        <img src="{{ asset('storage/' . $product->image) }}" alt="">
                    </span>
                    <span class="tt-img-roll-over">
                        <img src="{{ asset('storage/' . ($product->first_additional_image ?? $product->image)) }}" alt="">
                    </span>
                </a>

                <a href="javascript:void(0)"
                   class="tt-btn-wishlist {{ auth('customer')->check() && $product->isWishlistedByCustomer() ? 'active' : '' }}"
                   data-product-id="{{ $product->id }}"
                   title="Add to wishlist">
                    <i class="fa fa-heart"></i>
                </a>
            </div>

            <div class="tt-description">
                <h2 class="tt-title"><a href="{{ url('products/' . $product->slug) }}">{{ $product->name }}</a></h2>
                <div class="tt-price">
                    <span class="old-price">
                        {{ number_format($product->price, 2) }}
                        <del>@if($product->price_strike > 0) {{ number_format($product->price_strike, 2) }} @endif</del>
                    </span>
                </div>
            </div>

            <div class="product-bb-btns">
                <a href="{{ url('products/' . $product->slug) }}" class="th-btn">Buy Now</a>
                
				<!--<a href="javascript:void(0);" class="th-btn">
                    <img src="{{ asset('img/cart-1.png') }}" alt=""> Add to Cart
                </a>-->

            </div>
        </div>
    </div>

@empty
    <div class="col-12 text-center py-5">
        <h4>No products found.</h4>
    </div>
@endforelse
	  
	  


     
    </div>
  <!-------- end --->
  </div>
  </div>
  
  </div>
</div>
</div>



<!-- noUiSlider JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.8.0/nouislider.min.js"></script>


<script>
document.addEventListener('DOMContentLoaded', function () {

    var slider = document.getElementById('price-slider');

    var priceFromInput = document.getElementById('price_from');
    var priceToInput   = document.getElementById('price_to');

    var priceFromLabel = document.getElementById('price-from-label');
    var priceToLabel   = document.getElementById('price-to-label');

    var startFrom = parseInt(priceFromInput.value);
    var startTo   = parseInt(priceToInput.value);

    noUiSlider.create(slider, {
        start: [startFrom, startTo],
        connect: true,
        step: 100,
        range: {
            min: 0,
            max: 50000
        },
        format: {
            to: value => Math.round(value),
            from: value => Number(value)
        }
    });

    slider.noUiSlider.on('update', function (values) {
        priceFromInput.value = values[0];
        priceToInput.value   = values[1];

        priceFromLabel.textContent = values[0];
        priceToLabel.textContent   = values[1];
    });

});
</script>


@endsection