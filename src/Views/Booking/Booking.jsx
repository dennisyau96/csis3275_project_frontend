import BookingRequestCard from "../../component/ManageBooking/BookingRequestCard";
import Calendar from "../../component/Calendar/Calendar";
import ConfirmedBookingCard from "../../component/ManageBooking/ConfirmedBookingCard";
import VacantBooking from "../../component/ManageBooking/VacantBooking";
import { baseURL } from "../../../constant/constant";
import { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import toast from "react-hot-toast";
import axios, { all } from "axios";

export default function Booking() {
  //for initial loading
  const [userType, setUserType] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [modal, setModal] = useState(false);
  const [myDogs, setMyDogs] = useState([]);
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [allTimeSlot, setAllTimeSlot] = useState([]);
  const [allBooking, setAllBooking] = useState([]);
  const [userId, setUserId] = useState();
  const [dogIds, setDogIds] = useState([]);
  const dogIdArray = [];

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
    const userDataJSON = JSON.parse(sessionStorage.getItem("userData"));
    if (userDataJSON) {
      setUserType(userDataJSON.data.role);
    } else {
      setUserType(userDataJSON.data.role);
    }
    displayDog();
    setUserId((prev) => sessionStorage.getItem("userID"));
    getAllBooking();
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
        setMyDogs((prev) => ownerDog.data.data.dogs.content);
        localStorage.setItem(
          "myDogs",
          JSON.stringify(ownerDog.data.data.dogs.content)
        );

        getTimeslot();
      } else {
        setMyDogs([]);
      }
    } catch (err) {
      console.log(err);
    }
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

  async function getAllBooking() {
    try {
      const allBookingData = await axios.get(
        `${baseURL}/getBookings?page_no=0&page_size=99999`,
        {
          withCredentials: true,
          headers: {
            Authorization: "Bearer " + token2,
            Authorization1: "Bearer " + token2,
          },
        }
      );
      setAllBooking(allBookingData.data.data.booking.content);
      toast(allBookingData.data.message);
    } catch (err) {
      console.log(err);
      toast("fail to get all the booking");
    }
  }
  return (
    <>
      <div className="m-2">
        {/* <button
          onClick={() => setModal((prev) => !prev)}
          className="bg-white border-black border-2 p-2 rounded-md hover:bg-gray-300 active:bg-gray-400"
        >
          Add Timeslot
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
              type="time"
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
            <Button
              onClick={() => {
                addTimeSlot();
                clear();
                toggle();
              }}
            >
              Add Timeslot
            </Button>{" "}
            <Button
              onClick={() => {
                clear();
                toggle();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal> */}
      </div>
      <div className="grid grid-cols-3 gap-6 justify-center">
        {/* <div className="w-full h-auto bg-red-100 m-2 p-2 rounded-md">
          <h2>Vacant Timeslot</h2>
          {allTimeSlot &&
            allTimeSlot.map((timeslot, id) => {
              <div key={id}>
                <VacantBooking timeslot={timeslot} />
              </div>;
            })}
        </div> */}
        <div className="w-11/12 block bg-red-100 m-4 p-2 rounded-md"></div>

        <div className="w-11/12 block bg-blue-100 m-4 p-2 rounded-md">
          <h2>Booking Request</h2>
          {allBooking.map((booking, i) => {
            <div key={i}>
              <BookingRequestCard booking={booking} />
            </div>;
          })}
        </div>

        <div className="w-11/12 h-auto  bg-yellow-100 m-4 p-2 rounded-md">
          <h2>Confirmed Booking</h2>

          <ConfirmedBookingCard />
          <ConfirmedBookingCard />
          <ConfirmedBookingCard />
        </div>
      </div>
    </>
  );
}
