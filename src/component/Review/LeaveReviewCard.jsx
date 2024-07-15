import Rating from "./Rating";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LeaveReviewCard (){ 
    const [comments, setComments] = useState('')
    const [rating, setRating] = useState(0)
    const navigate = useNavigate();
    return(
        <>
        <div className= "leaveReviewCard">
        <div className= "bg-orange-400 w-full h-12 p-2.5">
            <h1 className= "ml-36 taxt-lg">Leave a Review</h1>    
        </div>
        <div className="p-4">
            <h5 className="font-bold inline">Overall Experience: </h5>
            <Rating rating={rating} setRating={setRating} />
            <h5 className="font-bold">Comments: </h5>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="border-black border-2 block w-11/12"
            ></textarea>
            <div className="ml-28">
            <button className=" mt-3 bg-orange-400 p-1 w-20 text-center  border-black border-2 shadow-sm  hover:bg-red-200">
              Post
            </button>
            <button
            className=" mt-3 ml-5 bg-orange-400 p-1 w-20 text-center  border-black border-2 shadow-sm  hover:bg-red-200"
            onClick={() => {
              navigate(-0);
            }}
          >
            <Link>Cancel</Link>
          </button>
          </div>
        </div>
        </div>
        </>
    ); 
}