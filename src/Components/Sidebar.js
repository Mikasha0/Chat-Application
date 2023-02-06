import React from "react";
import "./Sidebar.css";
import Navbar from "./Navbar";
import Search from "./Search";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
    </div>
  );
}
