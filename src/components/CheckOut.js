import React from "react";
import { useNavigate } from "react-router-dom"

const CheckOut = (props) => {
  const navigate = useNavigate();

  return (
    <div class="container">
    <div class="py-5 text-center">
        <h2>Checkout form</h2>
    </div>
    <div class="row">
        <div class="col-md-8 order-md-1">
            <h4 class="mb-3 mx-5">Billing address</h4>
            <form class="needs-validation" novalidate="">
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label >First name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="" required=""/>
                        <div class="invalid-feedback"> Valid first name is required. </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" required=""/>
                        <div class="invalid-feedback"> Valid last name is required. </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""/>
                    <div class="invalid-feedback"> Please enter your shipping address. </div>
                </div>
                <div class="mb-3">
                    <label for="address2">Address 2</label>
                    <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"/>
                </div>
                <div>
                    <h5>Amount {props.cart.price}</h5>
                </div>
                <button class="btn btn-primary btn-lg btn-block my-3" type="submit" onClick={()=>{navigate("/ordersuccess")}}>Continue to checkout</button>
            </form>
        </div>
    </div>
</div>
  );
};

export default CheckOut;
