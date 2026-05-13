@extends('layouts.app')


@section('content')




<div class="ibm-bcrms-main">
 <div class="ibm-bcrms">
 <div class="container-fluid">
 <ul class="ibm-breadcrumb ">
 <li><a href="index.html">Home</a></li>
  
 <li class="active">Frequently Asked Questions</li>
 </ul>
  <h3>Frequently Asked Questions</h3>
 </div>
</div>
</div>


  <div class="container-fluid">
  <div class="faq-innersec">
    <div class="row  ">
      <div class="col-lg-7  ">
	  

        <div class="vs-accordion accordion" id="productAccordion">
          <div class="accordion-item">
            <div class="accordion-header" id="accordionOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How did my package ship?</button>
            </div>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="accordionOne" data-bs-parent="#productAccordion">
              <div class="accordion-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" id="accordionTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">How do I know my package has shipped?</button>
            </div>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="accordionTwo" data-bs-parent="#productAccordion">
              <div class="accordion-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" id="accordion3">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">How long will my package take to arrive?</button>
            </div>
            <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="accordion3" data-bs-parent="#productAccordion">
              <div class="accordion-body">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" id="accordion4">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">What are business days?</button>
            </div>
            <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="accordion4" data-bs-parent="#productAccordion">
              <div class="accordion-body">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
    <div class="accordion-item">
            <div class="accordion-header" id="accordion5">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse4">How many days to deliver the product ?</button>
            </div>
            <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="accordion5" data-bs-parent="#productAccordion">
              <div class="accordion-body">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
		      <div class="accordion-item">
            <div class="accordion-header" id="accordion6">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6"> you accept returns ?</button>
            </div>
            <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="accordion6" data-bs-parent="#productAccordion">
              <div class="accordion-body">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
	  
	  <div class="col-lg-5  ">
        <div class="faq-sidebar-im">
         
          <img src="{{asset('img/faq-1.jpg')}}" alt="" width="100%"></div>
      </div>
 
    </div>
  </div>
</div>




@endsection