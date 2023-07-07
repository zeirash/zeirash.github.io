import React, { useState } from "react";
import "./style.css";
import { FaHome } from "react-icons/fa";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofiles } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {<FaHome style={{color: "white"}}/>}
          </Link>
        </div>
      </header>
      {/* <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div> */}
      
    </>
  );
};

export default Headermain;
