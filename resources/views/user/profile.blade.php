@extends('layouts.app')


@php $customer = auth('customer')->user(); @endphp


@section('content')


<style>


  /* Font Awesome 5 Icon Classes */

.fa-cart-plus:before {
    content: "\f217"
}


</style>


<section class="Myaccountsec">
  <div class="container-fluid">
    <div class="row">
      
      @include('user.user-sidebar')
  
    
      <div class="col-lg-9 col-md-8">

      <section class="container py-5">
        <h2 class="mb-4">Profile Summary</h2>
        
        <!-- First Row: Statistics Cards -->
        <div class="row g-4 mb-4">
            <!-- Total Orders Card -->
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body text-center">
                        <div class="mb-3">
                            <i class="fas fa-cart-plus fa-3x text-primary"></i>
                        </div>
                        <h3 class="card-title mb-2">{{ $totalOrders }}</h3>
                        <p class="card-text text-muted">Total Orders</p>
                    </div>
                </div>
            </div>
            
            <!-- Total Amount Spent Card -->
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body text-center">
                        <div class="mb-3">
                            <i class="fas fa-money-bill fa-3x text-success"></i>
                        </div>
                        <h3 class="card-title mb-2">{{ number_format($totalSpent, 2) }}</h3>
                        <p class="card-text text-muted">Total Amount Spent</p>
                    </div>
                </div>
            </div>
            
            <!-- Wishlist Count Card -->
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body text-center">
                        <div class="mb-3">
                            <i class="fas fa-heart fa-3x text-danger"></i>
                        </div>
                        <h3 class="card-title mb-2">{{ $wishlistCount }}</h3>
                        <p class="card-text text-muted">Wishlist Items</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Second Row: Customer Details -->
        <div class="row">
            <div class="col-12">
                <div class="card border-0 shadow-sm">
                    <div class="card-header bg-white py-3">
                        <h5 class="mb-0"><i class="fas fa-user me-2"></i>Details</h5>
                    </div>
                    <div class="card-body">

                        <div class="row g-3">

    <div class="col-md-6">
        <div class="d-flex align-items-start">
            <strong class="text-muted me-2" style="min-width: 120px;">Name:</strong>
            <span>{{ $customer->name }}</span>
        </div>
    </div>

    <div class="col-md-6">
        <div class="d-flex align-items-start">
            <strong class="text-muted me-2" style="min-width: 120px;">Email:</strong>
            <span>{{ $customer->email }}</span>
        </div>
    </div>

    <div class="col-md-6">
        <div class="d-flex align-items-start">
            <strong class="text-muted me-2" style="min-width: 120px;">Phone:</strong>
            <span>{{ $customer->phone ?? '—' }}</span>
        </div>
    </div>

    <div class="col-md-6">
        <div class="d-flex align-items-start">
            <strong class="text-muted me-2" style="min-width: 120px;">Registered On:</strong>
            <span>{{ $customer->created_at->format('F d, Y') }}</span>
        </div>
    </div>

</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        
      </div>
    </div>
  </div>
</section>



@endsection