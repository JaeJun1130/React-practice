import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import BestProduct from "../Routes/BestProduct";
import Header from "../Components/Header";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/Best" exact component={BestProduct}></Route>
    </Switch>
  </Router>
);
