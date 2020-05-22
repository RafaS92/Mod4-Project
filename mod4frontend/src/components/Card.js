import React, { Component } from "react";
import Product from "./Product";

class Card extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img variant="top" src="holder.js/100px180?text=Image cap" />
        <div className="card-body">
          <p>{this.props.title}</p>
          <p>{this.props.description}</p>
          <div className="list-group-flush">
            <p>"Price"</p>
          </div>
          <div href="#">"Add cart"</div>
        </div>
      </div>
    );
  }
}

export default Card;

function other() {}
