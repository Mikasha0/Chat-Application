import React from "react";
import "./Chats.css";

export default function Chats() {
  return (
    <div className="chats">
      <div className="userChat">
        <img className="circular-image" src="../Image/img1.jpg" />
      </div>
      <div className="userChatInfo">
        <span>Abinash</span>
        <p>Let's chat</p>
      </div>
    </div>
  );
}
