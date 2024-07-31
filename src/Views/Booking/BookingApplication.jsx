import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from "reactstrap";
import { useState } from "react";

export default function BookingApplication() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);

  function toggle() {
    setModal((prev) => !modal);
  }

  function toggle1() {
    setModal1((prev) => !modal1);
  }

  return (
    <>
      <h1>This is the Booking Application Page</h1>
      <h2>Time slot available:</h2>
      <div className="w-full h-auto ">
        <Calendar />
      </div>
      <label htmlFor="bookingDateInput">Select Date for Booing</label>
      <input
        type="date"
        className="border-black border-1"
        value={Date}
      ></input>
      <label htmlFor="bookingTimeInput">Select Time for Booing</label>
      <input
        type="time"
        className="border-black border-1"
        value={Time}
      ></input>
      <label htmlFor="bookingDurationInput">Select Duration for Booing</label>
      <input
        type="number" min="1" max="6" value={0}
        className="border-black border-1"
      ></input>
      <div className="grid grid-row-2">
        <label htmlFor="messageToOwner">Message to owner</label>
        <textarea value={remarks} className="border-black border-2"></textarea>
      </div>
      <button className=" inline bg-orange-400 p-1 w-20 text-center  border-black border-2 shadow-sm  hover:bg-red-200"
      onClick={toggle}>
        Send Application
      </button>
      <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Application Sent!</ModalHeader>
      <ModalBody>
      <label>Dog name</label>
      <label className="border-black border-solid border-2 rounded-lg">Victor</label>
      <Label>Date for Booking</Label>
      <Date className="border-black border-solid border-2 rounded-lg">{Date}</Date>
      <Label>Time for Booking</Label>
      <Time className="border-black border-solid border-2 rounded-lg">{Time}</Time>
      <Label>Duration</Label>
      <label className="border-black border-solid border-2 rounded-lg">1 hour</label>
      </ModalBody>
      <ModalFooter>
        <h2 className="inline">Total:</h2><span>$90</span>
            <Button color="warning" onClick={toggle1}>
              Pay
            </Button>{" "}
            <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Payment Successful!</ModalHeader>
            </Modal>
            <Button
              color="danger"
              onClick={() => {
                toggle();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
      </Modal>
    </>
  );
}
