import { useEffect, useState } from "react";
import Requested from "./Request";
import { useNavigate } from "react-router-dom";
export default function RenterBooking() {
  const newBookingSS = JSON.parse(sessionStorage.getItem("newBooking"));
  const [newBooking, setNewBooking] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    newBookingSS && setNewBooking((prev) => newBookingSS);
    Navigate("#");
  }, []);

  return (
    <>
      <div className="h-96">
        <h1>Renter booking page</h1>
        {/* <Requested booking={newBooking} /> */}
      </div>
    </>
  );
}
