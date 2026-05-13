@extends('layouts.app')



@section('content')


<div class="ibm-bcrms-main">
 <div class="ibm-bcrms">
 <div class="container-fluid">
 <ul class="ibm-breadcrumb ">
 <li><a href="{{url('/')}}">Home</a></li>
  
 <li class="active">{{$content->title}}</li>
 </ul>
  <h3>{{$content->title}}</h3>
 </div>
</div>
</div>


<div class="Privacy-innersec">
 
<div class="container-fluid">


	{!! $content->content !!}
 
 

</div>
</div>




@endsection