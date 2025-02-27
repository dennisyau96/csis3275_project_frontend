import AcceptRequestCard from "./AcceptRequestCard";
import { Link } from "react-router-dom";
import axios from "axios";

import { useState } from "react";

function BookingRequestCard({ booking }) {
  const [openAcceptRequest, setOpenAcceptRequest] = useState(false);
  return (
    <>
      <div className="w-10/12 h-auto m-4 p-2 bg-white rounded-md border-2 border-white grid hover:border-black hover:border-4 ">
        <div className="h-40 w-40 p-1 float-left">
          <img src="" alt="Dog Photo" className="w-full h-full" />
        </div>
        <div className="p-2">
          <p>Booking Request By:</p>
          <p></p>
          <p>Booking Request Date and Time:</p>
          <p>{booking && booking.booking_date}</p>
          <p>Location:</p>
          <p>{booking && booking.location}</p>
          <p>complete:</p>
          <p>{booking && booking.booking_complete}</p>
        </div>
        <div className=" grid grid-cols-2 space-x-3 float-right m-4">
          <button className=" inline bg-red-400 p-1 w-30 text-center border-black border-2 shadow-sm hover:bg-blue-300">
            Chat
          </button>
          <button
            className=" inline bg-orange-400 p-1 w-30 text-center border-black border-2 shadow-sm  hover:bg-red-200"
            onClick={() => setOpenAcceptRequest((prev) => !prev)}
          >
            Accept
          </button>
        </div>
      </div>

      {openAcceptRequest && <AcceptRequestCard />}
    </>
  );
}

export default BookingRequestCard;
