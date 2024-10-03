import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h1>Oops! we cannot find what you are looking for :(</h1>
    <p>you can find a lot on home</p>
    <Link to="/">Home</Link>
  </div>
);

export default NotFound;
