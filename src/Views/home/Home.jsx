import DogCard from "../../component/dog/DogCard";
import BookingRequestCard from "../../component/ManageBooking/BookingRequestCard";
import NotificationCard from "../../component/Notification/NotificationCard";
import NotificationProfile from "../../component/Notification/NotificationProfile";
import axios from "axios";
import { baseURL } from "../../../constant/constant";
import { useState, useEffect } from "react";
import { json } from "react-router-dom";

function Home() {
  const [dogs, setDogs] = useState(() => {
    const data = window.localStorage.getItem("dogs");
    return data ? JSON.parse(data) : [];
  });

  async function fetchData() {
    const res = await axios.get(baseURL + "/getDogs");
    localStorage.setItem("dogs", JSON.stringify(res.data.data.dogs.content));

    // return JSON.stringify(res);
  }
  useEffect(() => {
    fetchData();
    console.log(dogs);
  }, []);

  return (
    <>
      <h1>This is home page.</h1>
      <div className="flex flex-wrap flex-col-auto justify">
        {/* {dogs.map((dog) => {
          <DogCard dog={dog} />;
        })} */}
        <DogCard dog={{ dog }} />
      </div>
    </>
  );
}
export default Home;
