import React, {useRef, useEffect} from "react";
import {MarketingApp} from "./components/MarrketingApp";
import {BrowserRouter} from "react-router-dom";
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
    <MarketingApp/>
    </div>
    </StylesProvider>
  </BrowserRouter>
};
