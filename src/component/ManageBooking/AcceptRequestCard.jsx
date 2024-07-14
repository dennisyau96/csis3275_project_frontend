import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";
export default function AcceptRequestCard() {
  const navigate = useNavigate();
  return (
    <>
      <div className="acceptRequestCard" id="acceptRequestModalLabel">
        <h1 className="font-bold text-2xl text-orange-400 mx-44 mt-3 block ">
          Accept Request
        </h1>
        <div className="p-2 ml-2.5 block">
          <p>Dog Name:</p>
          <p>Renter&apos;s Name:</p>
          <div>
            <label htmlFor="RentalDateInput">Rental Date: </label>
            <input type="date"></input>
          </div>
          <label htmlFor="RentalTimeInput">Rental Start Time: </label>
          <input type="time"></input>
          <div>
            <label htmlFor="RentalDateInput">Rental Duration: </label>
            <input type="number" min="1" max="6" value={0}></input>
          </div>
          <label htmlFor="RentalTimeInput">Pick-Up Location: </label>
          <input type="text"></input>
          <p className="text-sm text-red-500">
            Please make sure to chat with your renter before accepting request,
            booking details cannot be changed after confirmed.
          </p>
        </div>
        <div className=" grid grid-cols-2 space-x-3 justify-items-center mx-20 mt-4">
          <button className=" inline bg-red-400 p-1 w-auto text-center border-black border-2 shadow-sm hover:bg-blue-300">
            <Link to="/error">Confirm Booking</Link>
          </button>
          <button
            className=" inline bg-orange-400 p-1 w-20 text-center  border-black border-2 shadow-sm  hover:bg-red-200"
            onClick={() => {
              navigate(-0);
            }}
          >
            <Link>Cancel</Link>
          </button>
        </div>
      </div>
    </>
  );
}
