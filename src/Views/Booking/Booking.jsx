import BookingRequestCard from "../../component/ManageBooking/BookingRequestCard";
import Calendar from "../../component/Calendar/Calendar";
import ConfirmedBookingCard from "../../component/ManageBooking/ConfirmedBookingCard";
import { useState, useEffect } from "react";
export default function Booking() {
  const [userType, setUserType] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const userDataJSON = JSON.parse(sessionStorage.getItem("userData"));
    if (userDataJSON) {
      setUserType(userDataJSON.data.role);
    } else {
      setUserType(userDataJSON.data.role);
    }
  }, []);

  return (
    <>
      {}
      <h2>Confirmed Booking</h2>
      <div className="w-full h-auto ">
        <ConfirmedBookingCard />
        <ConfirmedBookingCard />
        <ConfirmedBookingCard />
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
