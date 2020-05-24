import React from 'react';
import Product from './Product';

export default function Order(props){
    return(
        <div>
            <Product product={props.product}/>
        </div>
    )
}


