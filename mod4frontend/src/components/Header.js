import React, { Component } from 'react'
import Order from './Order'

export default class Header extends Component{

    state = {
        carts: [],
        orders: []
    }
    viewCart = () => {
        fetch(`http://localhost:3000/users/${this.props.user_id}`)
        .then(res => res.json())
        .then(user => (
            this.setState({
                carts: user.carts,
                orders: user.orders
            })
        ))
    }
    render(){
        return(
            <div>
                <button onClick={this.viewCart}>
                    View My Cart
                </button>
                <div>
                    {this.state.carts.map(cart => (
                        <Order key={cart.id} cart={cart}/>
                    ))}
                </div>
            </div>
        )
    }
}