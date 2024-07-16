import DogCard from "../../component/dog/DogCard";
import BookingRequestCard from "../../component/ManageBooking/BookingRequestCard";
import NotificationCard from "../../component/Notification/NotificationCard";
import NotificationProfile from "../../component/Notification/NotificationProfile";
import axios from "axios";
import { baseURL } from "../../../constant/constant";
import { useState, useEffect } from "react";
axios.defaults.baseURL = "http://localhost:8082/api";
axios.defaults.withCredentials = false;

function Home() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetchDog();
    getUser();
  }, []);

  async function fetchDog(e) {
    try {
      e.preventDefault();
      const data = await axios.get(`${baseURL}/getDogs`);
      setDogs((prev) => data.data.dogs.content);
      console.log(data.data.dogs.content);
    } catch (err) {
      console.log(err);
    }

    return (
      <>
        <h1>This is home page.</h1>
        <button onClick={() => fetchDog()}>reload</button>
        <div className="flex flex-wrap flex-col-auto justify">
          {dogs.map((dog, i) => {
            <DogCard key={i} dog={{ dog }} />;
          })}
        </div>
        <p>{JSON.stringify(dogs)}</p>
      </>
    );
  }
}
export default Home;
