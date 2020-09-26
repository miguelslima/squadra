import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Characters from "../pages/Characters";
import ShowCharacters from "../pages/Characters/Show";
import Planets from "../pages/Planets";
import Error404 from "../pages/Error404";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/planets" component={Planets} />
        <Route path="/characters" component={Characters} />
        <Route path="/individual/:id" component={ShowCharacters} />
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
