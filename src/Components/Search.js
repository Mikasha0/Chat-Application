import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img className="circular-image" src="../Image/img1.jpg" />
      </div>
      <div className="userChatInfo">
        <span>Abinash</span>
        {/* <p>Let's chat</p> */}
      </div>
    </div>
  );
}
