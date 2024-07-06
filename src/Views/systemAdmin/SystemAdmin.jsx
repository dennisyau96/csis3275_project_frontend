import { NavLink } from "react-router-dom";

function SystemAdmin() {
  return (
    <>
      <div id="adminPage" className="flex flex-col-6 m-0">
        <div
          id="adminSideBarDiv"
          className="m-0 bg-orange-100 inline-block w-40 col-span-1"
        >
          <nav id="sidebar" className="m-0">
            <ul className="list-unstyled">
              <li className="border-b-2 w-full text-center hover:bg-orange-500 hover:text-white p-2 ">
                <NavLink to="/">Dashboard</NavLink>
              </li>
              <li className="border-b-2 w-full text-center hover:bg-orange-500 hover:text-white p-2">
                <NavLink to="/about">Posts/Dog Profile</NavLink>
              </li>
              <li className="border-b-2 w-full text-center hover:bg-orange-500 hover:text-white p-2">
                <NavLink to="/about">Media</NavLink>
              </li>
              <li className="border-b-2 w-full text-center hover:bg-orange-500 hover:text-white p-2">
                <NavLink to="/about">Pages</NavLink>
              </li>
              <li className="border-b-2 w-full text-center hover:bg-orange-500 hover:text-white p-2">
                <NavLink to="/about">Comments</NavLink>
              </li>
              <li className="border-b-2 w-full text-center hover:bg-orange-500 hover:text-white p-2">
                <NavLink to="/about">Appearance</NavLink>
              </li>
              <li className="border-b-2 w-full text-center hover:bg-orange-500 hover:text-white p-2">
                <NavLink to="/about">Transactions</NavLink>
              </li>
              <li className="border-b-2 w-full text-center hover:bg-orange-500 hover:text-white p-2l ">
                <NavLink to="/about">Users</NavLink>
              </li>
              <li className="border-b-2 w-full text-center hover:bg-orange-500 hover:text-white p-2">
                <NavLink to="/about">Tools</NavLink>
              </li>
              <li className="border-b-2 w-full text-center hover:bg-orange-500 hover:text-white p-2">
                <NavLink to="/about">Setting</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {/*page content */}
        <div
          id="pageContent"
          className="cursor-pointer col col-span-5 bg-white p-5 "
        >
          <div className="">
            <div className="">+ New</div>
            <div className="">
              Result{" "}
              <select id="dropdown-example" name="dropdown-example">
                <option value="10" defaultChecked>
                  10
                </option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          {/*pagination */}
          <div className="">
            <nav
              aria-label="Page navigation example"
              id="pagination"
              className="bottom-0 left-0"
            >
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" to="#">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" to="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" to="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" to="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" to="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default SystemAdmin;
