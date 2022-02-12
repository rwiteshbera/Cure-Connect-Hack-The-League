import React from "react";
import "./Header.css";
import headerImage from "./header-bag-image.png";
import call24 from "./247.png";
export default function Header() {
  return (
    <>
      <div className="d-flex justify-content-around align-items-center my-1 home-header">
        <div className="">
          <img
            className="header-img"
            alt=""
            src={headerImage}
          />
        </div>
        <div className="Title_main text-center text-uppercase">
          <h1 className="">Cure Connect</h1>
          <span><img src={call24} alt="" width={"50px"}/></span>
        </div>
        <div className="design">
          <div className="header-circle"></div>
          <div className="header-circle2"></div>
        </div>
      </div>
    </>
  );
}
