import BookingRequestCard from "../../component/ManageBooking/BookingRequestCard";
import Calendar from "../../component/Calendar/Calendar";
export default function Booking() {
  return (
    <>
      <h2>Confirm Booking</h2>
      <div className="w-full h-auto ">
        <Calendar />
      </div>
      <h2>Booking Request</h2>
      <div className="w-full block">
        <BookingRequestCard />
        <BookingRequestCard />
        <BookingRequestCard />
      </div>
    </>
  );
}
