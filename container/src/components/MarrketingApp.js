import React, {useEffect, useRef} from "react";
import { mount } from "marketing/MarketingApp";

export const MarketingApp = () => {
  const marketingContainer = useRef(null);

  useEffect(() => {
    if(marketingContainer.current) {
      mount(marketingContainer.current);
    }
  }, []);

  return <div ref={marketingContainer} />
};
