import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="col mb-4">
        <div class="card" style={{ width: "18rem;" }}>
          <img src={this.props.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text"></p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Price:{this.props.price.current_retail}
            </li>
            <li class="list-group-item">OTHER STUFF</li>
            <li class="list-group-item">OTHER STUFF</li>
          </ul>
          <div class="card-body">
            <button type="button" class="btn btn-primary mr-4">
              See more...
            </button>
            <a class="btn btn-warning" href="#">
              <i class="fas fa-cart-plus">Add to cart</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
