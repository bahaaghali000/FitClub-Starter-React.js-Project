import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setToggle(false);
  //   }, 5000);
  // }, [toggle]);
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <ul className="header-menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#programs">Programs</a>
        </li>
        <li>
          <a href="#reasons">Why us</a>
        </li>
        <li>
          <a href="#plans">Plans</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      {toggle ? (
        ""
      ) : (
        <AiOutlineMenu
          className="toggle-menu"
          onClick={() => setToggle(true)}
        />
      )}

      {toggle && (
        <div>
          {toggle && (
            <AiOutlineClose
              className="cancel-toggle"
              onClick={() => setToggle(false)}
            />
          )}

          <ul className="header-menu-toggle scale-up-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#programs">Programs</a>
            </li>
            <li>
              <a href="#reasons">Why us</a>
            </li>
            <li>
              <a href="#plans">Plans</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
