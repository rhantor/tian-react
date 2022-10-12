/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useRef, useState } from "react";
import { logo } from "../../../constants/images";
import { Link } from "react-router-dom";

const Header = () => {
  // state management
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileMenuStyle = useRef();
  const scrollNav = useRef(null);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  useEffect(() => {
    mobileMenu
      ? mobileMenuStyle.current.classList.add("active")
      : mobileMenuStyle.current.classList.remove("active");
    console.log("rendered");

    // scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 150;
      scrollNav.current.classList.toggle("navbar-fixed", windowScroll);
    });
  }, [mobileMenu]);
  // Menu Data
  const menuItem = ["Home", "About", "Portfolio", "Blog", "Contact"];
  const switchPages = (item) => {
    let menuItem = item.toLowerCase();

    if (menuItem === "home") {
      return (menuItem = "");
    } else {
      return "/" + item.toLowerCase();
    }
  };

  
  function scrollTopFunc() {
    document.documentElement.scrollTop = 0;
    setMobileMenu(!mobileMenu);
  }

  return (
    <>
      <header className="header" ref={scrollNav}>
        <div className="container">
          <div className="main-header">
            <div className="site-logo">
              <Link to={"/react-templates/tian"} onClick={scrollTopFunc}>
                <img src={logo} alt="tian" />
              </Link>
            </div>

            <nav id="menu-wrap" className="menu">
              <ul className="main-menu">
                {menuItem.map((item, index) => (
                  <li key={index * (Math.random() * 1)}>
                    <Link
                      to={`/react-templates/tian${switchPages(item)}`}
                      onClick={scrollTopFunc}
                    >
                      {" "}
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div id="mobile_menu">
              <div
                className="mobile_menu_icon"
                onClick={handleMobileMenu}
              ></div>
              <ul className="mobile_nav" ref={mobileMenuStyle}>
                {menuItem.map((item, index) => (
                  <li key={index * (Math.random() * 1)}>
                    <Link
                      to={`/react-templates/tian${switchPages(item)}`}
                      onClick={scrollTopFunc}
                    >
                      {" "}
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
