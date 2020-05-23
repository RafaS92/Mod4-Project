import React from 'react';
import Product from './Product';

export default function EditOrder(props){
    return(
        <div>
            <Product product={props.product}/>
            <button onClick={() => props.removeOrder(props.product)}>Remove</button>
        </div>
    )
}