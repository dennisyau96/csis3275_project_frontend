// import { Link } from "react-router-dom";

function DogCard() {
  return (
    <>
      <div className="border-2 m-4 w-60 hover:w-72 hover:transition-all rounded-md shadow-md bg-white border-black">
        <div className="w-full h-36 p-1 ">
          <img src="" alt="Dog Photo" className="w-full h-full " />
        </div>

        <div className="p-2">
          <h5 className="text-lg font-bold">Dog name</h5>
          <div className="h-20">This dog is a good dog.</div>
          <div className=" grid grid-cols-2 space-x-3 justify-items-center">
            <button className=" inline bg-orange-400 p-1 w-auto text-center border-black border-2 shadow-sm hover:bg-blue-300">
              Details
            </button>
            <button className=" inline bg-orange-400 p-1 w-20 text-center  border-black border-2 shadow-sm  hover:bg-red-200">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default DogCard;
