import React from "react";

const OrderSuccess = (props) => {
  return (
    <div class="container mt-5 mb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="invoice p-5">
              <h5>Your order Confirmed!</h5>

              <span class="font-weight-bold d-block mt-4">Hey,</span>
              <span>
                You order has been confirmed and will be shipped in next two
                days!
              </span>

              <div class="product border-bottom table-responsive my-3">
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td width="20%">
                        <img src={props.cart.img} width="70" />
                      </td>

                      <td width="60%">
                        <span class="font-weight-bold">
                          {props.cart.tittle}
                        </span>
                        <div class="product-qty">
                          <span class="d-block">Quantity:1</span>
                        </div>
                      </td>
                      <td width="20%">
                        <div class="text-right">
                          <span class="font-weight-bold">Rs. {props.cart.price}</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                We will be sending shipping confirmation email when the item
                shipped successfully!
              </p>
              <p class="font-weight-bold mb-0">Thanks for shopping with us!</p>
              <span>Shopify Team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
