import { NavLink } from "react-router-dom";
import NavBar from "../navBar/NavBar";
function Header() {
  return (
    <>
      <div className="sticky inset-x-0 top-0 bg-white ">
        {/*---sign in sign up top bar---*/}
        <div className="block top-2 text-right p-1 inset-x-0 ">
          <NavLink to="/login" className="mr-2">
            Sign in
          </NavLink>
          <NavLink to="/signup">Sign up</NavLink>
        </div>
        {/*---icon DogGo search bar---*/}
        <div className="flex flex-wrap space-x-auto pb-4 inset-x-0  justify-start ">
          <div id="headerLeftDiv" className="flex items-end">
            <img src="" alt="dog photo" className="p-2 h-24 w-24  "></img>
            <h1 className="p-2 text-6xl text-orange-500 font-bold">
              <NavLink to="/">DogGo!</NavLink>
            </h1>
          </div>

          <div id="headerRightDiv" className="items-end flex">
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
