@extends('layouts.app')

@section('content')


<style>


</style>


<section class="Myaccountsec">
 

 <div class="container-fluid">

    <div class="row">
      
      
        @include('user.user-sidebar')


    <div class="col-lg-9 col-md-8">
        
    <div class="row">

    <div class="col-lg-12">


    <form action="{{ route('addresses.store') }}" method="POST">
    @csrf

    <input class="form-control mb-2" name="fullname" placeholder="Full Name" required>

    <input class="form-control mb-2" name="email" placeholder="Email" required>

    <input class="form-control mb-2" name="phone" placeholder="Phone" required>

    <input class="form-control mb-2" name="address_line1" placeholder="Address Line 1" required>

    <input class="form-control mb-2" name="city" placeholder="City" required>

    <input class="form-control mb-2" name="state" placeholder="State" required>

    <input class="form-control mb-2" name="postal_code" placeholder="Postal Code" required>

    <input class="form-control mb-2" name="country" placeholder="Country" required>

    <select class="form-control mb-3" name="address_type" required>
        <option value="home">Home</option>
        <option value="work">Work</option>
    </select>

    <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" name="is_default" value="1">
        <label class="form-check-label">
            Set as default address
        </label>
    </div>

    <button class="btn btn-primary">
        Save Address
    </button>
</form>




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