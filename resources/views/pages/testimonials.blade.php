@extends('layouts.app')


@section('content')



<div class="ibm-bcrms-main">
 <div class="ibm-bcrms">
 <div class="container-fluid">
 <ul class="ibm-breadcrumb ">
 <li><a href="index.html">Home</a></li>
  
 <li class="active">Testimonials</li>
 </ul>
  <h3>Testimonials</h3>
 </div>
</div>
</div>

<div class="Test-msecinnw home-three">
  <div class="container-fluid">
 
	<div class="row  ">



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




@endsection