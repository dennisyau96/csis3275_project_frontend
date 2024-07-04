import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="#">
            Navbar
          </NavLink>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" href="/notification">
                Notification
              </NavLink>
              <NavLink className="nav-link" href="#">
                Pricing
              </NavLink>
              <NavLink className="nav-link disabled" aria-disabled="true">
                Disabled
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
