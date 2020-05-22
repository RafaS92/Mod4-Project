import React, { Component } from "react";
import Card from "./Card";

export default function Product(props) {

  return (
    <div>
      <Card
        title={props.product.title}
        description={props.product.description}
      />
    </div>
  );

}
