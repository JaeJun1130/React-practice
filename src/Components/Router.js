import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "../Components/Header";
import HomeProduct from "../Routes/HomeProduct";
import BestProduct from "../Routes/BestProduct";
import SaleProduct from "../Routes/SaleProduct";
import EventProduct from "../Routes/EventProduct";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={HomeProduct}></Route>
      <Route path="/Best" exact component={BestProduct}></Route>
      <Route path="/Sale" exact component={SaleProduct}></Route>
      <Route path="/Event" exact component={EventProduct}></Route>
      <Redirect from="*" to="/"></Redirect>
    </Switch>
  </Router>
);
