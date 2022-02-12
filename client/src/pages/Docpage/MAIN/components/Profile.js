import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./topbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Profile.css";

export default function Profile(props) {
  return (
    <>
      <div className="background"></div>

      <div className="outer-div">
        <div className="inner-div">
          <div className="front">
            <div className="front_bkg-photo"></div>
            <div className="front_face-photo"></div>
            <div className="front_text">
              <h3 className="front_text-header">{props.name}</h3>
              <p className="front_text-para ">
                <i className="fas fa-graduation-cap front-icons text-dark py-2"></i>
                {props.degree}
              </p>
              <p className="front_text-para">
                <i className="fas fa-briefcase-medical px-2"></i>
                {props.specialist}
              </p>
              <p className="front_text-para ">
                <i className="fas fa-envelope px-2"></i>
                {props.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
