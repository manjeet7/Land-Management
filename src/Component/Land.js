import React, { useState, useContext, useEffect } from "react";
import { Moviecontext } from "./Moviecontext";

function Land({ user }) {
  const [land, setlan] = useContext(Moviecontext);
  console.log("value", land);
  return (
    <div>
      {land.map(post => {
        <h1>{post.name}</h1>;
      })}
    </div>
  );
}

export default Land;
