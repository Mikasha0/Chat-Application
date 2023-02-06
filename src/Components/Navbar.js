import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo  align-items-center">
        <img src="../Image/CircleConnect.png" alt="logo" />
        <span>CircleConnect</span>
      </div>
      <div className="user align-items-center">
        <img className="circular-image" src="../Image/img1.jpg" />
        <span>user</span>
        <button className="btn">Logout</button>
      </div>
    </div>
  );
}
