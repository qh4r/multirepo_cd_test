import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from "./App";

const mount = (element, {
  onNavigate,
  defaultHistory,
  initialPath,
  onSignIn,
}) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: initialPath ? [initialPath] : [],
  });
  if(onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(
    <App
      history={history}
      onSignIn={onSignIn}
    />,
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
  const devRoot = document.querySelector("#auth-root-dev");
  if(devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory()});
  }
}

export { mount };
