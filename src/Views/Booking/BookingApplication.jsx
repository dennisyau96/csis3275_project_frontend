export default function BookingApplication() {
  return (
    <>
      <h1>This is the Booking Application Page</h1>
      <h2>Time slot available:</h2>
      <div className="w-full h-auto ">
        <Calendar />
      </div>
      <label htmlFor="bookingDateInput">Select Date for Booing</label>
      <input
        type="date"
        className="border-black
            border-1"
      ></input>
      <label htmlFor="bookingTimeInput">Select Time for Booing</label>
      <input
        type="time"
        className="border-black
            border-1"
      ></input>
      <div className="grid grid-row-2">
        <label htmlFor="messageToOwner">Message to owner</label>
        <textarea value={remarks} className="border-black border-2"></textarea>
      </div>
      <button className=" inline bg-orange-400 p-1 w-20 text-center  border-black border-2 shadow-sm  hover:bg-red-200">
        Send Application
      </button>
    </>
  );
}
