import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "DARKORANGE" : "white")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "white" : "rgb(176, 176, 176);")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background: ${({ primary }) => (primary ? "" : "DARKORANGE")};
    color: ${({ dark }) => (dark ? "white" : "rgb(176, 176, 176);")};
  }
`;

export const ButtonR = styled(LinkS)`
  border-radius: 50px;
  background-color: transparent;
  background: ${({ primary }) => (primary ? "#FF5733" : "white")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "white" : "rgb(176, 176, 176);")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    background: ${({ primary }) =>
      primary ? "rgb(176, 176, 176);" : "DARKORANGE"};
    color: ${({ dark }) => (dark ? "white" : "rgb(176, 176, 176);")};
  }
`;

export const ButtonBasic = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "DARKORANGE" : "white")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "white" : "rgb(176, 176, 176);")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background: ${({ primary }) =>
      primary ? "rgb(176, 176, 176);" : "DARKORANGE"};
    color: ${({ dark }) => (dark ? "white" : "rgb(176, 176, 176);")};
  }
`;

export const ButtonBasicInv = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "DARKORANGE" : "white")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "white" : "rgb(176, 176, 176);")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background: #000;
    color: rgb(176, 176, 176);
  }
`;
