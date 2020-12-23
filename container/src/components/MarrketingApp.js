import React, {useEffect, useRef} from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

const MarketingApp = () => {
  const marketingContainer = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if(marketingContainer.current) {
      const {onParentNavigate} = mount(marketingContainer.current, {
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

  return <div ref={marketingContainer} />
};

export default MarketingApp;
