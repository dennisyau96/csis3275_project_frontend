import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="bg-white text-black  h-40 bottom-0 ">
        <div className="container fluid flex flex-col  justify-between items-center">
          <div className="">
            <a href="/" className="text-lg font-bold">
              DogGo
            </a>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/about" className="hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400">
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
