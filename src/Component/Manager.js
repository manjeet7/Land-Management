import React, { useState, useContext } from "react";
import Land from "./Land";
import "./Manager.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Moviecontext } from "./Moviecontext";

function Manager({ addme }) {
  const [land, setlan] = useContext(Moviecontext);
  const [user, setuser] = useState({
    name: "",
    description: "",
    size: "",
  });
  const handlechange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const callme = (e) => {
    e.preventDefault();
    addme(user.name, user.description, user.size);
    console.log(user.name);
  };
  return (
    <div className="container">
      <Box>
        <form onSubmit={callme}>
          <div className="form_container">
            <TextField
              className="prop_name"
              id="standard-basic"
              label="Name"
              variant="standard"
              type="text"
              value={user.name}
              name="name"
              onChange={handlechange}
            />
            <TextField
              className="prop_desc"
              id="standard-basic"
              label="Description"
              variant="standard"
              type="text"
              value={user.description}
              name="description"
              onChange={handlechange}
            />
            <TextField
              className="prop_size"
              id="standard-basic"
              label="Size"
              variant="standard"
              type="text"
              value={user.size}
              name="size"
              onChange={handlechange}
            />
          </div>
          <div className="form_submit">
            <Button type="submit" value="Submit" variant="outlined">
              Submit
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default Manager;
