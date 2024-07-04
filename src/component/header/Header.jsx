import NavBar from "../navBar/NavBar";
function Header() {
  return (
    <>
      <div className=" fixed inset-x-0 top-0  ">
        <div className="block top-2 text-right p-1">sign in</div>
        <div className="inline-flex pt-10 justify-between inset-x-0 items-baseline">
          <div id="headerLeftDiv" className="inline-flex start-0 ">
            <img src="" alt="dog photo" className="p-2 h-24 w-24 "></img>
            <h1 className="p-2 ">DogGo!</h1>
          </div>

          <div id="headerRightDiv" className="items-end p-2">
            <form className=" ">
              <div className="input-group w-30">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <button className="" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <NavBar />
    </>
  );
}
export default Header;
