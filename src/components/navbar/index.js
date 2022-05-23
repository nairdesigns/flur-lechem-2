import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  HamburgerButton,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import "./../../App.css";
import logo from "../../images/flur-lechem-logo.jpg";
import logo2 from "../../images/logo.jpg";
export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">
            <img className="logo-text" src={logo2} alt="logo" height="70px" />
            <h1 className="logo-text">
              <img src={logo} height="60px" alt="logo" />
            </h1>
          </NavLogo>
          <HamburgerButton onClick={toggle}>
            <FaBars />
          </HamburgerButton>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                onClick={() => {
                  window.location.href = "/contact";
                }}
                to=""
              >
                Contact Us
              </NavLinks>{" "}
            </NavItem>
            <NavItem>
              <NavLinks
                onClick={() => {
                  window.location.href = "/posts";
                }}
                to=""
              >
                Posts
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Menu">Menu</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="location">Location</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};
