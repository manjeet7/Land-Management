import React, { useState } from "react";
import Manager from "./Manager";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Net.css";

function Net() {
  const [land, setland] = useState([
    { name: "manjeet", description: "this is new land", id: 12 },
    { name: "manjeet", description: "this is new land", id: 13 },
    { name: "manjeet", description: "this is new land", id: 15 },
  ]);
  const addme = (name, description, id) => {
    setland([...land, { name, description, id }]);
    console.log("name", name);
  };
  const deleteme = (id) => {
    const items = land.filter((post) => {
      return post.id !== id;
    });
    setland(items);
  };
  return (
    <div className="net_app">
      <Manager addme={addme} />
      <div className="land_container">
        <ul className="land_list">
          {land.map((post) => {
            return (
              <li className="land" key={post.id}>
                {post.name}
                {post.description}
                {post.id}
                <DeleteIcon
                  className="land_button"
                  onClick={() => deleteme(post.id)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Net;
