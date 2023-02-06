import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" />
      </div>
      <div className="userChat">
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
      </div>
    </div>
  );
}
