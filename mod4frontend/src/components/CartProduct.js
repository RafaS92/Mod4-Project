import React, { Component } from "react";
import Card from "./Card";

export default function CartProduct(props) {

    let image = props.product.image

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