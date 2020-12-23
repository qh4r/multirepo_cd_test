import React, {useRef, useEffect} from "react";
import {MarketingApp} from "./components/MarrketingApp";
import {AuthApp } from "./components/AuthApp";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import {createGenerateClassName, StylesProvider} from "@material-ui/styles";


const generateClassName = createGenerateClassName({
  productionPrefix: 'cr'
});

export default () => {

  return <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
    <div>
    <Header />
    <Switch>
      <Route path="/auth" component={AuthApp} />
      <Route path="/" component={MarketingApp} />
    </Switch>
    </div>
    </StylesProvider>
  </BrowserRouter>
};
