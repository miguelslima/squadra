import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Characters from "../pages/Characters";
import Planets from "../pages/Planets";

export default function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/planets" component={Planets} />
        <Route path="/characters" component={Characters} />

        {/* <Route path="/profile" component={Profile} />
        <Route path="/incident/"  component={NewIncident} />
      <Route path="/incidents/:id" exact component={EditIncident} /> */}
      </Switch>
    </BrowserRouter>
  );
}
