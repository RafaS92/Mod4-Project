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
      <h1>Your Cart</h1>
      {/* <Cart cart={cart} orders={cart.orders}/> */}

      <div class="container">
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

      <h3>Billing Address</h3>
      <label for="fname">Full Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="John M. Doe"
      />
      <label for="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="john@example.com"
      />
      <label for="adr">Address</label>
      <input
        type="text"
        id="adr"
        name="address"
        placeholder="542 W. 15th Street"
      />
      <label for="city">City</label>
      <input type="text" id="city" name="city" placeholder="New York"></input>

      <h3>Payment</h3>

      <label for="cname">Name on Card</label>
      <input
        type="text"
        id="cname"
        name="cardname"
        placeholder="John More Doe"
      />
      <label for="ccnum">Credit card number</label>
      <input
        type="text"
        id="ccnum"
        name="cardnumber"
        placeholder="1111-2222-3333-4444"
      />
      <br />
      <label for="expmonth">Exp Month</label>
      <input
        type="text"
        id="expmonth"
        name="expmonth"
        placeholder="September"
      />
      <label for="expyear">Exp Year</label>
      <input type="text" id="expyear" name="expyear" placeholder="2018" />
      <label for="cvv">CVV</label>
      <input type="text" id="cvv" name="cvv" placeholder="352" />
      <br />

      <button onClick={purchased}>Purchase</button>
    </div>
  );
}
