<div class="vs-menu-wrapper">
  <div class="vs-menu-area text-center">
    <button class="vs-menu-toggle"><i class="fal fa-times"></i></button>
    <div class="mobile-logo"><a href="{{url('/')}}">
      <h3>Irish Bazzar</h3>
 
      </a></div>

    <div class="vs-mobile-menu">

      <ul>

        <li class=""><a href="{{url('/')}}">Home</a> </li>

        <li><a href="{{url('jewellery')}}">All Jewellery</a></li>

        <li class="menu-item-has-children"><a href="javascript:void(0);">Shop By Category</a>
          <ul class="sub-menu">

            @foreach($header_categories as $category)
			      <li><a href="{{url('collections')}}/{{$category->slug}}">{{$category->name}}</a></li>
            @endforeach
	

          @php /*
			   <li class="menu-item-sub-children"><a href="collection-category.html">Earrings </a>
              <ul class="sub-menu">
                <li><a href="collection-category.html">All Earrings Collection</a></li>
 <li><a href="collection-category.html">Ear Chain</a></li>
 <li><a href="collection-category.html">Jimikki</a></li>
 <li><a href="collection-category.html">Soochi kammal</a></li>
 <li><a href="collection-category.html">Studs</a></li>
              </ul>
            </li>
          */ @endphp

          </ul>
        </li>

        <li><a href="{{url('about')}}">About Us</a></li>

        <li><a href="{{url('contact')}}">Contact Us</a></li>

      </ul>
    </div>
  </div>
</div>
<header class="vs-header header-layout2">
 <div class="menu-top">
    <div class="container-fluid">
      <div class="row  justify-content-between align-items-center">


        <div class="col-12 col-lg-auto ">
          <div class="row  ">
            <div class="col-auto mobile-head-ifo-m">
          <div class="header-logo  "><a href="{{url('/')}}">
          <img src="{{asset('img/logo.png')}}" alt="">
 
              </a></div>
            </div>

        <div class="col-sm col mobile-head-ifo-s position-relative">
          <form action="javascript:void(0)" class="header-form">
              <input type="text"
                    id="live-search"
                    class="form-control"
                    placeholder="Search products..."
                    autocomplete="off">

              <i class="far fa-search"></i>
          </form>

          <!-- Dropdown -->
          <div id="search-results" class="search-dropdown"></div>
      </div>

          </div>
        </div>
       
           <div class="col-auto">
 <div class="header-buttons">
 <a href="#"   title=""><i class=" ">   <img src="{{asset('img/flag.png')}}" alt=""></i></a>


@php
    $customer = auth('customer')->user();
@endphp


          @if($customer)

            <nav class="main-menu menu-style2  d-inline-block">
            <ul>

            <li class="menu-item-has-children login-img"><a href="javascript:void(0)" class="phh-bb"><img src="{{asset('img/b-user.png')}}" alt="">
              
            <span>{{ explode(' ', $customer->name)[0]}}</span>
            
            </a>

            <ul class="sub-menu">
				 
					  <li><a href="{{url('profile')}}">My Profile</a></li>
					  <li><a href="{{url('wishlist')}}">Wishlist</a></li>
                       <li><a href="{{url('change-password')}}">Change Password</a></li>
                  
                  <li>

          <a class="" href="{{ route('customer.logout') }}"
          onclick="event.preventDefault(); document.getElementById('customer-logout-form').submit();">
          Logout
          </a>
                  
                  </li>
                     
                    </ul>
                  </li>
        
   
              </ul>
</nav>

@else
<a href="{{ $customer ? '#' : route('customer.login') }}" 
   class="uss-log"
   @if(!$customer) data-bs-toggle="modal" data-bs-target="#youmyModal" @endif
   title="">
   <i><img src="{{asset('img/b-user.png')}}" alt=""></i>
   <span>
       {{ $customer ? explode(' ', $customer->name)[0] : 'Login' }}
   </span>
</a>
@endif

 



             <div class="header-cart">
                <a href="javascript:void(0);" title="Cart" class="has-badge">
                    <i><img src="{{asset('img/cart.png')}}" alt=""></i>
                    <span class="badge" id="cart-count">{{ collect(session('cart'))->sum('qty') ?? 0 }}</span>
                </a>
                <div class="woocommerce widget_shopping_cart">
                    <div class="widget_shopping_cart_content" id="mini-cart-wrapper">
                        @include('layouts.partials.mini_cart', ['cart'=>session('cart'),'total'=>collect(session('cart'))->sum(fn($i)=>$i['price']*$i['qty'])])
                    </div>
                </div>
            </div>


            </div>
          </div>
          <div class="col-auto d-block d-lg-none">
            <button class="vs-menu-toggle d-inline-block d-lg-none"><i class="fal fa-bars"></i></button>
          </div>
      </div>
    </div>
  </div>
  <div class="sticky-wrapper">
    <div class="sticky-active">
      <div class="container-fluid">
        <div class="row justify-content-between align-items-center">
       
       <div class="col-lg-12">
	       <div id="c_111" class="row justify-content-between vs-carousel arrow-margin" data-arrows="true" data-autoplay="true" data-autoplay-speed="3000" data-slide-show="9" data-ml-slide-show="9" data-lg-slide-show="8" data-md-slide-show="7" data-sm-slide-show="5" data-xs-slide-show="4">
   
	  
        @foreach($header_categories as $category)
	    <div class="col-xl-2">
        <div class="head_rounded">
          <div class="cat-img">
            <a href="{{url('collections')}}/{{$category->slug}}"><img src="{{asset('storage/'.$category->image.'')}}" alt="{{$category->name}} Image"></a>
          </div>
          <h3 class="cat-name">
          <a class="text-inherit" href="{{url('collections')}}/{{$category->slug}}"> {{$category->name}}</a>
          </h3>
        </div>
      </div>
        @endforeach
	  
	     
    </div>
	   
	   </div>
    
        </div>
      </div>
    </div>
  </div>
</header>