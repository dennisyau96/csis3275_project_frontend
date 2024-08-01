import { Link, NavLink } from "react-router-dom";
import NotificationProfile from "../Notification/NotificationProfile";
import { useEffect, useState } from "react";

function NavBar() {
  const [userType, setUserType] = useState(sessionStorage.getItem("userType"));
  const [openNotification, setOpenNotification] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userDataJSON = JSON.parse(sessionStorage.getItem("userData"));
    if (userDataJSON) {
      setUserType(userDataJSON.data.role);
      sessionStorage.setItem("userType", userType);
      setLoggedIn(true);
    }
  }, []);
  return (
    <>
      <nav className="flex flex-wrap inset-x-0 border-b-2 border-black justify-end container-fluid text-sm right-0  ">
        <NavLink
          className="border-y-2 border-r-2 border-l-2 px-2 py-0.5 hover:bg-orange-400 hover:text-white active:bg-green-400  active:text-white"
          to="/"
        >
          Home
        </NavLink>
        {/* <button
          className="border-y-2 border-l-2  px-2 py-0.5   hover:bg-orange-400 hover:text-white active:bg-green-400 active:text-white"
          onClick={() => {
            setOpenNotification((prev) => !prev);
            window.addEventListener(
              "dblclick",
              setOpenNotification((prev) => false)
            );
          }}
        >
          Notification
        </button> */}

        {!loggedIn ? null : userType == "OWNER" ? (
          <>
            <NavLink
              className="border-y-2 border-x-2  px-2 py-0.5   hover:bg-orange-400 hover:text-white active:bg-green-400 active:text-white"
              to="/booking"
            >
              Manage Booking
            </NavLink>
            <NavLink
              className="border-y-2 border-l-2  px-2 py-0.5   hover:bg-orange-400 hover:text-white active:bg-green-400 active:text-white"
              to="/profile/owner"
            >
              Owner Profile
            </NavLink>
            <NavLink
              className="border-y-2 border-x-2  px-2 py-0.5   hover:bg-orange-400 hover:text-white active:bg-green-400 active:text-white"
              to="/profile/owner/doglist"
            >
              Dog Profiles
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              className="border-y-2 border-x-2  px-2 py-0.5   hover:bg-orange-400 hover:text-white active:bg-green-400 active:text-white"
              to="/renter-booking"
            >
              Requested Booking
            </NavLink>
            <NavLink
              className="border-y-2 border-x-2  px-2 py-0.5   hover:bg-orange-400 hover:text-white active:bg-green-400 active:text-white"
              to="/profile/renter"
            >
              Renter Profile
            </NavLink>
          </>
        )}
      </nav>
      {openNotification ? <NotificationProfile /> : null}
    </>
  );
}

export default NavBar;
