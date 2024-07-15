import BookingRequestCard from "../../component/ManageBooking/BookingRequestCard";
import Calendar from "../../component/Calendar/Calendar";
import ConfirmedBookingCard from "../../component/ManageBooking/ConfirmedBookingCard";

export default function Booking() {
  return (
    <>
      <h2>Confirmed Booking</h2>
      <div className="w-full h-auto ">
        <ConfirmedBookingCard/>
        <ConfirmedBookingCard/>
        <ConfirmedBookingCard/>
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
