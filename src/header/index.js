import React from "react";
import "./style.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Headermain = () => {
  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {<FaHome className="icon"/>}
          </Link>
        </div>
      </header>
    </>
  );
};

export default Headermain;
