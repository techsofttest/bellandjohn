@extends('layouts.app')


@section('content')


 <div class="innersec-banner">
  <div class="container-fluid">
<img src="{{assets('img/about-banner.jpg')}}" alt="" width="100%">
  </div>
  </div>

<div class="Company-innersec">
  <div class="container-fluid">
  
      <div class="row  align-items-center">
      <div class="col-lg-6">
	  
	  <div class="company-left-inner">
	    <div class="title-area mb-20">
      <h2 class="sec-title">Irish Bazzar</h2>
       
 
    </div>
	
	
	<p>Discover timeless jewelry and adorable clothing for little ones, inspired by irish heritage and</p>
	
	<p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	  </div>
</div>

  <div class="col-lg-6">
	  
	  <div class="company-right-inner">
	  <img src="{{asset('img/about.jpg')}}" alt="" width="100%">
	  </div>
</div>
</div>
</div>
</div>

<section class="faettsec">
  <div class="container-fluid">
    <div class="row ff-row justify-content-center">

      <div class="col-md-6 col-lg-3 col-sm-6 process-box-wrap d-flex">
        <div class="process-box">
          <div class="process-box_icon">
            <img src="{{ asset('img/f1-f.png') }}" alt="icon">
          </div>
          <h2 class="process-box_title">Worldwide Shipping</h2>
          <p>For queries regarding International shipping Kindly WhatsApp us on +353 1 677 3727</p>
        </div>
      </div>

      <div class="col-md-6 col-lg-3 col-sm-6 process-box-wrap d-flex">
        <div class="process-box">
          <div class="process-box_icon">
            <img src="{{ asset('img/f2-f.png') }}" alt="icon">
          </div>
          <h2 class="process-box_title">Fast Delivery</h2>
          <p>We use a reliable courier company to deliver your order quickly and in perfect condition.</p>
        </div>
      </div>

      <div class="col-md-6 col-lg-3 col-sm-6 process-box-wrap d-flex">
        <div class="process-box">
          <div class="process-box_icon">
            <img src="{{ asset('img/f3-f.png') }}" alt="icon">
          </div>
          <h2 class="process-box_title">Genuine Products</h2>
          <p>Our products are guaranteed to be genuine, ensuring the highest quality and authenticity.</p>
        </div>
      </div>

      <div class="col-md-6 col-lg-3 col-sm-6 process-box-wrap d-flex">
        <div class="process-box">
          <div class="process-box_icon">
            <img src="{{ asset('img/f4-f.png') }}" alt="icon">
          </div>
          <h2 class="process-box_title">Secure Payments</h2>
          <p>We offer secure payments, ensuring the confidentiality and protection of your financial information.</p>
        </div>
      </div>

    </div>
  </div>
</section>


<section class="instagramsec" >
  <div class="container-fluid">
  
  <div class="title-area text-center">
      <h2 class="sec-title">Follow our Instagram page</h2>
      <p class="insta-title"> <a href="#" target="_blank">@irishbazzar</a></p>
 
    </div>
    <div class="row  ">
      <div class="col-lg-8 left-insta">
	     <div class="row  ">
		  <div class="col-lg-4">
	   
	   	<div class="ppproject-card  "  >
                        <img src="{{asset('img/instagram/i1.jpg')}}" alt="">
                        <img src="{{asset('img/instagram/i1.jpg')}}" alt="">
                    
                    </div>
     </div>
	  <div class="col-lg-4">
	   
	   	<div class="ppproject-card  "  >
                        <img src="{{asset('img/instagram/i2.jpg')}}" alt="">
                        <img src="{{asset('img/instagram/i2.jpg')}}" alt="">
                    
                    </div>
     </div>
	  <div class="col-lg-4">
	   
	   	<div class="ppproject-card  "  >
                        <img src="{{asset('img/instagram/i3.jpg')}}" alt="">
                        <img src="{{asset('img/instagram/i3.jpg')}}" alt="">
                    
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



@endsection