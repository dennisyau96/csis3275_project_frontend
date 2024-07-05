import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="flex inset-x-0 border-b-2 justify-end ">
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
      </div>
    </>
  );
}

export default NavBar;
