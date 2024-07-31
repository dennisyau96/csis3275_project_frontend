// import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useState } from "react";
import DogDetail from "./DogDetail";
import { baseURL } from "../../../constant/constant";
import axios from "axios";
import toast from "react-hot-toast";

const token2 = sessionStorage.getItem("token");

function DogCard({ dog }) {
  const [modalDetail, setModalDetail] = useState(false);
  const [modalApply, setModalApply] = useState(false);
  const [did, setDid] = useState(dog._id);
  const [allTimeSlot, setAllTimeSlot] = useState([]);

  useState(() => {
    getTimeslot();
  }, []);

  async function applyTimeslot(tsid) {
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
      toast.success("You have book the timeslot");
      toggleApply();
    } catch (err) {
      console.log(err);
    }
  }

  async function getTimeslot() {
    try {
      const timeslotData = await axios.get(`${baseURL}/getTimeslot/${did}`, {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + token2,
          Authorization1: "Bearer " + token2,
        },
      });
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
          <img src="" alt="Dog Photo" className="w-full h-full " />
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
              </NavLink>
            </button>

            <Modal isOpen={modalApply} toggle={() => toggleApply()}>
              <ModalHeader toggle={() => toggleApply()}>
                Apply for the timeslot(s)
              </ModalHeader>
              <ModalBody className="m-2 grid-flow-row gap-2">
                <ul>
                  {allTimeSlot.map((timeslot, i) => (
                    <li
                      key={i}
                      className="border-black border-2 m-4 p-2 rounded-md active:bg-gray-300 transition:all"
                      onClick={() => applyTimeslot(timeslot._id)}
                    >
                      Date:{timeslot.date} <br />
                      Start at:{timeslot.start_time} <br />
                      End at:{timeslot.end_time}
                      <br />
                      id:{timeslot._id}
                      <br />
                      dog id:{timeslot.dog_id}
                    </li>
                  ))}
                </ul>
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
                <DogDetail dog={{ dog }} />
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
