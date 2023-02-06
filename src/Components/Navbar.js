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
        <img
          className="circular-image"
          src="../Image/img1.jpg"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            overflow: "hidden",
            marginLeft: "0.3rem",
          }}
        />
        <span>user</span>
        <button className="btn">Logout</button>
      </div>
    </div>
  );
}
