@extends('layouts.app')


@section('content')

 <div class="ibm-bcrms-main">
 <div class="ibm-bcrms">
 <div class="container-fluid">
 <ul class="ibm-breadcrumb ">
 <li><a href="{{url('/')}}">Home</a></li>
 <li class="active">Wishlist</li>
 </ul>
  <h3>Wishlist</h3>
 </div>
</div>
</div>

 <div class="vs-cart-wrapper wishlist-sec">
  <div class="container-fluid">
    
    <form action="#" class="woocommerce-cart-form">
      <table class="cart_table">
        <thead>
          <tr>
          
        <th colspan="2" class="cart-col-productname">Product </th>
			 
        
        <th class="cart-col-remove">Action</th>
        </tr>

        </thead>

        <tbody>


        @if($wishlists->isEmpty())

            <td colspan="4" style="text-align:center"><p>No items in wishlist.</p></td>

        @endif



        @foreach($wishlists as $item)

        <tr class="cart_item" data-product-row="{{ $item->product->id }}">

        <td data-title="Product Image"><a class="cart-productimage" href="{{url('products')}}/{{$item->product->slug}}"><img width="120" height="120" src="{{asset('storage')}}/{{$item->product->image}}" alt=""></a></td>
        <td data-title="Product Name" class="product-td-full"><a class="cart-productname" href="{{url('products')}}/{{$item->product->slug}}">{{ $item->product->name }}</a>
		<p class="price-carttablee">€ {{ number_format($item->product->price, 2) }}</p>
		<!--<p class="color-carttablee"> Color: White</p>-->
			
		</td>
            

            @php /*
            <td data-title="Stock Status"><span class="amount">
              <bdi><span>5 In Stock</span></bdi>
            </span></td>
            */ @endphp

        <td data-title="Action">

                <a href="javascript:void(0)"
                title="remove"
                class="remove tt-btn-wishlist active"
                data-product-id="{{ $item->product->id }}">
                    <i class="fal fa-trash-alt"></i>
                </a>

        </td>

          </tr>
        
        @endforeach


            @php /*
          <tr>
            <td colspan="6" class="actions">
			  <a href="#" class=" cont-shopinn">Continue shopping</a>
              <a href="cart.html" class="vs-btn style2 rounded-1 shadow-none">Add All to cart</a>
              <a href="#" class="vs-btn rounded-1 style3 shadow-none">Remove All From Wishlist</a>
			  
			 </td>
          </tr>
            */ @endphp
		  
        </tbody>
      </table>
    </form>
 
  </div>
</div>


@endsection