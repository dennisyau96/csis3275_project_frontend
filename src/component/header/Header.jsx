import { NavLink } from "react-router-dom";
import NavBar from "../navBar/NavBar";
function Header() {
  return (
    <>
      <div className="sticky inset-x-0 top-0 bg-white shadow-lg bg-image ">
        {/*---sign in sign up top bar---*/}
        <div className="block top-2 text-right p-4 inset-x-0   ">
          <NavLink
            to="/login"
            className="p-2 mr-5 border-2 hover:bg-orange-400 "
          >
            Sign in
          </NavLink>
          <NavLink to="/signup" className="p-2 border-2 hover:bg-orange-400">
            Sign up
          </NavLink>
          <NavLink to="/admin" className="p-2 border-2 hover:bg-orange-400">
            admin
          </NavLink>
        </div>

        {/*---icon DogGo search bar---*/}
        <div className="  flex flex-wrap gap-auto pb-2 inset-x-0 items-center ">
          <div id="headerLeftDiv" className="col flex flex-auto">
            <img src="" alt="dog photo" className="p-2 h-24 w-24"></img>
            <h1 className="p-2 text-6xl text-orange-500 font-bold cursor-pointer">
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
    </>
  );
}
export default Header;
