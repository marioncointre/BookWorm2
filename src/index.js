import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Categories from "./Components/Categories";
import Cat from "./Components/Categories/Cat";
import Mylibrary from "./Components/Library/Mylibrary";
import Recommendations from "./Components/Recommendations";
import Book from "./Components/Book";
import Search from "./Components/Search";
import About from "./Components/StaticPages/About";
import Contact from "./Components/StaticPages/Contact";
import Subscriptions from "./Components/StaticPages/Subscriptions";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/categories" component={Categories} />
      <Route path="/recommendations" component={Recommendations} />
      <Route exact path="/categories/:book" component={Book} />
      <Route exact path="/category/:cat" component={Cat} />
      <Route exact path="/search/:keyword" component={Search} />
      <Route  path="/about" component={About} />
      <Route  path="/subscriptions" component={Subscriptions} />
      <Route  path="/contact" component={Contact} />
      <Route  path="/mylibrary" component={Mylibrary} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
