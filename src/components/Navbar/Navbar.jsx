import { useState, useEffect, useRef } from "react";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import "./Navbar.css";

const Navbar = () => {
  // ref added to the dropdown menu to define the click away event
  const ref = useRef();

  //   state used for the mobile menu being open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   click handler to open/close mobile menu
  const handleClick = () => {
    setIsMenuOpen(isMenuOpen === false ? "open" : false);
  };

  //   click outside dropdown menu closes the menu
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

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

        {/* mobile menu button */}
        <div className="toggle-btn" onClick={handleClick}>
          {isMenuOpen === false ? <FaBars /> : <AiOutlineClose />}
        </div>


        {/* mobile dropdown menu */}
        <div className={`dropdown-menu ${isMenuOpen}`} ref={ref}>
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
