<div class="col-lg-3 col-md-4">
      <div class="mainlinkall ">
      
 
      
          <ul class="tab">

         <li> 
          
         <a class="tablinks"><i class="fa fa-home"></i> Dashboard</a></li>
                 
         
          <li>
            <a class="tablinks {{ request()->is('profile') ? 'active' : '' }}"
              href="{{ url('profile') }}"><i class="fa fa-user"></i> My Profile
            </a>
          </li>
            
            <!--
            <li class="myuvtab"> <a class="tablinks "  ><i class="fal fa-shopping-bag" aria-hidden="true"></i> Order</a>
              <ul class="sideray">
                <li> <a class="tablinks " onClick="location.href = 'paidorders.html'" ><i class="fa fa-eye" aria-hidden="true"></i> Paid orders</a></li>
                <li> <a class="tablinks " onClick="location.href = 'pendingorder.html'" ><i class="fa fa-eye" aria-hidden="true"></i> Pending orders</a></li>
              </ul>
            </li>
            -->


            <li>
            <a class="tablinks {{ request()->is('my-orders') ? 'active' : '' }}"
              href="{{ url('my-orders') }}"><i class="fal fa-shopping-bag"></i> Orders
            </a>
          </li>

          <li>
            <a class="tablinks {{ request()->is('addresses') ? 'active' : '' }}"
              href="{{ url('addresses') }}"><i class="fas fa-map-marker-alt"></i> Address
            </a>
          </li>

          <li>
            <a class="tablinks {{ request()->is('change-password') ? 'active' : '' }}"
              href="{{ url('change-password') }}"><i class="fa fa-key"></i> Change Password
            </a>
          </li>
                    

            
          <li> 
              
          <a class="dropdown-item" href="{{ route('customer.logout') }}"
          onclick="event.preventDefault(); document.getElementById('customer-logout-form').submit();"><i class="fa fa-arrow-circle-left"></i> Logout
          </a>

          </li>

          </ul>
        </div>
          </div>