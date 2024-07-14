import AcceptRequestCard from "./AcceptRequestCard";
import { Link } from "react-router-dom";
import axios from "axios";

import { useState } from "react";

function BookingRequestCard() {
  const [openAcceptRequest, setOpenAcceptRequest] = useState(false);
  return (
    <>
      <div className="w-11/12 h-48 m-4 bg-white rounded-md border-2 border-white">
        <div className="h-40 w-40 p-1 float-left">
          <img src="" alt="Dog Photo" className="w-full h-full" />
        </div>
        <div className="p-2">
          <p>Booking Request By:</p>
          <p>Booking Request Date and Time:</p>
          <p>Renter&apos;s Message:</p>
        </div>
        <div className=" grid grid-cols-2 space-x-3 float-right m-4">
          <button className=" inline bg-red-400 p-1 w-20 text-center border-black border-2 shadow-sm hover:bg-blue-300">
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
