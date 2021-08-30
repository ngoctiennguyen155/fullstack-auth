import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../App/redux/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const Login = (props) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  const HandleSubmit = async () => {
    try {
      const action = fetchUser(user);
      const result = await dispatch(action);
      console.log(result);
      const data = unwrapResult(result);
      console.log(data);
    } catch (error) {
      console.log("login failed ", error);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Vui long nhap email"
      ></input>
      <input
        value={user.password}
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Vui long nhap password"
      ></input>
      <input type="button" value="submit" onClick={HandleSubmit}></input>
    </div>
  );
};

Login.propTypes = {};

export default Login;
