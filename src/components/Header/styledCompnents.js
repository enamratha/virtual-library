import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #ffffff;
  opacity: 0.6;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  margin: 5px;
  margin-right: 10px;
  font-family: "roboto";
  color: #000000;
`;

export const Name = styled.h2`
  font-family: "roboto";
  font-weight: 500;
  color: #000000;
`;
