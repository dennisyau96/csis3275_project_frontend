import BookingRequestCard from "../../component/ManageBooking/BookingRequestCard";
import Calendar from "../../component/Calendar/Calendar";
import ConfirmedBookingCard from "../../component/ManageBooking/ConfirmedBookingCard";
import VacantBooking from "../../component/ManageBooking/VacantBooking";
import { baseURL } from "../../../constant/constant";
import { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import toast from "react-hot-toast";

import axios from "axios";
export default function Booking() {
  //for initial loading
  const [userType, setUserType] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [modal, setModal] = useState(false);
  const [myDogs, setMyDogs] = useState([]);
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const token2 = sessionStorage.getItem("token");

  // for adding dog
  const [dogName, setDogName] = useState();
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [pickUp, setPickUp] = useState();
  const [duration, setDuration] = useState();
  const [dogId, setDogId] = useState();

  useEffect(() => {
    displayDog();
    const userDataJSON = JSON.parse(sessionStorage.getItem("userData"));
    if (userDataJSON) {
      setUserType(userDataJSON.data.role);
    } else {
      setUserType(userDataJSON.data.role);
    }
  }, []);

  function toggle() {
    setModal((prev) => !modal);
  }
  async function displayDog() {
    try {
      const ownerDog = await axios.get(baseURL + "/get-my-dogs", {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + token2,
          Authorization1: "Bearer " + token2,
        },
      });

      if (ownerDog.data.success == true) {
        toast(ownerDog.data.message);
        setMyDogs((prev) => ownerDog.data.data.dogs.content);
        localStorage.setItem(
          "myDogs",
          JSON.stringify(ownerDog.data.data.dogs.content)
        );

        // window.location.reload();
      } else {
        toast(ownerDog.data.message);
        setMyDogs([]);
        // navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function addTimeSlot() {
    setDogId();
    const addTimeSlot = await axios.post(baseURL + "/addTimeslot", {
      dog_id: dogId,
      timeslots: [
        {
          date: date,
          start_time: startTime,
          end_time: endTime,
          pickUp: pickUp,
        },
      ],
    });
  }

  function clear() {
    setDogId();
    setDogName();
    setDate();
    setDuration();
    setEndTime();
    setPickUp();
    setStartTime();
  }
  return (
    <>
      <div className="m-2">
        <button
          onClick={() => setModal((prev) => !prev)}
          className="bg-white border-black border-2 p-2 rounded-md hover:bg-gray-300 active:bg-gray-400"
        >
          Add Booking
        </button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add a timeslot</ModalHeader>
          <ModalBody className="grid grid-cols-2 m-1 gap-2">
            <label>Dog:</label>
            <select
              onChange={(e) => {
                setDogId(e.target.value);
              }}
            >
              {myDogs.map((dog, id) => (
                <option key={id} value={dog.id}>
                  {dog.name}
                </option>
              ))}
            </select>
            <label>Date:</label>
            <input
              className="border-black border-1 rounded-sm"
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            ></input>
            <label>Start time:</label>
            <input
              className="border-black border-1 rounded-sm"
              type="time"
              onChange={(e) => {
                setStartTime(e.target.value);
              }}
            ></input>
            <label>End Time:</label>
            <input
              className="border-black border-1 rounded-sm"
              onChange={(e) => {
                setEndTime(e.target.value);
              }}
            ></input>
            <label>Pick-up Location:</label>
            <input
              className="border-black border-1 rounded-sm"
              type="text"
              onChange={(e) => {
                setPickUp(e.target.value);
              }}
            ></input>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => addTimeSlot()}>Add Timeslot</Button>{" "}
            <Button
              onClick={() => {
                clear();
                toggle();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="w-full h-auto bg-red-100 m-2 p-2 rounded-md">
          <h2>Vacant Booking</h2>
          {myDogs.map((dog, id) => {
            <VacantBooking dog={dog} />;
          })}
        </div>

        <div className="w-full block bg-blue-100 m-2 p-2 rounded-md">
          <h2>Booking Request</h2>

          <BookingRequestCard />
          <BookingRequestCard />
          <BookingRequestCard />
        </div>

        <div className="w-full h-auto  bg-yellow-100 m-2 p-2 rounded-md">
          <h2>Confirmed Booking</h2>

          <ConfirmedBookingCard />
          <ConfirmedBookingCard />
          <ConfirmedBookingCard />
        </div>
      </div>
    </>
  );
}
