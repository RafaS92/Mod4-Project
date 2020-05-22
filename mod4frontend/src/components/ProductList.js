import Product from "./Product";
import React, { Component } from "react";

class ProductList extends Component {
  render() {
    return (
      <div>
        {this.props.products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    );
  }
}

export default ProductList;
