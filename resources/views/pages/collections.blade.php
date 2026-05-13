@extends('layouts.app')

@section('content')



<div class="ibm-bcrms-main">
 <div class="ibm-bcrms">
 <div class="container-fluid">
 <ul class="ibm-breadcrumb ">
 <li><a href="index.html">Home</a></li>
  
 <li class="active">Collections</li>
 </ul>
  <h3>Collections</h3>
 </div>
</div>
</div>
 
<section class="category-secs-inner">
  <div class="container-fluid">
 
    <div  class="row  ">
	
        @foreach($categories as $category)
	    
	    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-3 d-flex">
        <div class="cat_rounded">
          <div class="cat-img"><a href="collection-category.html"><img src="{{asset('storage/'.$category->image.'')}}" alt=""></a></div>
          <h3 class="cat-name"><a class="text-inherit" href="collection-category.html"> {{$category->name}}
</a></h3>
        </div>
      </div>

      @endforeach
	     
    </div>
   
  </div>
</section>





@endsection