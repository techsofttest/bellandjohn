@extends('layouts.app')


@section('content')
<section class="banner-sec hero-area hero-style-three">
  <div class="container-fluid">
  <div class="hero-main-wrapper position-relative">
    <div class="owl-carousel owl-theme single-slider middle-ctrl">
	   <div class="item"> <img src="{{asset('img/banner1.jpg')}}" alt="" class="uyd">
        <figcaption >
        
            <div class="row  " >
             <div class="col-lg-12">
                <div class="content-part">
                
                  <h1 class="sl-title"> IRISH BAZZAR</h1>
 <h3 class="subl-title">Timeless Jewels & Adorable Styles for Little Ones </h3>
<div class="slider-bottom">
 <a href="{{url('jewellery')}}" class="vs-btn style7">SHOP JEWELLERY</a>
<a href="{{url('clothing')}}" class="vs-btn style2">SHOP KIDS WEAR</a>		
 </div>
                </div>
              </div>
            </div>
      
        </figcaption>
      </div>
      <div class="item"> <img src="{{asset('img/banner2.jpg')}}" alt="" class="uyd">
        <figcaption >
    
            <div class="row">
              <div class="col-lg-12">
                <div class="content-part">
                 
                <h1 class="sl-title"> IRISH BAZZAR</h1>
 <h3 class="subl-title">Timeless Jewels & Adorable Styles for Little Ones </h3>
<div class="slider-bottom">
 <a href="{{url('jewellery')}}" class="vs-btn style7">SHOP JEWELLERY</a>
<a href="{{url('clothing')}}" class="vs-btn style2">SHOP KIDS WEAR</a>		
 </div>
                </div>
              </div>
        
          </div>
        </figcaption>
      </div>
   
      <div class="item"> <img src="{{asset('img/banner3.jpg')}}" alt="" class="uyd">
        <figcaption >
       
            <div class="row">
             <div class="col-lg-12">
                <div class="content-part">
                   
                    <h1 class="sl-title"> IRISH BAZZAR</h1>
 <h3 class="subl-title">Timeless Jewels & Adorable Styles for Little Ones </h3>
<div class="slider-bottom">
 <a href="{{url('jewellery')}}" class="vs-btn style7">SHOP JEWELLERY</a>
<a href="{{url('clothing')}}" class="vs-btn style2">SHOP KIDS WEAR</a>		
 </div>
                </div>
              </div>
            </div>
         
        </figcaption>
      </div>
    </div>
	 </div>
  </div>
</section>

<section class="Featuuude-sec">
  <div class="container-fluid">
    <div class="title-area text-center">
      <h2 class="sec-title">Featured Category
</h2>
      
      
    </div>
	
	<div class="row justify-content-center">
	
	<div class="col-lg-6 col-md-6 col-sm-12 d-flex">
	
	 <a href="{{url('jewellery')}}" class="catt-boxx">
	 
	 <div class="catt-boxx-img">
	 
	 <img src="{{asset('img/category/main1.jpg')}}
" alt="" width="100%">
	 	</div>
		 <div class="catt-boxx-content">
	 
	<h3>Jewellery</h3>
	 	</div>
	 </a>
	
	</div>
	
		<div class="col-lg-6 col-md-6 col-sm-12 d-flex">
	
	 <a href="{{url('clothing')}}" class="catt-boxx">
	 
	 <div class="catt-boxx-img">
	 
	 <img src="{{asset('img/category/main2.jpg')}}" alt="" width="100%">
	 	</div>
		 <div class="catt-boxx-content">
	 
	<h3>Kids Wear</h3>
	 	</div>
	 </a>
	
	</div>
	
	</div>
	
	
	
    </div>
</section>

<section class="vs-product-wrapper productsec">
  <div class="container-fluid">
  <div class="productsec-ii">
    <div class="title-area text-center">
      <h2 class="sec-title">New Arrivals
</h2>
      
      
    </div>
   <div   class="row justify-content-center">


      @foreach($new_arrivals as $product)
	  
	    <div class="col-sm-6 col-md-4 col-lg-4  d-flex">
        <div class="tt-product thumbprod-center product-nohover">
          <div class="tt-image-box">

<a href="{{url('products')}}/{{$product->slug}}">
    <span class="tt-img">
      <img src="{{asset('storage')}}/{{$product->image}}" alt="">
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
          
          <h2 class="tt-title">
          <a href="{{url('products')}}/{{$product->slug}}">{{$product->name}}</a>
          </h2>

          <div class="tt-price">
                    <span class="old-price">
                        {{ number_format($product->price, 2) }}
                        <del>@if($product->price_strike > 0) {{ number_format($product->price_strike, 2) }} @endif</del>
                    </span>
          </div>

          </div>

		  
		  <div class="product-bb-btns">
			
			<a href="{{url('products')}}/{{$product->slug}}" class="th-btn"> Buy Now</a>

			<!--<a href="javascript:void(0);" class="th-btn"><img src="{{asset('img/cart-1.png')}}" alt=""> Add to Cart</a>-->

			</div>

        </div>

      </div>


      @endforeach

</div>
	  
	   
	
	   
         </div>
		 
		 <div class="text-center pp-pcenter">
		 <a href="{{url('products')}}">View All Products</a>
		 
		 </div>
    </div>
  </div>
</section>




@if($featured->isNotEmpty())
<style>
  @media (min-width: 992px) {
    .fetured-dd .featured-col {
      flex: 0 0 20%;
      max-width: 20%;
    }
    .fetured-dd .tt-product .tt-image-box img {
      height: 14vw;
    }
    .fetured-dd .tt-product .tt-description .tt-title a {
      font-size: 16px;
    }
    .fetured-dd .tt-product .tt-description .tt-price .old-price {
      font-size: 15px;
    }
    .fetured-dd .tt-product {
      margin-bottom: 25px;
    }
    .fetured-dd .product-bb-btns .th-btn {
      font-size: 13px;
      padding: 8px 15px;
    }
  }
</style>
<section class="vs-product-wrapper productsec fetured-dd">
  <div class="container-fluid">
    <div class="title-area text-center">
      <h2 class="sec-title">Featured collection
</h2>
      
      
    </div>
      <div   class="row justify-content-center">



      
      @foreach($featured as $product)
	  
	    <div class="col-sm-6 col-md-4 col-lg featured-col d-flex">
        <div class="tt-product thumbprod-center product-nohover">
          <div class="tt-image-box">

<a href="{{url('products')}}/{{$product->slug}}">
    <span class="tt-img">
      <img src="{{asset('storage')}}/{{$product->image}}" alt="">
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
          
          <h2 class="tt-title">
          <a href="{{url('products')}}/{{$product->slug}}">{{$product->name}}</a>
          </h2>

          <div class="tt-price">
                    <span class="old-price">
                        {{ number_format($product->price, 2) }}
                        <del>@if($product->price_strike > 0) {{ number_format($product->price_strike, 2) }} @endif</del>
                    </span>
          </div>

          </div>

		  
		  <div class="product-bb-btns">
			
			<a href="{{url('products')}}/{{$product->slug}}" class="th-btn"> Buy Now</a>

			<!--<a href="javascript:void(0);" class="th-btn"><img src="{{asset('img/cart-1.png')}}" alt=""> Add to Cart</a>-->

			</div>

        </div>
        
      </div>



      @endforeach

     
    </div>
		 
		 <div class="text-center pp-pcenter">

		 <a href="{{url('products')}}">View All Products</a>
		 
		 </div>

  </div>

</section>

@endif



<div class="Test-msec home-three">
  <div class="container-fluid">
    <div class="title-area text-center">
      <h2 class="sec-title">Our Testimonials</h2>

    </div>
	<div class="row justify-content-center">



    @foreach($testimonials as $testimonial)

		<div class="col-lg-3  col-md-4">
		
		<div class="single-offer-box">
						<div class="single-offer-thumb">
							<img src="{{asset('storage/')}}/{{$testimonial->image}}" alt="">
						</div>
						
						<div class="offer-content">
							<h5 class="strr"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> </h5>
							<h4>{{$testimonial->name}}</h4>
							<p>{{$testimonial->review}}</p>
							 
						</div>
						<div class="offer-bottom-title">
						<h5 class="strr"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> </h5>
							
              <h4>{{$testimonial->name}}</h4>

						</div>
					</div>
			</div>

      @endforeach

		
		
</div>
</div>
</div>


<section class="budget-unsder-secs">
  <div class="container-fluid">
    <div class="title-area text-center">
      <h2 class="sec-title">Budget Collections</h2>

    </div>
	
	
	<div class="row">
	
	<div class="col-lg-7 d-flex">
	<img src="{{asset('img/budget.jpg')}}" class="bbb">
	</div>
	
		<div class="col-lg-5 d-flex">
		
			<div class="row">

    
    @foreach($budget_products as $products)

	  <div class="col-6 col-md-4 col-lg-6 d-flex">
        <div class="tt-product thumbprod-center product-nohover">
          <div class="tt-image-box">
    <a href="{{url('products')}}/{{$product->slug}}">
      
    <span class="tt-img">
      <img src="{{asset('storage')}}/{{$product->image}}" alt="">
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

          <h2 class="tt-title">
          <a href="{{url('products')}}/{{$product->slug}}">{{$product->name}}</a>
          </h2>

          <div class="tt-price">
                    <span class="old-price">
                        {{ number_format($product->price, 2) }}
                        <del>@if($product->price_strike > 0) {{ number_format($product->price_strike, 2) }} @endif</del>
                    </span>
          </div>
          
          </div>
		  

        </div>
      </div>

      @endforeach


	  
      </div>
      
	</div>
	
	</div>
	

 
  </div>
</section>

<section class="faettsec" >
  <div class="container-fluid">
    <div class="row ff-row justify-content-center">
      <div class="col-md-6 col-lg-3 col-sm-6 process-box-wrap d-flex">
        <div class="process-box">
          <div class="process-box_icon"  ><img src="{{asset('img/f1-f.png')}}" alt="icon">
        
          </div>
          <h2 class="process-box_title">Worldwide Shipping</h2>
          <p>For queries regarding International shipping Kindly WhatsApp us on +353 1 677 3727</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 col-sm-6 process-box-wrap d-flex">
        <div class="process-box">
          <div class="process-box_icon"  ><img src="{{asset('img/f2-f.png')}}" alt="icon">
        
          </div>
          <h2 class="process-box_title">Fast Delivery</h2>
          <p>We use a reliable courier company to deliver your order quickly and in perfect condition.</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 col-sm-6 process-box-wrap d-flex">
        <div class="process-box">
          <div class="process-box_icon"  ><img src="{{asset('img/f3-f.png')}}" alt="icon">
          
          </div>
          <h2 class="process-box_title">Geniune Products</h2>
          <p>Our products are guaranteed to be genuine, ensuring the highest quality and authenticity.</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 col-sm-6 process-box-wrap d-flex">
        <div class="process-box">
          <div class="process-box_icon"  ><img src="{{asset('img/f4-f.png')}}" alt="icon">
          
          </div>
          <h2 class="process-box_title ">Secure Payments</h2>
          <p>We offer secure payments, ensuring the confidentiality and protection of your financial information.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="instagramsec">
    <div class="container-fluid">

        <div class="title-area text-center">
            <h2 class="sec-title">Follow our Instagram page</h2>
            <p class="insta-title">
                <a href="#" target="_blank">@irishbazzar</a>
            </p>
        </div>

        <div class="row">
            <div class="col-lg-8 left-insta">
                <div class="row">

                    <div class="col-lg-4">
                        <div class="ppproject-card">
                            <img src="{{ asset('img/instagram/i1.jpg') }}" alt="">
                            <img src="{{ asset('img/instagram/i1.jpg') }}" alt="">
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="ppproject-card">
                            <img src="{{ asset('img/instagram/i2.jpg') }}" alt="">
                            <img src="{{ asset('img/instagram/i2.jpg') }}" alt="">
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="ppproject-card">
                            <img src="{{ asset('img/instagram/i3.jpg') }}" alt="">
                            <img src="{{ asset('img/instagram/i3.jpg') }}" alt="">
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="ppproject-card">
                            <img src="{{ asset('img/instagram/i4.jpg') }}" alt="">
                            <img src="{{ asset('img/instagram/i4.jpg') }}" alt="">
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <div class="ppproject-card">
                            <img src="{{ asset('img/instagram/i5.jpg') }}" alt="">
                            <img src="{{ asset('img/instagram/i5.jpg') }}" alt="">
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-lg-4 right-insta">
                <div class="ppproject-card">
                    <img src="{{ asset('img/instagram/i6.jpg') }}" alt="">
                    <img src="{{ asset('img/instagram/i6.jpg') }}" alt="">
                </div>
            </div>
        </div>

    </div>
</section>


<div class="Company-sec">
  <div class="container-fluid">
      <div class="title-area mb-20 text-center">
      <h2 class="sec-title">About Irish Bazzar</h2>
       
 
    </div>
      <div class="row  align-items-center">
      <div class="col-lg-6">
	  
	  <div class="company-left">
	  <div class="company-left-img">
	 <img src="assets/img/about.jpg" alt="" width="100%">
		  </div>
	<p>Discover timeless jewelry and adorable clothing for little ones, inspired by irish heritage and</p>
	
 
	  </div>
</div>

  <div class="col-lg-6">
	  
	  <div class="company-right">
	  	  <div class="row">
	  <div class="col-lg-12">
	   <img src="{{asset('img/about2.png')}}" alt="" width="100%">
	  </div>
	   
	 	  </div>
	  </div>
</div>
</div>
</div>
</div>

@endsection