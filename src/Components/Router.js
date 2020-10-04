import react from "React";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import BestProduct from "../Routes/BestProduct";

export default () => (
  <Router>
    <Switch>
      <Route path="/Best" exact component={BestProduct}></Route>
    </Switch>
  </Router>
);
