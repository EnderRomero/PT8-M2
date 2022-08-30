import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img src={Logo} alt="" />
      <h1 class="navbar-brand" href="#">HENRY</h1>

      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
