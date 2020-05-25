import React from "react";
import { Search } from "./Search";
import {Login} from './Login'
import {Link} from 'react-router-dom'

export default function NavBar(props) {
  let categories=['iPads', 'Tablets', 'Speakers', 'Microphones', 'Cables', 'Mouses', 'Printers', 'Refrigerators', 'Antennas', 'USBs', 'SD Cards', 'PCs', 'Laptops', 'Phones', 'TVs', 'Chargers', 'Extension Cords', 'Stoves', 'Grills', 'Earphones', 'Headphones', 'Cameras', 'Remotes','Phone Cases', 'Laptop Cases', 'Kindles', 'Video Games', 'Smartwatches' ]
  let sorted= categories.sort((a,b) => (a.toLowerCase() > b.toLowerCase()) ? 1 : -1)
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

          <Link to='/login'> <li className="nav-item">
            <a className="nav-link">
             Login/Sign Up
            </a>
          </li>
          </Link>

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
                 <a class="dropdown-item" onClick={()=> props.searchCategory(s)}>
                   {s}
                 </a>
              ) )}    
            </div>
          </li>
          <li className="nav-item">
            <a className="btn btn-success" href="#">
              <i className="fas fa-shopping-cart text-dark">Checkout</i>
            </a>
          </li>
        </ul>
        <Search searchItem={props.searchItem}/>
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
