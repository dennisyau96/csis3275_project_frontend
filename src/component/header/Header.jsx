import { NavLink, useNavigate } from "react-router-dom";
import NavBar from "../navBar/NavBar";
// import { useContext } from "react";
import React, { Component, useContext, useEffect, useState } from "react";
// import { userContext } from "../../App";
import Forum from "../../Views/Forum/Forum";
function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");
  const [userData, setuserData] = useState();
  const [dogImage, setDogImage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchImage();
    setInterval(() => fetchImage(), 6000); //change the header logo every 6000ms

    const userDataJSON = JSON.parse(sessionStorage.getItem("userData"));
    if (userDataJSON != null && userDataJSON.success == true) {
      if (userDataJSON != null) {
        setLoggedIn((prev) => userDataJSON.success);
        setUsername((prev) => userDataJSON.data.username);
        setUserType((prev) => userDataJSON.data.role);
        setuserData((prev) => userDataJSON);
      }
    } else {
      setLoggedIn(false);
    }
  }, []);

  function signOut() {
    if (window.confirm("Are you sure to sign out?")) {
      sessionStorage.clear();
      localStorage.clear();
      setLoggedIn(false);
      navigate("/");
      window.location.reload();
    } else {
      navigate(0);
    }
  }

  async function fetchImage() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const json = await response.json();
      setDogImage(json.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div
        className="sticky inset-x-0 top-0 bg-white shadow-lg  "
        id="headerDiv"
      >
        {/*---sign in sign up top bar---*/}
        <div className="block top-2 text-right p-4 inset-x-0   ">
          {loggedIn ? (
            <>
              <NavLink
                to="/forum"
                className="p-2 mr-5 border-2 hover:bg-orange-400 "
              >
                Forum
              </NavLink>

              <NavLink
                to="/login"
                className="p-2 mr-5 border-2 hover:bg-orange-400 "
                onClick={() => signOut()}
              >
                Sign out
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="p-2 mr-1 border-2 hover:bg-orange-400 "
              >
                Sign in
              </NavLink>
              <NavLink
                to="/signup"
                className="p-2 mr-1 border-2 hover:bg-orange-400"
              >
                Sign up
              </NavLink>
            </>
          )}
        </div>

        {/*---icon DogGo search bar---*/}
        <div className="  flex flex-wrap gap-auto pb-2 inset-x-0 items-center ">
          <div id="headerLeftDiv" className="col flex flex-auto ">
            <img
              src={dogImage}
              alt="dog photo"
              className="p-2 h-36 w-36 rounded-3xl transition-all duration-1000"
            ></img>
            <h1 className="p-2 text-6xl text-orange-500 font-bold cursor-pointer hover:text-7xl hover:text-orange-700">
              <NavLink to="/">DogGo!</NavLink>
            </h1>
          </div>

          <div
            id="headerRightDiv"
            className=" flex flex-wrap col justify-content-end mr-2"
          >
            <form className="flex">
              <div className="border-2">
                <input
                  type="search"
                  className=""
                  placeholder="Search..."
                  aria-label="Search"
                />
              </div>
              <button
                className="button bg-gray-200 hover:bg-slate-600 rounded-md p-1 hover:text-white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <NavBar />
      </div>
      {/* </userContext.Consumer> */}
    </>
  );
}
export default Header;
