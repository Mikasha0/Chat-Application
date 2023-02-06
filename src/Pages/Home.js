import React from "react";
import "./Home.css";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";

export default function Home() {
  return (
    <div className="home">
      <div className="container g-0">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
