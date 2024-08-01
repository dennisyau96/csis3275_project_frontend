import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="bg-white text-black  h-40 bottom-0 ">
        <div className="container fluid flex flex-col gap-4 justify-between items-center">
          <div className="">
            <Link to="/" className="text-xl font-bold ">
              DogGo
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/about" className="hover:text-gray-400 underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-400 underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400 underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-sm bottom-2">
            &copy; {new Date().getFullYear()} DogGo Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
