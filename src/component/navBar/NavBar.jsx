import { Link, NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="flex flex-wrap inset-x-0 border-b-2 justify-end ">
        <NavLink
          className="border-2 px-3 py-1 text-black hover:bg-orange-400 hover:text-white active:bg-orange-400 active:text-white"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="border-2 px-3 py-1 text-black  hover:bg-orange-400 hover:text-white active:bg-orange-400 active:text-white"
          to="/notification"
        >
          Notification
        </NavLink>
        <NavLink
          className="border-2 px-3 py-1 text-black  hover:bg-orange-400 hover:text-white active:bg-orange-400 active:text-white"
          to="/booking"
        >
          Manage Booking
        </NavLink>
        <NavLink
          className="border-2 px-3 py-1 text-black  hover:bg-orange-400 hover:text-white active:bg-orange-400 active:text-white"
          to="/profile"
        >
          Profile
        </NavLink>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" href="#">
                Action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Something else here
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
