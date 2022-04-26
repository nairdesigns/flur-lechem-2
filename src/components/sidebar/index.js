import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarRoute,
  SideBtnWrap,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap></SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
