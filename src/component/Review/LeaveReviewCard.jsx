import Rating from "./Rating";

export default function LeaveReviewCard (){ 
    return(
        <>
        <div className= "leaveReviewCard">
        <div className= "bg-orange-400 w-full h-20">
            <h1 className= "m-auto">Leave a Review</h1>
        </div>
        <div className="m-4 p-4">
            <h5 className="font-bold inline">Overall Experience: </h5>
            <Rating/>
            <h5 className="font-bold">Comments</h5>
            <textarea
              value={remarks}
              className="border-black border-2"
            ></textarea>
            <button className=" inline bg-orange-400 p-1 w-20 text-center  border-black border-2 shadow-sm  hover:bg-red-200">
              Post
            </button>
        </div>
        </div>
        </>
    ); 
}