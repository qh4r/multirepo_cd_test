import React, {lazy, Suspense} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import {createGenerateClassName, StylesProvider} from "@material-ui/styles";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import(`./components/MarrketingApp`));
const AuthLazy = lazy(() => import(`./components/AuthApp`));

const generateClassName = createGenerateClassName({
  productionPrefix: 'cr'
});

export default () => {

  return <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
      <div>
        <Header/>
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth" component={AuthLazy}/>
            <Route path="/" component={MarketingLazy}/>
          </Switch>
        </Suspense>
      </div>
    </StylesProvider>
  </BrowserRouter>
};
