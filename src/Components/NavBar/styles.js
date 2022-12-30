import { NavLink as LinkNavigator } from "react-router-dom";
import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

export const Nav = styled.nav`
  align-items: center;
  background-color: #fcfcfc;
  border-top: 1px solid #0e0e0e;
  border-radius: 3px;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`;

export const Link = styled(LinkNavigator)`
  align-items: center;
  color: #c3c3c3;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &:hover {
    color: #4d4a4a;
  }
  &[aria-current] {
    color: #000;
    &:after {
      ${fadeIn({ time: "1s" })};
      content: ".";
      position: absolute;
      bottom: 5px;
      font-size: 30px;
      font-weight: bold;
      line-height: 20px;
    }
  }
`;
