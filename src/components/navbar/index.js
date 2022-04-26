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
            <img
              className="logo-text"
              src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/277730334_102251775781603_2943809287366827913_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=73z0x8kSZI0AX_XnLGM&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&oh=00_AT_tvqDvstku3V0wzMw_lRvA8aTzDRRe_vl1BlFHrjZmDg&oe=626BBBF7"
              alt="logo"
              height="70px"
            />
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
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};
