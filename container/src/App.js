import React, {useRef, useEffect} from "react";
import {MarketingApp} from "./components/MarrketingApp";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";

export default () => {

  return <BrowserRouter>
    <div>
    <Header />
    <MarketingApp/>
    </div>
  </BrowserRouter>
};
