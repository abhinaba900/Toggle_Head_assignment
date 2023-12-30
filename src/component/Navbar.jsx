import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import '../App.css';
function Navbar() {
  return (
    <div className="navbar">
      <h3 className="nav-text">
        Qualifications
        <RiArrowDropDownLine />
      </h3>
      <h3 className="nav-text">
        Organizations
        <RiArrowDropDownLine />
      </h3>
      <h3 className="nav-text">
        Research & Analysis
        <RiArrowDropDownLine />
      </h3>
      <h3 className="nav-text">
        Lorem ipsum
        <RiArrowDropDownLine />
      </h3>
      <h3 className="nav-text">
        Lorem ipsum
        <RiArrowDropDownLine />
      </h3>
    </div>
  );
}

export default Navbar;
