@extends('layouts.app')

@section('content')



<style>


     .address-card {
            position:relative;
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            transition: transform 0.2s, box-shadow 0.2s;
            border: 2px solid transparent;
        }

        .address-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }

        .address-card.default {
            border-color: var(--success-color);
            background: linear-gradient(to right, rgba(39, 174, 96, 0.05), white);
        }

        .address-badge
        {
            position: absolute;
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content;
            display: inline-block;
            text-align: center;
            background-color: var(--theme-color);
            color: var(--white-color);
            padding: .35em .55em;
            border-radius: 5px;
            font-size: 12px;
            font-weight: 400;
            right: 10px;
            top: 10px;

        }

        .badge-default {
            background-color: var(--success-color);
            font-size: 0.75rem;
            padding: 0.35rem 0.65rem;
        }

        .address-actions {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .btn-custom {
            border-radius: 6px;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
            transition: all 0.2s;
        }

        .btn-add-address {
            background-color: var(--secondary-color);
            border: none;
            color: white;
            padding: 0.75rem 2rem;
            font-weight: 500;
            box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
        }

        .btn-add-address:hover {
            background-color: #2980b9;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(52, 152, 219, 0.4);
        }

        .form-card {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 2px 12px rgba(0,0,0,0.1);
        }

        .form-label {
            font-weight: 500;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }

        .form-control:focus, .form-select:focus {
            border-color: var(--secondary-color);
            box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
        }

        .address-type {
            color: #6c757d;
            font-size: 0.875rem;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 0.5px;
        }

        .address-details {
            color: #495057;
            line-height: 1.8;
        }

        .empty-state {
            text-align: center;
            padding: 3rem 1rem;
            color: #6c757d;
        }

        .empty-state i {
            font-size: 4rem;
            margin-bottom: 1rem;
            opacity: 0.5;
        }

        @media (max-width: 768px) {
            .address-actions {
                flex-direction: column;
            }

            .address-actions .btn {
                width: 100%;
            }
        }


</style>



<section class="Myaccountsec">
 

 <div class="container-fluid">
    <div class="row">
      
      
        @include('user.user-sidebar')


    <div class="col-lg-9 col-md-8">
        
    <div class="row">

    @foreach($addresses as $add)

    <div class="col-lg-12">
                <div class="address-card @if($add->is_default==true) default @endif">

                    <span class="address-type">{{$add->address_type}}</span>

                    @if($add->is_default==true)
                    <span class="address-badge badge-default">Default</span>
                    @endif

                    <h5>{{$add->fullname}}</h5>

                    <p>{{$add->address_line1}}</p>

                    <p>{{$add->city}}, {{$add->state}}</p>

                    <p>{{$add->country}} - {{$add->postal_code}}</p>

                    <p>{{$add->phone}} - {{$add->email}}</p>

                     <a href="{{ route('addresses.edit', $add) }}"
                    class="btn btn-primary btn-sm">
                        Edit
                    </a>

                    {{-- Delete --}}
                    <form action="{{ route('addresses.destroy', $add) }}"
                        method="POST"
                        class="d-inline"
                        onsubmit="return confirm('Delete this address?')">
                        @csrf
                        @method('DELETE')
                        <button class="btn btn-danger btn-sm">
                            Delete
                        </button>
                    </form>

                    {{-- Set Default --}}
                    @if(!$add->is_default)
                        <form action="{{ route('addresses.default', $add) }}"
                            method="POST"
                            class="d-inline">
                            @csrf
                            <button class="btn btn-warning btn-sm">
                                Set Default
                            </button>
                        </form>
                    @endif


                </div>
    </div>
    @endforeach


    <div class="col-12 text-center">
    <a href="{{ route('addresses.create') }}" class="btn btn-success mb-3">
    + Add New Address
    </a>
    </div>


    </div>

        

    </div>


    </div>
    </div>


</section>





 <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"></script>
    <script>
       
      
        function showAddressForm() {
            document.getElementById('addressFormSection').style.display = 'block';
            document.getElementById('formTitle').textContent = 'Add New Address';
            document.getElementById('addressForm').reset();
            document.getElementById('addressFormSection').scrollIntoView({ behavior: 'smooth' });
        }

        function hideAddressForm() {
            document.getElementById('addressFormSection').style.display = 'none';
            document.getElementById('addressForm').reset();
        }



    </script>




    <!-- Address AJax -->


    <script>

        
        function fetchAddresses() {
            fetch('{{url("/addresses/list")}}')
                .then(res => res.json())
                .then(data => {
                    renderAddresses(data);
                });
        }

        function renderAddresses(addresses) {
        const addressList = document.getElementById('addressList');

        if (!addresses.length) {
            addressList.innerHTML = `<div class="empty-state">No addresses</div>`;
            return;
        }

        addressList.innerHTML = addresses.map(addr => `
            <div class="col-lg-12">
                <div class="address-card ${addr.is_default ? 'default' : ''}">
                    <span class="address-type">${addr.address_type}</span>
                    ${addr.is_default ? '<span class="badge badge-default">Default</span>' : ''}
                    <h5>${addr.fullname}</h5>
                    <p>${addr.address_line1}</p>
                    <p>${addr.city}, ${addr.state}</p>
                    <p>${addr.country} - ${addr.postal_code}</p>

                    <button onclick="editAddress(${addr.id})">Edit</button>
                    <button onclick="deleteAddress(${addr.id})">Delete</button>
                    ${!addr.is_default ? `<button onclick="setDefault(${addr.id})">Set Default</button>` : ''}
                </div>
            </div>
        `).join('');
    }


        document.getElementById('addressForm').addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const id = document.getElementById('address_id').value;

        fetch(id ? `{{url('/addresses/update')}}/${id}` : `{{url('/addresses/store')}}`, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
            },
            body: formData
        }).then(() => {
            hideAddressForm();
            fetchAddresses();
        });
    });
    

    function deleteAddress(id) {
    fetch(`{{url('/addresses/delete')}}/${id}`, {
        method: 'DELETE',
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        }
    }).then(fetchAddresses);
    }

    function setDefault(id) {
        fetch(`{{url('/addresses/default')}}/${id}`, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
            }
        }).then(fetchAddresses);
    }


    </script>


@endsection