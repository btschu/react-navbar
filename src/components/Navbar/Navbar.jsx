import { useState } from "react";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState("");

  const handleClick = () => {
    setIsMenuOpen(isMenuOpen === "" ? "open" : "");
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <a href="#home">Logo</a>
        </div>
        <ul className="links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
        </ul>
        <a href="#get-started" className="action-btn">
          Get Started
        </a>
        <div className="toggle-btn" onClick={handleClick}>
          {isMenuOpen === "" ? <FaBars /> : <AiOutlineClose/>}
        </div>

        <div className={`dropdown-menu ${isMenuOpen}`} >
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#get-started" className="action-btn-mobile">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
