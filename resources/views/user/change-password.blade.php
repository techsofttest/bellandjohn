 @extends('layouts.app')

@section('content')

 <section class="Myaccountsec">
  <div class="container-fluid">
    <div class="row">
      
      
        @include('user.user-sidebar')

    
      <div class="col-lg-9 col-md-8">
      <div id="General" class="tabcontent profile">
	  
	
          <div class="Address">
		    <h5>Change Password</h5>
     
            
           <form action="{{ route('customer.password.update') }}" method="POST" class="pass_form">
    @csrf

    <div class="pass_content">
        <div class="row">
            <div class="col-md-4">
                <input type="password" name="current_password" class="pass_in" placeholder="Old Password" required>
                @error('current_password') <span class="text-danger">{{ $message }}</span> @enderror
            </div>

            <div class="col-md-4">
                <input type="password" name="new_password" class="pass_in" placeholder="New Password" required>
                @error('new_password') <span class="text-danger">{{ $message }}</span> @enderror
            </div>

            <div class="col-md-4">
                <input type="password" name="new_password_confirmation" class="pass_in" placeholder="Confirm Password" required>
            </div>

            <div class="col-lg-12 text-center mt-2">
                <button type="submit" class="rsite-btn">Update</button>
            </div>
        </div>
    </div>
</form>


          </div>
          
          
         
        </div>

        
      </div>
    </div>
  </div>
</section>

@endsection