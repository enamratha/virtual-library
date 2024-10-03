import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookCardTemplate = styled.div`
  background-color: #e8eced;
  background-size: cover;
  width: 100%;
  height: 30vh;
  color: #011a07;
  padding: 10px;
  border: 3px solid #000000;
  font-family: "roboto";
`;

export const BookLink = styled(Link)`
  width: 25%;
  margin: 15px;
  text-decoration: none;
`;
