import { Link } from "react-router-dom";
import { Navbar, NavLink, Name } from "./styledCompnents";

const Header = () => (
  <Navbar>
    <div>
      <Name>VIRTUAL LIBRARY</Name>
    </div>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/saved-books">Saved Books</NavLink>
    </div>
  </Navbar>
);

export default Header;
