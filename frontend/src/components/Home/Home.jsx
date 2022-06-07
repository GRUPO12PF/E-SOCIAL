import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { userLogout } from "../../redux/actions/actionUSER";
import { useDispatch } from "react-redux";

export default function Home() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!token) {
    navigate("/");
  }
  function logOut() {
    dispatch(userLogout);
  }

  return (
    <div>
      <div><h1>HOME</h1></div>
      <div onClick={() => logOut()}>
        <Link to="/">
          <h3>Logout</h3>
        </Link>
      </div>
    </div>
  );
}
