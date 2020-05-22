
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Login } from './components/Login';
import Random from "./components/random";

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Random}/>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
