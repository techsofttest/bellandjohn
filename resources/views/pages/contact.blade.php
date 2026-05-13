@extends('layouts.app')


@section('content')




 <div class="innersec-banner">
  <div class="container-fluid">
 <img src="{{asset('img/coc-banner.jpg')}}" alt="" width="100%">
  </div>
  </div>
 <section class="contact-innersec">
  <div class="container-fluid">
    <div class="row justify-content-between ">
   <div class="col-xl-7 col-lg-6 col-md-6 d-flex ">
   <div class="coleft-main">
    <div class="coleft-1  ">
	
	  <div class="title-area  mb-20">
      <h2 class="sec-title">Get In Touch</h2>
     
    </div>
	
	<p>Have any questions about our products    please don't hesitate to reach out. Our dedicated team is on hand to assist and guide you.</p>
     </div>
   <div class="coleft-2 ">
   
   
     <div class="row  ">
      <div class="col-md-6  col-lg-6 col-sm-6 d-flex">
        <div class="info-box">
          <div class="media-icon"><i class="theme-color fas fa-map-marker-alt"></i>   <h3 class="info-title h4">Address</h3></div>
          <div class="media-body">
         
            <p class="info-text">Irish Bazzar<br>
Q House Suite 408 76 Furze Rd Sandyford Ind Estate Dublin D18 HH67 Ireland</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-6 col-sm-6 d-flex">
        <div class="info-box">
          <div class="media-icon"><i class="theme-color fas fa-phone-alt"></i> <h3 class="info-title h4">Phone</h3></div>
          <div class="media-body">
           
            <p class="info-text"> <a href="tel:+353 1 677 3727">+353 1 677 3727</a></p>
           
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-6 col-lg-6 d-flex">
        <div class="info-box">
          <div class="media-icon"><i class="theme-color far fa-envelope"></i><h3 class="info-title h4">Email </h3></div>
          <div class="media-body">
            
  <p class="info-text"><a href="mailto:info@irishbazzar.com">info@irishbazzar.com</a></p>
          </div>
        </div>
      </div>
	       <div class="col-md-6 col-sm-6 col-lg-6  d-flex">
        <div class="info-box">
          <div class="media-icon"><i class="theme-color far fa-link"></i><h3 class="info-title h4">Socical Media</h3></div>
          <div class="media-body">
            
          
           <ul class="co-list ">
                <li> <a href="#" target="_blank"> <img src="{{asset('img/ss1.png')}}"> </a> </li>
                <li> <a href="#" target="_blank"> <img src="{{asset('img/ss2.png')}}">  </a> </li>
                <li> <a href="#" target="_blank"> <img src="{{asset('img/ss3.png')}}"> </a> </li>
                <li> <a href="#" target="_blank"> <img src="{{asset('img/ss4.png')}}">  </a> </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
   </div>
   </div>
   
   
   </div>
     <div class="col-lg-5 col-md-5 col-sm-12 d-flex ">
	 
	 <div class="co-forrm-sec">
	   <div class="title-area  mb-20">
      <h2 class="sec-title">Send Us a Message</h2>
     
    </div>
	 <form action="#" method="POST" class="ajax-contact">
      <div class="row">
        <div class="form-group col-md-6">
          <input type="text" class="form-control style2" name="name" placeholder="First Name" required="">
          <i class="fal fa-user"></i></div>
		       <div class="form-group col-md-6">
          <input type="text" class="form-control style2" name="name" placeholder="Last Name" required="">
          <i class="fal fa-user"></i></div>
        <div class="form-group col-md-6">
          <input type="email" class="form-control style2" name="email" placeholder="Email Address" required="">
          <i class="fal fa-envelope"></i></div>
		   <div class="form-group col-md-6">
          <input type="text" class="form-control style2" name="phone" placeholder="Phone No" required="">
          <i class="fal fa-phone"></i></div>
    
        <div class="form-group col-12">
          <textarea name="message" id="message" cols="30" rows="3" class="form-control style2" placeholder=" Your Message" required=""></textarea>
          <i class="fal fa-pencil"></i></div>
        <div class="form-btn col-12">
          <button class="vs-btn style7">Send Message</button>
        </div>
      </div>
 
    </form>
	 
	 </div>
   </div>
  </div>
  
  
  </div>
</section>
<div class="mapsec">

<div class="container-fluid">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317719.5877495047!2d-0.4312316281021684!3d51.52817979531493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1759467604796!5m2!1sen!2sin"  width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

</div>


@endsection