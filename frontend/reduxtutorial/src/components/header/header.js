import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Expenser <i className="far fa-credit-card"></i>
        </div>
        <div className="header-btn">
          <a
            href="https://github.com/sadiuchiha/"
            target="_blank"
            rel="noopener noreferrer"
          > 
            <i className="fab fa-github"></i>
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
