import React, { useState } from "react";
import Cart from "./Cart";

export default function Checkout(props) {
  let current_cart = props.location.state.cart;
  let user_id = props.location.state.user;
  let [cart, setState] = useState(current_cart);

  let totalPrice = cart.orders
    .map((o) => o.product.price)
    .reduce((a, b) => a + b, 0);

  let purchased = () => {
    fetch("http://localhost:3000/carts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user_id,
      }),
    })
      .then((res) => res.json())
      .then((user) => props.history.push("/home", user.id));
  };

  return (
    <div>
      <div class="container">
        <h2>Your Cart</h2>
        <Cart cart={cart} orders={cart.orders} />
        <h4>
          Cart
          <span>
            <b>{cart.id}</b>
          </span>
        </h4>
        {cart.orders.map((order) => (
          <p>
            {order.product.name}
            <span>${order.product.price}</span>
          </p>
        ))}
        <hr />
        <p>
          Total{" "}
          <span>
            <b>{totalPrice}</b>
          </span>
        </p>
      </div>

      <form>
        <h2>
          Billing Address <i class="fas fa-home fa-sm"> </i>
        </h2>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationDefault01">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="fname"
              placeholder="John M. Doe"
              name="firstname"
              required
            />
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationDefault02">Email</label>
            <input
              type="text"
              name="email"
              class="form-control"
              id="email"
              placeholder="john@example.com"
              required
            />
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationDefaultUsername">City</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend2"></span>
              </div>
              <input
                type="text"
                id="city"
                name="city"
                class="form-control"
                id="validationDefaultUsername"
                placeholder="Houston"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationDefault03">Address</label>
            <input
              type="text"
              class="form-control"
              id="adr"
              placeholder="542 W. 15th Street"
              name="address"
              required
            />
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationDefault04">State</label>
            <input
              type="text"
              class="form-control"
              id="state"
              placeholder="State"
              required
            />
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationDefault05">Zip</label>
            <input
              type="text"
              class="form-control"
              id="Zip"
              name="Zip"
              placeholder="Zip"
              required
            />
          </div>
        </div>

        <h2>
          Payment Information <i class="fab fa-cc-visa mr-2"></i>
          <i class="fab fa-cc-mastercard mr-2"></i>
        </h2>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationDefault01">Name On Card</label>
            <input
              type="text"
              class="form-control"
              id="cname"
              placeholder="John M. Doe"
              name="cardname"
              required
            />
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationDefault02">Credit Card Number</label>
            <input
              type="text"
              id="ccnum"
              class="form-control"
              id="validationDefault02"
              name="cardnumber"
              required
            />
          </div>
          <div class="col-md-1 mb-3">
            <label for="validationDefaultUsername">Exp.Date</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend2"></span>
              </div>
              <input
                type="text"
                class="form-control"
                id="expd"
                placeholder="03/09"
                aria-describedby="inputGroupPrepend2"
                name="expirationd"
                required
              />
            </div>
          </div>

          <div class="col-md-1 mb-3">
            <label for="validationDefaultUsername">CVV</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend2"></span>
              </div>
              <input
                type="text"
                class="form-control"
                id="cvvid"
                name="cvv"
                placeholder="521"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>

        <button class="btn btn-primary" type="submit">
          Purchase
        </button>
      </form>
    </div>
  );
}
