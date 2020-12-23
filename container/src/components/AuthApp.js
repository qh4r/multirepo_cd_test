import React, {useEffect, useRef} from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

export const AuthApp = () => {
  const authContainer = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if(authContainer.current) {
      const {onParentNavigate} = mount(authContainer.current, {
        onNavigate: ({pathname: nextPath}) => {
          if(history.location.pathname !== nextPath) {
            history.push(nextPath);
          }
        },
        initialPath: history.location.pathname,
      });

      history.listen(onParentNavigate);
    }
  }, []);

  return <div ref={authContainer} />
};
