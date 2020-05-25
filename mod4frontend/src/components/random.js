import React, { Component } from "react";
import ProductList from "./ProductList";
import { Search } from "./Search";
import {Category} from './Category'
import { Link } from "react-router-dom";

class Random extends Component {
  state = {
    products: [],
    searchTerm: '',
    searchCategory:'',
    current_user_id: this.props.location.state
  };

searchItem=(e)=>{
  this.setState({
   searchTerm: e.target.value
  })
  // this.getItems()
}
  
// Isaac
searchCategory=(searchTerm)=>{
  // console.log(searchTerm)
this.setState({
  searchCategory: searchTerm
})
this.getItems(searchTerm)
}

  
// searchCategory=(e)=>{
//   console.log(e)
// this.setState({
//   searchCategory: e.target.value
// })
// this.getItems()
// }

  // };

  
  componentDidMount() {
    // this.getItems()
  
      fetch(
        "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?sponsored=1&limit=50&offset=0&store_id=3991&keyword=Discount",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "target-com-store-product-reviews-locations-data.p.rapidapi.com",
            "x-rapidapi-key":
              "31c5440035mshf5daeac1b76e139p1eb9b1jsn956d499e0482",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          this.setState({
            products: result.products
          });
        });
  }


  getItems=(searchItem)=>{
    // console.log(searchItem)
    fetch(
      `https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?sponsored=1&limit=50&offset=0&store_id=3991&keyword=${searchItem}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "target-com-store-product-reviews-locations-data.p.rapidapi.com",
          "x-rapidapi-key":
            "31c5440035mshf5daeac1b76e139p1eb9b1jsn956d499e0482",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          products: result.products
        });
      });
  }

  

  render() {

  //   let check = this.state.products.find( product => product.title.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))
  let filteredProducts=[]
    if(this.state.products){
      console.log(this.state.searchTerm)
      console.log(this.state.searchCategory)
      filteredProducts= this.state.products.filter( product => product.title.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))
    }else{
      filteredProducts= [{name: 'No product'}]
    }
    // // console.log(this.state.products);
    return (
      <div>
         <Search searchItem={this.searchItem}
        //  getItems={this.getItems}
        />
         <Category searchCategory={this.searchCategory}
         />
        <ProductList products={filteredProducts}/>

    {/* return ( */}
      {/* <div></div> */}
        <Link to={{pathname: "/cart", state: { current_user_id: this.state.current_user_id }}}>
          View my cart
        </Link>
        {/* <ProductList products={this.state.products} /> */}
      </div>
    )
  }
}

export default Random;
