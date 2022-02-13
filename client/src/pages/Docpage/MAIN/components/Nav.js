import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./topbar.css";
import { Link, useNavigate } from "react-router-dom";

export default function TopBar() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("Info");
    navigate("/");
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <Link to="/Doctor">
            <i className="fas fa-home" herf="#"></i>
          </Link>
        </div>

        <div className="topright">
          <button
            className="btn btn-info px-4 mx-4 text-white"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
