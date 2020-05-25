import React from "react";
import { Search } from "./Search";
import {Login} from './Login'
import {Link} from 'react-router-dom'
import Checkout from './Checkout'


export default class NavBar extends React.Component {

state={
  current_user_id: this.props.current_user_id
}



render(){
  // let current_cart = this.state.carts.length == 1 ?  this.state.carts[0] : this.state.carts.slice(-1)[0]
  // console.log(this.props.carts)
  let categories=['iPads', 'Tablets', 'Speakers', 'Microphones', 'Cables', 'Mouses', 'Printers', 'Refrigerators', 'Antennas', 'USBs', 'SD Cards', 'PCs', 'Laptops', 'Phones', 'TVs', 'Chargers', 'Extension Cords', 'Stoves', 'Grills', 'Earphones', 'Headphones', 'Cameras', 'Remotes','Phone Cases', 'Laptop Cases', 'Kindles', 'Video Games', 'Smartwatches' ]
  let sorted= categories.sort((a,b) => (a.toLowerCase() > b.toLowerCase()) ? 1 : -1)

  let user = this.props.current_user_id
//  console.log(this.props)
  return (
    <nav className="navbar navbar-expand-lg  bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Past Orders
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              Log in

            </a>
          </li> */}

          
          {this.props.current_user_id == undefined ? 

          <Link to='/login'>
             <li className="nav-item">
            <a className="nav-link">
             Login/Sign Up
            </a>
          </li>
          </Link>
          : 
          <li className="nav-item active">
          <li className="nav-item">
            <a className="nav-link" href="#">
             Log Out
            </a>
          </li>
          </li>
}

         <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Category
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              {sorted.map(s=>(
                 <a class="dropdown-item" onClick={()=> this.props.searchCategory(s)}>
                   {s}
                 </a>
              ) )}    
            </div>
          </li>
          <Link to={{pathname: '/checkout',state: {user: user, cart: this.props.carts}}}>
          <li className="nav-item">
            <a className="btn btn-success" onClick={()=>(
              this.props.current_user_id ?  alert("hi") :
              alert("Since you are not logged in, you can't checkout. Please log in.")
            )}>
              <i className="fas fa-shopping-cart text-dark">Checkout</i>
            </a>
          </li>
          </Link>
        </ul>
        <Search searchItem={this.props.searchItem}/>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search" />
        
          <button
            className="btn btn-outline-success my-4 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
      }
}
