import React from 'react';
import CartProduct from './CartProduct';

export default function EditOrder(props){
    return(
        <div>
            <CartProduct product={props.product}/>
            <button onClick={() => props.removeOrder(props.product)}>Remove</button>
        </div>
    )
}