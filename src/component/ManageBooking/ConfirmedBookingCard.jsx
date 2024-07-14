import { useState } from "react";
import LeaveReviewCard from "../Review/LeaveReviewCard";

function ConfirmedBookingCard() {
  const [openReview, setOpenReview] = useState(false); 
  return (
    <>
      <div className=" flex w-11/12 h-48 m-4 bg-white rounded-md border-2 border-white">
        <div className="h-40 w-40 p-1 float-left">
          <img src="" alt="Dog Photo" className="w-full h-full" />
        </div>
        <div className="p-2 w-3/5">
          <p>Dog's Name:</p>
          <p>Renter's Name:</p>
          <p>Rental Date:</p>
          <p>Rental Start Time:</p>
          <p>Rental Duration:</p>
          <p>Pick Up Location:</p>
        </div>
        <div className="grid grid-cols-2 space-x-3 float-right mx-2 mt-32">
          <button className=" inline bg-red-400 p-1 w-35 h-10 text-center border-black border-2 shadow-sm hover:bg-blue-300"
          onClick={() => setOpenReview((prev) => !prev)}>
            Leave Review
          </button>
          <button
            className=" inline bg-orange-400 p-1 w-20 h-10 text-center border-black border-2 shadow-sm  hover:bg-red-200"
          >
            Chat
          </button>
        </div>
      </div>
      {openReview && <LeaveReviewCard/>}
    </>
  );
}

export default ConfirmedBookingCard;