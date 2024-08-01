// import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useState } from "react";
import DogDetail from "./DogDetail";
import { baseURL } from "../../../constant/constant";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const token2 = sessionStorage.getItem("token");

function DogCard({ dog }) {
  const [modalDetail, setModalDetail] = useState(false);
  const [modalApply, setModalApply] = useState(false);
  const [did, setDid] = useState(dog._id);
  const [breed, setBreed] = useState(dog.breed);
  const [allTimeSlot, setAllTimeSlot] = useState([]);
  const [dogImage, setDogImage] = useState([]);
  const token2 = sessionStorage.getItem("token");

  const navigate = useNavigate();

  useState(() => {
    getTimeslot();
    fetchImage();
  }, []);

  async function fetchImage() {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
      // const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
      const json = await response.json();

      setDogImage((prev) => json.message);
    } catch (error) {
      console.log(error);
    }
  }

  async function applyTimeslot(tsid) {
    //doBooking API

    try {
      const doBooking = await axios.post(
        `${baseURL}/book`,
        {
          dog_id: did,
          timeslot_id: tsid,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: "Bearer " + token2,
            Authorization1: "Bearer " + token2,
          },
        }
      );

      // window.location.reload();
      toast.success("You have book the timeslot");
      sessionStorage.setItem("newBooking", JSON.stringify(doBooking.data));
    } catch (err) {
      console.log(err);
      toast.error("failed to book the time slot");
    }
  }

  async function getTimeslot() {
    try {
      const timeslotData = await axios.get(`${baseURL}/getTimeslot/${did}`);
      setAllTimeSlot((prev) => timeslotData.data.data.timeslots);
    } catch (err) {
      console.log(err);
    }
  }

  function toggleDetail() {
    setModalDetail((prev) => !modalDetail);
  }

  function toggleApply() {
    setModalApply((prev) => !modalApply);
  }

  return (
    <>
      <div className="border-2 m-4 w-60  hover:shadow-2xl hover:transition-all rounded-md shadow-md bg-white border-black">
        <div className="w-full h-36 p-1 ">
          <img src={dogImage} alt="Dog Photo" className="w-full h-full " />
        </div>

        <div className="p-2">
          <h5 className="text-lg font-bold">name:{dog.name}</h5>
          <div className="h-20">
            breed:{dog.breed}
            <br />
            <br />
          </div>
          <div id="timeSlotList"></div>
          <div className=" grid grid-cols-2 space-x-3 justify-items-center">
            <button
              className=" inline bg-red-400 p-1 w-auto text-center border-black border-2 shadow-sm hover:bg-blue-300"
              onClick={() => toggleDetail()}
            >
              Details
            </button>

            <button
              className=" inline bg-orange-400 p-1 w-20 text-center  border-black border-2 shadow-sm  hover:bg-red-200"
              onClick={() => toggleApply()}
            >
              Apply
            </button>

            <Modal isOpen={modalApply} toggle={() => toggleApply()}>
              <ModalHeader toggle={() => toggleApply()}>
                Apply for the timeslot(s)
              </ModalHeader>
              <ModalBody className="m-2 grid-flow-row gap-2">
                {allTimeSlot ? (
                  <ul>
                    {allTimeSlot.map((timeslot, i) => (
                      <li
                        key={i}
                        className="border-black border-2 m-4 p-2 rounded-md active:bg-gray-300 transition:all"
                        onClick={() => {
                          if (sessionStorage.getItem("token") != null) {
                            if (!timeslot.booked) {
                              applyTimeslot(timeslot._id);
                              toggleApply();
                              toast.success(timeslot.data.message);
                            } else {
                              toast.error("This time slot is booked.");
                            }
                          } else {
                            toast.error("please login to book the time slot.");
                          }
                        }}
                      >
                        Date: {timeslot.date} <br />
                        Start at: {timeslot.start_time} <br />
                        End at: {timeslot.end_time}
                        <br />
                        Booked:{timeslot.booked ? "Yes" : "No"}
                        <br />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <h1>No timeslot</h1>
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  onClick={() => {
                    toggleApply();
                  }}
                >
                  Close
                </Button>
              </ModalFooter>
            </Modal>

            <Modal isOpen={modalDetail} toggle={toggleDetail}>
              <ModalHeader toggle={toggleDetail}>
                More information about {dog.name}
              </ModalHeader>
              <ModalBody className="m-2 grid-flow-row gap-2">
                <DogDetail dog={{ dog }} dogImage={dogImage} />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  onClick={() => {
                    toggleDetail();

                    // clearInput();
                  }}
                >
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
export default DogCard;
