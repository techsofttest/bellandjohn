@if($cart && count($cart))
<ul class="cart_list">
    @foreach($cart as $item)
    <li class="mini_cart_item" data-id="{{ $item['key'] }}">
        <a href="javascript:void(0);" class="remove"><i class="far fa-times"></i></a>
        <a href="javascript:void(0);" class="img">
            <img src="{{ asset('storage/' . $item['image']) }}" alt="">
        </a>
        <a href="javascript:void(0);" class="product-title">{{ $item['name'] }} ({{ $item['size'] }} {{$item['color']}})</a>
        <span class="amount">€ {{ number_format($item['price'],2) }}</span>
        <div class="quantity">{{ $item['qty'] }} x € {{ number_format($item['price'],2) }}</div>
    </li>
    @endforeach
</ul>

<p class="total"><strong>Estimated total:</strong> <span class="amount">€ {{ number_format($total,2) }}</span></p>
<p class="buttons">
    <a href="{{ url('/cart') }}" class="vs-btn">View cart</a>
    <a href="{{ url('/checkout') }}" class="vs-btn checkout">Checkout</a>
</p>
@else
<p>Your cart is empty</p>
@endif
