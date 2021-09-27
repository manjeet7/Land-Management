import React, { useState, createContext } from "react";
import Land from "./Land";

export const Moviecontext = createContext();

export const LandProvider = props => {
  const [land, setlan] = useState({
    name: "manjeet",
    size: 21,
    description: "hello"
  });
  return (
    <Moviecontext.Provider value={[land, setlan]}>
      {props.children}
    </Moviecontext.Provider>
  );
};
