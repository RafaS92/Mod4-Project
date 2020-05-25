import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  render() {
    // console.log(this.props.products);
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
