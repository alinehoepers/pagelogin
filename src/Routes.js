import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";

export default () =>
  <Switch>
    <Route path="/" exact component={Login} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;