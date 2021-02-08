import logo from "./32x32.png";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
