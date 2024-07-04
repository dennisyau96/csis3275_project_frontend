import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
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
                Home{"  "}
              </NavLink>
              <NavLink className="nav-link" to="/notification">
                Notification{"  "}
              </NavLink>
              <NavLink className="nav-link" to="/booking">
                Manage Booking{"  "}
              </NavLink>
              <NavLink className="nav-link disabled" to="/profile">
                Profile{"  "}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
