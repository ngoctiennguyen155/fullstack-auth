import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { logout } from "../../App/redux/userSlice";
import { useHistory } from "react-router-dom";

const Dashboard = (props) => {
  const ditpatch = useDispatch();
  const history = useHistory();
  const Logout = () => {
    const action = logout();
    console.log(action);
    ditpatch(action);
    history.push("/login");
  };
  return (
    <div>
      Dashboard <button onClick={Logout}>log out</button>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
