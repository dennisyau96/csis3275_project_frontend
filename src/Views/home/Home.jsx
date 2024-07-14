import DogCard from "../../component/dog/DogCard";
import BookingRequestCard from "../../component/ManageBooking/BookingRequestCard";
import NotificationCard from "../../component/Notification/NotificationCard";
import NotificationProfile from "../../component/Notification/NotificationProfile";
import axios from "axios";
import { baseURL } from "../../../constant/constant";
import { useState, useEffect } from "react";

function Home() {
  const [dogs, setDogs] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState();
  const [userType, setUserName] = useState();
  // async function fetchData() {
  //   const dogData = await axios.get(baseURL + "/getDogs");
  //   localStorage.setItem(
  //     "dogsString",
  //     JSON.stringify(dogData.data.data.dogs.content)
  //   );
  //   const dogDataString = JSON.stringify(dogData.data.data.dogs.content);
  //   console.log(dogDataString);
  //   setDogs(JSON.parse(localStorage.getItem("dogsString")));
  // }

  // useEffect(() => {
  //   fetchData;
  // }, []);

  // async function fetchDogs() {
  //   const dogData = await axios.get(baseURL + "/getDogs");
  //   setDogs(dogData.data.dogs.content);
  // }
  useEffect(() => {
    // fetchDogs();
  });

  return (
    <>
      <h1>This is home page.</h1>
      {/* <button onClick={() => fetchData()}>reload</button> */}
      <div className="flex flex-wrap flex-col-auto justify">
        {/* {dogs.map((dog, i) => {
          <DogCard key={i} dog={{ dog }} />;
        })} */}
      </div>
      {/* <p>{JSON.stringify(dogs)}</p> */}
    </>
  );
}
export default Home;
