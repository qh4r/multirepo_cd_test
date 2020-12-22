import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from "./App";

const mount = (element, {
  onNavigate,
  defaultHistory,
}) => {
  const history = defaultHistory || createMemoryHistory();
  if(onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(
    <App history={history}/>,
    element,
  );

  return {
    onParentNavigate({ pathname: nextPathname }) {
      if(history.location.pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  }
}

if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector("#marketing-root-dev");
  if(devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory()});
  }
}

export { mount };
