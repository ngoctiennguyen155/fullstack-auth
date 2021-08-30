import userApi from "./Api/userApi";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user);
  console.log(user);
  useEffect(() => {}, [user]);
  return (
    <Switch>
      {user.isLogin && <Redirect from="/login" to="/dashboard" />}
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default App;
