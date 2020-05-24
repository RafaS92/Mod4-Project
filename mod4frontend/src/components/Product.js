import React, { Component } from "react";
import Card from "./Card";

export default function Product(props) {

  let base = props.product.images[0].base_url;
  // console.log(props.product.images[0].primary)
  let second = props.product.images[0].primary;
  let image = base + second;
  //   let cut = props.product.description;
  //   console.log(cut.slice(0, 20));
  // console.log(base)

  return (
    
    <div>
      <Card
        title={props.product.title}
        description={props.product.description}
        image={image}
        price={props.product.price}
      />
    </div>
  );

}
