import React from "react";
import {BrowserRouter as Router, Route, Routes as RoutesDom,} from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";

const Routes = () => (
  <Router>
    <RoutesDom>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:heroButton" element={<Details/>}/>
    </RoutesDom>
  </Router>
);

export default Routes;