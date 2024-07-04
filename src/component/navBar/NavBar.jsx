import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav className="navbar">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login">Login</NavLink>
        </li>{" "}
        <li className="nav-item">
          <NavLink to="/signup">Sign Up</NavLink>
        </li>{" "}
        <li className="nav-item">
          <NavLink to="/">About</NavLink>
        </li>
      </nav>
    </>
  );
}

export default NavBar;
