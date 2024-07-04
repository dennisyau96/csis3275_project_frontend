import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="">
        <NavLink className="border-2 px-5 py-1" to="/">
          Home
        </NavLink>
        <NavLink className="border-2 px-5 py-1" to="/notification">
          Notification
        </NavLink>
        <NavLink className="border-2 px-5 py-1" to="/booking">
          Manage Booking
        </NavLink>
        <NavLink className="border-2 px-5 py-1" to="/profile">
          Profile
        </NavLink>
      </div>
    </>
  );
}

export default NavBar;
