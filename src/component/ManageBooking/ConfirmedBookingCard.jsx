import { useState } from "react";
import LeaveReviewCard from "../Review/LeaveReviewCard";

function ConfirmedBookingCard() {
  const [openReview, setOpenReview] = useState(false);
  return (
    <>
      <div className=" grid w-10/12 h-auto m-4 p-2 bg-white rounded-md border-2 border-white">
        <div className="h-40 w-40 p-1 float-left">
          <img src="" alt="Dog Photo" className="w-full h-full" />
        </div>
        <div className="p-2 w-4/5 grid grid-cols-2">
          <p className="text-right">Dog&apos;s Name:</p>
          <p></p>
          <p className="text-right">Renter&apos;s Name:</p>
          <p></p>
          <p className="text-right">Rental Date:</p>
          <p></p>
          <p className="text-right">Rental Start Time:</p>
          <p></p>
          <p className="text-right">Rental Duration:</p>
          <p></p>
          <p className="text-right"> Pick Up Location:</p>
          <p></p>
        </div>
        <div className="grid grid-cols-2 space-x-3 float-right mx-2 mt-auto h-auto">
          <button
            className="  bg-red-400 p-1 w-auto h-10  border-black border-2 shadow-sm   hover:bg-blue-300 text-center "
            onClick={() => setOpenReview((prev) => !prev)}
          >
            Comment
          </button>
          <button className="  bg-orange-400 p-1 w-auto h-10  border-black border-2 shadow-sm  hover:bg-red-200 text-center">
            Chat
          </button>
        </div>
      </div>
      {openReview && <LeaveReviewCard />}
    </>
  );
}

export default ConfirmedBookingCard;
