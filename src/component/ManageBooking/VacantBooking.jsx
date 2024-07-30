import { useState } from "react";
import { json } from "react-router-dom";
// import LeaveReviewCard from "../Review/LeaveReviewCard";

function VacantBooking({ timeslot }) {
  const [openReview, setOpenReview] = useState(false);
  const [myDogs, setMyDogs] = useState(
    JSON.parse(localStorage.getItem("myDogs"))
  );
  return (
    <>
      <div className=" grid w-10/12 h-auto m-4 p-2 bg-white rounded-md border-2 border-white shadow-xl hover:border-black hover:border-4 ">
        <div className="p-2 w-full grid grid-cols-6 text-right gap-1">
          <div className="col-span-3">Rental Date:</div>
          <input
            className="col-span-3 border-2 rounded"
            type="text"
            value={timeslot.date}
          >
            {}
          </input>

          <div className="col-span-3">Start Time:</div>
          <input
            className="col-span-3 border-2 rounded"
            type="text"
            value={timeslot.start_time}
          ></input>

          <div className="col-span-3">End Time:</div>
          <input
            className="col-span-3 border-2 rounded"
            type="text"
            value={timeslot.end_time}
          ></input>
          {/* 
{/* 
          <div className="col-span-3">Rental Duration:</div>
          <input
            className="col-span-3 border-2 rounded"
            type="text"
            value={timeslot.start_time}
          ></input> */}

          <div className="col-span-3">Pick Up Location:</div>
          <input
            className="col-span-3 border-2 rounded"
            type="text"
            value={timeslot.pickup}
          ></input>
        </div>
        <div className="grid grid-cols-2 space-x-3 float-right mx-2 mt-auto h-auto">
          <button
            className="  bg-red-400 p-1 w-auto h-10  border-black border-2 shadow-sm   hover:bg-blue-300 text-center "
            onClick={() => setOpenReview((prev) => !prev)}
          >
            Update
          </button>
          <button className="  bg-orange-400 p-1 w-auto h-10  border-black border-2 shadow-sm  hover:bg-red-200 text-center">
            Cancel
          </button>
        </div>
      </div>
      {/* {openReview && <LeaveReviewCard />} */}
    </>
  );
}

export default VacantBooking;
