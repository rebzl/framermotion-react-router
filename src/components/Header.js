import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row space-between">
          <div className="logo">
            <Link to="../">JIMI FERMIN</Link>
          </div>
          <div className="menu">MENU</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
