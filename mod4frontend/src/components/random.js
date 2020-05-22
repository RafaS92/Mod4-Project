import React, { Component } from "react";
import ProductList from "./ProductList";

class Random extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    fetch(
      "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?sponsored=1&limit=50&offset=0&store_id=3991&keyword=Tv",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "target-com-store-product-reviews-locations-data.p.rapidapi.com",
          "x-rapidapi-key":
            "31c5440035mshf5daeac1b76e139p1eb9b1jsn956d499e0482",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          products: result.products,
        });
      });
  }

  render() {
    return (
      <div>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default Random;
