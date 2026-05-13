<!doctype html>
<html class="no-js" lang="zxx">
<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">


<title>Irish Bazzar</title>

<meta name="description" content="">


<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">

<link rel="icon" type="image/png"  href="{{asset('img/favicon.png')}}">

<link rel="preconnect" href="https://fonts.googleapis.com/">
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">

<link rel="stylesheet" href="{{asset('css/app.min.css')}}">
<link rel="stylesheet" href="{{asset('css/fa.min.css')}}">
<link rel="stylesheet" href="{{asset('css/style.min.css?v1.3')}}">
<link rel="stylesheet" href="{{asset('css/responsive.css?v1.3')}}">
<link rel="stylesheet" href="{{asset('css/owl.carousel.css')}}">

<meta name="csrf-token" content="{{ csrf_token() }}">

<style>

.tt-btn-wishlist.active i {
    color: red !important;
}

.tt-btn-wishlist i {
    color: #999;
    transition: color 0.2s ease;
}



.search-dropdown {
    max-width: 85%;
    margin: 0px auto;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 10px 25px rgba(0,0,0,.1);
    display: none;
    z-index: 999;
    max-height: 350px;
    overflow-y: auto;
}

.search-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    color: #333;
    text-decoration: none;
}

.search-item img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 4px;
}

.search-item:hover {
    background: #f5f5f5;
}



</style>


</head>


<body class="">



@include('layouts.partials.header')




@yield('content')




@include('layouts.partials.footer')


<!-- Login Modal -->

 <div class="modal fade youmyModal" id="youmyModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Sign in</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
      </div>
      <div class="modal-body">


      <form action="{{ route('customer.login') }}" method="POST" class="slider-contactform form-style3 cnt">
    @csrf
    <div class="row gx-20">

        <div class="form-group col-md-12">
            <input type="email" name="email" placeholder="Email" value="{{ old('email') }}" required>
            @error('email') <span class="text-danger">{{ $message }}</span> @enderror
        </div>

        <div class="form-group col-md-12">
            <input type="password" name="password" placeholder="Password" required>
            @error('password') <span class="text-danger">{{ $message }}</span> @enderror
        </div>

        <div class="form-btn col-12 text-center">
            <button type="submit" class="vs-btn">Login</button>
        </div>

        <div class="col-12 text-center mt-2">
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#forgotModal" data-bs-dismiss="modal" aria-label="Close" class="ff">
                Forgot your password?
            </a>
        </div>

        <p class="text-center ssll mt-3">Or Login Using</p>

        <div class="row justify-content-center align-items-center facebb-google">


            @php /*
            <div class="col-lg-6 col-md-6 col-sm-12 text-center mb-2">
                <a href="{{ route('customer.social.login', 'google') }}" class="login1">
                    <img src="{{asset('img/goo-gle.png')}}" alt=""> Sign in with Google
                </a>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 text-center mb-2">
                <a href="{{ route('customer.social.login', 'facebook') }}" class="login1">
                    <img src="{{asset('img/face-book.png')}}" alt=""> Sign in with Facebook
                </a>
            </div>
            */ @endphp

            <div class="col-lg-12 text-center mt-2">
                <div class="llllri">
                    Not signed up? <a href="{{ url('register') }}">Create an account.</a>
                </div>
            </div>
        </div>

    </div>
</form>


      </div>
     
    </div>
  </div>
</div>

<!-- Login Modal ENd -->


<!-- Forgot Modal -->

<div class="modal fade youmyModal" id="forgotModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Forgot Password</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
      </div>
      <div class="modal-body">
       <form action="" method="POST" class="slider-contactform form-style3 cnt ">
<div class="row gx-20 mt-30">
<div class="form-group col-md-12">
<input type="email" name="email"  placeholder="Email  " required>  
</div>
 <div class="form-btn col-12">
<div class="text-center mt-20">
<button type="submit" class="vs-btn   ">Submit Now </button>
 <div class="row mt-30 justify-content-center align-items-center facebb-google">
 <div class="col-lg-12"><div class="llllri">Already have an account? <a href="#" data-bs-toggle="modal" data-bs-target="#youmyModal" data-bs-dismiss="modal" aria-label="Close" > Sign In</a></div>
		    </div>
   </div>
 </div>
 </div>

</div>

</form>
      </div>
     
    </div>
  </div>
</div>

<!-- Forgot Modal ENd -->


<form id="customer-logout-form" action="{{ route('customer.logout') }}" method="POST" style="display:none;">
              @csrf
</form>




<a href="#" class="scrollToTop scroll-btn"><i class="far fa-arrow-up"></i></a>

<script src="{{ asset('js/vendor/jquery-3.6.0.min.js') }}"></script>
<script src="{{ asset('js/app.min.js') }}"></script>
<script src="{{ asset('js/vscustom-carousel.min.js') }}"></script>
<script src="{{ asset('js/main.js') }}"></script>
<script src="{{ asset('js/owl.carousel.min.js') }}"></script>


<!-- AlertifyJS CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css"/>

<!-- Default theme -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/default.min.css"/>

<!-- AlertifyJS JS -->
<script src="https://cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>
<script>
alertify.set('notifier','position', 'bottom-center');
</script>




<script>
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('live-search');
    const resultsBox = document.getElementById('search-results');

    let debounceTimer;

    input.addEventListener('keyup', function () {
        clearTimeout(debounceTimer);

        const query = this.value.trim();

        if (query.length < 2) {
            resultsBox.innerHTML = '';
            resultsBox.style.display = 'none';
            return;
        }

        debounceTimer = setTimeout(() => {
            fetch(`{{url('live-search')}}?q=${encodeURIComponent(query)}`)
                .then(res => res.json())
                .then(data => {
                    if (!data.length) {
                        resultsBox.innerHTML = `<div class="search-item">No results</div>`;
                    } else {
                        resultsBox.innerHTML = data.map(item => `
                            <a href="{{url('products')}}/${item.slug}" class="search-item">
                                <img src="{{asset('storage')}}/${item.image}" alt="">
                                <span>${item.name}</span>
                            </a>
                        `).join('');
                    }
                    resultsBox.style.display = 'block';
                });
        }, 300); // debounce
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.mobile-head-ifo-s')) {
            resultsBox.style.display = 'none';
        }
    });
});
</script>






 
<script>


 var header = $('#header-sticky');
    var win = $(window);
    
    win.on('scroll', function() {
        if ($(this).scrollTop() > 300) {
           
			 $(".DZ-theme-btn").addClass("DZ-theme-btn-sticky");
			 
        } else {
           
			$(".DZ-theme-btn").removeClass("DZ-theme-btn-sticky");
			
        }
    });
</script> 
<script>
	
	
      $(document).ready(function() {

              var owl = $('.single-slider');

              owl.owlCarousel({ 

                margin: 0,

                nav: false,

                loop: true,

				dots: true,

				autoplay: true,

				  autoplayTimeout: 5000,

            smartSpeed: 1500,

              navText: [

                    '<i class="bi bi-arrow-left"></i>',

                    '<i class="bi bi-arrow-right"></i>'

                ],

                /*  navContainer: '.banner-sec .custom-nav',*/

                responsive: {

                  0: {

                    items: 1,
					  nav: false,

                 

                  },
 576: {

                    items: 1

                  },
                  768: {

                    items: 1

                  },

                  1000: {

                    items: 1

                  }

                }

              })
		  
		  
			  
		  })
    </script>


<script>
$.ajaxSetup({
    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
});

// Add to cart
$('.add_to_cart_btn').click(function(){

    let variant_id = $(this).data('variant-id');

    let product_id = $(this).data('product-id');

    let qty = $('#qty_input').val() || 1;

    $.post("{{ route('cart.add') }}", {variant_id:variant_id,product_id:product_id,qty:qty}, function(html){

        $('#mini-cart-wrapper').html(html);

        $('#cart-count').text($('#mini-cart-wrapper .cart_list li').length);

        alertify.success('Added to cart!').delay(4).dismissOthers();

    });

});

// Remove item
$(document).on('click','.mini_cart_item .remove', function(){
    let key = $(this).closest('.mini_cart_item').data('id');
    $.post("{{ route('cart.remove') }}", {key:key}, function(html){

        $('#mini-cart-wrapper').html(html);
        $('#cart-count').text($('#mini-cart-wrapper .cart_list li').length);

        alertify.error('Removed from cart!').delay(4).dismissOthers();

    });
});

// Update qty (if you add input qty in mini cart)
$(document).on('change','.mini_cart_item .qty', function(){
    let key = $(this).closest('.mini_cart_item').data('id');
    let qty = $(this).val();
    $.post("{{ route('cart.update') }}", {key:key, qty:qty}, function(html){
        $('#mini-cart-wrapper').html(html);
    });
});
</script>



<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>


@if(session('success'))
<script>
Swal.fire({
    icon: 'success',
    title: 'Success',
    text: "{{ session('success') }}",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
});
</script>
@endif


@if(session('error'))
<script>
Swal.fire({
    icon: 'error',
    title: 'Error',
    text: "{{ session('error') }}",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
});
</script>
@endif

@if ($errors->any())
<script>
Swal.fire({
    icon: 'error',
    title: 'Validation Error',
    html: `{!! implode('<br>', $errors->all()) !!}`,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
});
</script>
@endif


<script>
const toast = Swal.mixin({
    toast: true,
    position: 'bottom-center',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
});
</script>




<script>
document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.tt-btn-wishlist').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            @if(!auth('customer')->check())

               toast.fire({
                  icon: 'info',
                  title: 'Please login to manage your wishlist'
              });

              setTimeout(() => {
                  $('#youmyModal').modal('show');
              }, 800)

              return;

            @endif

            const productId = this.dataset.productId;
            const btn = this;

            fetch("{{ route('wishlist.toggle') }}", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": "{{ csrf_token() }}"
                },
                body: JSON.stringify({
                    product_id: productId
                })
            })
            .then(res => res.json())
            .then(data => {

                // 🔥 Remove row if we're on wishlist page
                if (data.status === 'removed') {
                    const row = document.querySelector(
                        `tr[data-product-row="${productId}"]`
                    );
                    if (row) {
                        row.remove();
                    }
                }

                // Toggle heart state if exists
                btn.classList.toggle('active');
            });
        });
    });

});
</script>




@yield('footer_extras')





</body>
</html>



