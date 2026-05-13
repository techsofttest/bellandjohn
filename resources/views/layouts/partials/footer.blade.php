<footer class="footer-wrapper footer-layout1">
  <div class="widget-area">
  
  <div class="footer-top-sec">
  <div class="container-fluid">
  <div class="row justify-content-between align-items-center">
  
  <div class="col-lg-auto">
  <div class="ff-logo">
  <a href="{{url('/')}}"><img src="{{asset('img/footer-logo.png')}}"></a>
  </div>
  </div>

    <div class="col-lg-auto">
  <div class="row align-items-center  ">
          <div class="col-lg-auto col-md-6 col-sm-6">
            <div class="newsletter-style2 nee">
              <div class="newsletter-img">
                <i class="fas fa-phone-alt"></i>
              </div>
              <h3 class="newsletter-text">Call Us  </h3>
              <a href="tel:+353 1 677 3727"> +353 1 677 3727 </a>
			 
            </div>
          </div>
          <div class="col-lg-auto col-md-6 col-sm-6">
            <div class="newsletter-style2">
              <div class="newsletter-img">
               <i class="fas fa-envelope"></i>
              </div>
              <h3 class="newsletter-text">Email Us</h3>
              <a href="mailto:info@irishbazzar.com">info@irishbazzar.com</a>
            </div>
          </div>
          
        </div>
  </div>
  </div>
  
  </div>
  
  </div>
    <div class="container-fluid">
      <div class="row justify-content-between">
       
        <div class="col-auto col-md-6 col-lg-2    ">
          <div class="widget widget_nav_menu footer-widget">
            <h3 class="widget_title">Quick Links</h3>
            <div class="menu-all-pages-container">
              <ul class="menu">
                <li><a href="{{url('/')}}">Home</a></li>
                <li><a href="{{url('/about')}}">About Us</a></li>
				        <li><a href="{{url('/collections')}}">All Collections</a></li>
                <li><a href="{{url('/products')}}">Products</a></li>
				 
				     <li><a href="{{url('/faq')}}">Faq</a></li>
					  <li><a href="{{url('/testimonials')}}">Testimonials</a></li>
                <li><a href="{{url('/contact')}}">Contact Us</a></li>
               
              </ul>
            </div>
          </div>
        </div>
		        <div class="col-auto col-md-6 col-lg-2    ">
          <div class="widget widget_nav_menu footer-widget">
            <h3 class="widget_title">Collections</h3>
            <div class="menu-all-pages-container">
              <ul class="menu">
                
                @foreach($header_categories as $category)
                <li><a href="{{url('collections')}}/{{$category->slug}}">{{$category->name}}</a></li> 
                @endforeach

               
              </ul>
            </div>
          </div>
        </div>
        <div class="col-auto col-md-6 col-lg-2   ">
          <div class="widget widget_nav_menu footer-widget">
            <h3 class="widget_title">My Account</h3>
            <div class="menu-all-pages-container">
              <ul class="menu">

              @php
    $customer = auth('customer')->user();
@endphp


@if($customer)
<li><a href="{{url('profile')}}">My Account</a></li>
@else
<li><a href="#"  data-bs-toggle="modal" data-bs-target="#youmyModal">My Account</a></li>
 @endif
       
              <li><a href="{{url('cart')}}"> My Cart</a></li>
 
                
              </ul>
            </div>
          </div>
        </div>
		        <div class="col-auto col-md-6 col-lg-2   ">
          <div class="widget widget_nav_menu footer-widget">
            <h3 class="widget_title">Policies</h3>
            <div class="menu-all-pages-container">
              <ul class="menu">
            
                <li><a href="{{url('privacy-policy')}}">Privacy Policy</a></li>
                <li><a href="{{url('terms-and-conditions')}}">Terms & Conditions</a></li>
                <li><a href="{{url('return-policy')}}">Return Policy</a></li>
                <li><a href="{{url('shipping-policy')}}">Shipping Policy</a></li>
                
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="widget footer-widget">
            <h3 class="widget_title">Locate Us</h3>
            <p class="footer-info"> Irish Bazzar<br>
            Q House
            Suite 408
            76 Furze Rd
            Sandyford Ind Estate
            Dublin
            D18 HH67
            Ireland</p>
            
          </div>
        </div>
      </div>
 
  </div>
  
  <div class="footer-paymentsec">
      <div class="container-fluid">
	  <div class="row justify-content-center align-items-center">
	  <div class="col-auto my-2">
	  <ul class="socials-list text-center">
                <li> <a href="#" target="_blank"> <img src="{{asset('img/ss1.png')}}"> </a> </li>
                <li> <a href="#" target="_blank"> <img src="{{asset('img/ss2.png')}}">  </a> </li>
                <li> <a href="#" target="_blank"> <img src="{{asset('img/ss3.png')}}"> </a> </li>
                <li> <a href="#" target="_blank"> <img src="{{asset('img/ss4.png')}}">  </a> </li>
              </ul>
	  </div>
	  	  <div class="col-auto my-2">
	      <div class="payment text-center"> 
		  <img src="{{asset('img/pay1.jpg')}}" alt=""> <img src="{{asset('img/pay2.jpg')}}" alt=""> <img src="{{asset('img/pay3.jpg')}}" alt=""> <img src="{{asset('img/pay4.jpg')}}" alt=""> <img src="{{asset('img/pay5.jpg')}}" alt=""> <img src="{{asset('img/pay7.jpg')}}" alt=""> </div>
        </div>
	  </div>
	  
	  </div>
	    </div>
  </div>
  <div class="copyright-wrap text-center">
    <div class="container-fluid">
    <p class="mb-0"><i class="fal fa-copyright"></i> @php date('Y') @endphp <a  href="javascript:void(0);">Irish Bazzar</a>. All Rights Reserved Web Designed By<a  href="https://www.techsoftweb.com/" target="_blank">Techsoft</a>.</p>
  </div>  </div>
</footer>