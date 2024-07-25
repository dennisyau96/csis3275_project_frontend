// import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useState } from "react";
import DogDetail from "./DogDetail";

function DogCard({ dog }) {
  const [modal, setModal] = useState(false);
  function toggle() {
    setModal((prev) => !modal);
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
          <div className=" grid grid-cols-2 space-x-3 justify-items-center">
            <button
              className=" inline bg-red-400 p-1 w-auto text-center border-black border-2 shadow-sm hover:bg-blue-300"
              onClick={() => toggle()}
            >
              Details
            </button>
            <button className=" inline bg-orange-400 p-1 w-20 text-center  border-black border-2 shadow-sm  hover:bg-red-200">
              <NavLink to="bookingApplication">
              Apply
              </NavLink>
            </button>

            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>
                More information about {dog.name}
              </ModalHeader>
              <ModalBody className="m-2 grid-flow-row gap-2">
                <DogDetail dog={{ dog }} />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  onClick={() => {
                    toggle();
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
