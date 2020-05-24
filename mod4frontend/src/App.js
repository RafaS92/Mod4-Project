import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom'
import { Route } from 'react-router'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Login } from './components/Login';
import Random from "./components/random";
import NavBar from "./components/NavBar";
import Header from './components/Header'
import Checkout from './components/Checkout'

class App extends React.Component {

  render() {
    return (
      <div>
       <NavBar />
        <Random />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/cart" component={Header}/>
            <Route exact path="/checkout" component={Checkout}/>
            <Route exact path="/home" component={Random}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
