@extends('layouts.app')


@section('content')


  <div class="Sigbupmainn">
  <div class="container-fluid">
 <div class="Sign-in-sec"  data-bg-src="{{asset('img/signin-banner.jpg')}}">
 

 
 <div class="row justify-content-end">
 
 <div class="col-xl-5 col-lg-6 col-md-7 ">
	 
	 <div class="register-inner">
			
			<form action="{{ route('customer.register') }}" method="post"> 
    @csrf
    <h3><span>Stop Waiting,</span> Free Register Now</h3>

    <div class="row">
        <div class="col-lg-6 col-md-6">
            <div class="form-group">
                <label>First Name</label>
                <input type="text" name="name" class="form-control" value="{{ old('name') }}" required>
                @error('name') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>

        <div class="col-lg-6 col-md-6">
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" name="lname" class="form-control" value="{{ old('lname') }}">
                @error('lname') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>

        <div class="col-lg-12">
            <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" class="form-control" value="{{ old('email') }}" required>
                @error('email') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>

        <div class="col-lg-6 col-md-6">
            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" class="form-control" required>
                @error('password') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
        </div>

        <div class="col-lg-6 col-md-6">
            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" name="password_confirmation" class="form-control" required>
            </div>
        </div>

        <div class="col-lg-12 text-center">
            <button type="submit" class="vs-btn">Register Now</button>
        </div>
    </div>
</form>



			</div>
	 
	 </div>
 </div>
 </div>
 </div>
 </div>


@endsection