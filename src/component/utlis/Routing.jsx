import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CompletedTask from "../Pages/CompletedTask";
import IncompletedTask from '../Pages/IncompletedTask'
import PageNotFound from '../PageNotFound'
import Home from "../Home";
import particularPage from "../Pages/particularPage";
export default class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/completedTask" component={CompletedTask} exact />
          <Route path="/inCompletedTask" component={IncompletedTask} exact />
          <Route path="/particularTask/:title?" component={particularPage} exact />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
