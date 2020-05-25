import React, { Component } from 'react';
import Order from './Order'

export default class Cart extends Component{
    render(){
        return(
            <div>
                {this.props.cart.id}
                {this.props.orders.map(order => (
                    <Order key={order.id} order={order} product={order.product}/>
                ))}
            </div>
        )
    }
}
