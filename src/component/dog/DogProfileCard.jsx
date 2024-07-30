import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../../constant/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import VacantBooking from "../ManageBooking/VacantBooking";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { sassNull } from "sass";

export default function DogProfileCard({ dog, uid }) {
  const [did, setDId] = useState(dog._id);
  const [name, setName] = useState(dog.name);
  const [gender, setGender] = useState(dog.sex);
  const [breed, setBreed] = useState(dog.breed);
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState(dog.age);
  const [picture, setProfilePic] = useState(dog.profile_pic);
  const [location, setLocation] = useState(dog.location);
  const [sterilized, setSterilized] = useState(dog.dessexed);
  const [vaccinated, setVaccinated] = useState(dog.vaccinated);
  const [price, setPrice] = useState(dog.rental_price_per_hour);
  const [availability, setAvailability] = useState([]);
  const [remark, setRemark] = useState(dog.profile_description);
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [userIdUS, setuserIdUS] = useState({ uid });
  const [allTimeSlot, setAllTimeSlot] = useState([]);

  // for adding dog
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [pickUp, setPickUp] = useState();
  const [duration, setDuration] = useState();
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const token2 = sessionStorage.getItem("token");

  useEffect(() => {
    getTimeslot(did);
  }, []);

  function toggle() {
    setModal((prev) => !modal);
  }

  function clear() {
    setDId();
    setName();
    setDate();
    setDuration();
    setEndTime();
    setPickUp();
    setStartTime();
  }

  async function addTimeSlot() {
    try {
      const addTimeSlot = await axios.post(
        baseURL + "/addTimeslot",
        {
          dog_id: did,
          timeslots: [
            {
              date: date,
              start_time: startTime,
              end_time: endTime,
              pickUp: pickUp,
            },
          ],
        },
        {
          withCredentials: true,
          headers: {
            Authorization: "Bearer " + token2,
            Authorization1: "Bearer " + token2,
          },
        }
      );

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  async function getTimeslot(did) {
    try {
      const timeslotData = await axios.get(`${baseURL}/getTimeslot/${did}`);
      setAllTimeSlot(timeslotData.data.data.timeslots);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteDog(did) {
    const token2 = sessionStorage.getItem("token");
    try {
      const deleteDog = await axios.post(
        `${baseURL}/deleteDog`,
        { _id: did },
        {
          withCredentials: true,
          headers: {
            Authorization: "Bearer " + token2,
            Authorization1: "Bearer " + token2,
          },
        }
      );
      toast("deleted");
      window.location.reload();
    } catch (err) {
      console.log(err);
      window.location.reload();
    }
  }

  async function updateDog(did) {
    const token2 = sessionStorage.getItem("token");
    try {
      const updateDog = await axios.post(
        `${baseURL}/updateDog`,
        {
          _id: did,
          name: name,
          breed: breed,
          age: age,
          sex: gender,
          additional_message: "",
          profile_pic: picture,
          rental_price_per_hour: price,
          location: location,
          desexed: sterilized,
          vaccinated: vaccinated,
          profile_description: remark,
          average_rating: null,
          owner_id: userIdUS,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: "Bearer " + token2,
            Authorization1: "Bearer " + token2,
          },
        }
      );
      if (updateDog.data.success) {
        toast("successfully updated");
      }
      window.location.reload();
    } catch (err) {
      console.log(err);
      window.location.reload();
    }
  }

  return (
    <>
      <div className=" bg-gray-300 rounded-md p-4 m-4">
        <div
          id="dogProfileCard"
          className="grid grid-cols-6 bg-white m-6 p-4 rounded-md"
        >
          <div id="leftCol" className="  grid-rows-4 col-span-2">
            <img className="h-64 w-64 m-1" src="" alt="dog photo"></img>
            <button className="m-1 btn btn-primary">UploadPhoto</button>
          </div>
          <div id="rightCol" className=" grid-rows-6 col-span-4 m-1">
            {/* row 1 */}
            <div>
              <label htmlFor="nameInput" className="m-1">
                Name:
              </label>
              <input
                type="text"
                className="m-1"
                value={name}
                id="nameInput"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label htmlFor="idInput" className="m-1">
                id:
              </label>
              <input
                type="text"
                className="m-1"
                value={did}
                id="idInput"
                readOnly
              />
            </div>
            {/* row 2*/}
            <label htmlFor="breedInput" className="m-1">
              Breed:
            </label>
            <select
              value={breed}
              id="breedInput"
              className="m-1"
              onChange={(e) => {
                setBreed(e.target.value);
              }}
            >
              <option defaultValue="---Breed---">---Breed---</option>
              <option value="affenpinscher">affenpinscher</option>
              <option value="african">african</option>
              <option value="airedale">airedale</option>
              <option value="akita">akita</option>
              <option value="appenzeller">appenzeller</option>
              <option value="australian-kelpie">kelpie australian</option>
              <option value="australian-shepherd">shepherd australian</option>
              <option value="bakharwal-indian">indian bakharwal</option>
              <option value="basenji">basenji</option>
              <option value="beagle">beagle</option>
              <option value="bluetick">bluetick</option>
              <option value="borzoi">borzoi</option>
              <option value="bouvier">bouvier</option>
              <option value="boxer">boxer</option>
              <option value="brabancon">brabancon</option>
              <option value="briard">briard</option>
              <option value="buhund-norwegian">norwegian buhund</option>
              <option value="bulldog-boston">boston bulldog</option>
              <option value="bulldog-english">english bulldog</option>
              <option value="bulldog-french">french bulldog</option>
              <option value="bullterrier-staffordshire">
                staffordshire bullterrier
              </option>
              <option value="cattledog-australian">australian cattledog</option>
              <option value="cavapoo">cavapoo</option>
              <option value="chihuahua">chihuahua</option>
              <option value="chippiparai-indian">indian chippiparai</option>
              <option value="chow">chow</option>
              <option value="clumber">clumber</option>
              <option value="cockapoo">cockapoo</option>
              <option value="collie-border">border collie</option>
              <option value="coonhound">coonhound</option>
              <option value="corgi-cardigan">cardigan corgi</option>
              <option value="cotondetulear">cotondetulear</option>
              <option value="dachshund">dachshund</option>
              <option value="dalmatian">dalmatian</option>
              <option value="dane-great">great dane</option>
              <option value="danish-swedish">swedish danish</option>
              <option value="deerhound-scottish">scottish deerhound</option>
              <option value="dhole">dhole</option>
              <option value="dingo">dingo</option>
              <option value="doberman">doberman</option>
              <option value="elkhound-norwegian">norwegian elkhound</option>
              <option value="entlebucher">entlebucher</option>
              <option value="eskimo">eskimo</option>
              <option value="finnish-lapphund">lapphund finnish</option>
              <option value="frise-bichon">bichon frise</option>
              <option value="gaddi-indian">indian gaddi</option>
              <option value="germanshepherd">germanshepherd</option>
              <option value="greyhound-indian">indian greyhound</option>
              <option value="greyhound-italian">italian greyhound</option>
              <option value="groenendael">groenendael</option>
              <option value="havanese">havanese</option>
              <option value="hound-afghan">afghan hound</option>
              <option value="hound-basset">basset hound</option>
              <option value="hound-blood">blood hound</option>
              <option value="hound-english">english hound</option>
              <option value="hound-ibizan">ibizan hound</option>
              <option value="hound-plott">plott hound</option>
              <option value="hound-walker">walker hound</option>
              <option value="husky">husky</option>
              <option value="keeshond">keeshond</option>
              <option value="kelpie">kelpie</option>
              <option value="kombai">kombai</option>
              <option value="komondor">komondor</option>
              <option value="kuvasz">kuvasz</option>
              <option value="labradoodle">labradoodle</option>
              <option value="labrador">labrador</option>
              <option value="leonberg">leonberg</option>
              <option value="lhasa">lhasa</option>
              <option value="malamute">malamute</option>
              <option value="malinois">malinois</option>
              <option value="maltese">maltese</option>
              <option value="mastiff-bull">bull mastiff</option>
              <option value="mastiff-english">english mastiff</option>
              <option value="mastiff-indian">indian mastiff</option>
              <option value="mastiff-tibetan">tibetan mastiff</option>
              <option value="mexicanhairless">mexicanhairless</option>
              <option value="mix">mix</option>
              <option value="mountain-bernese">bernese mountain</option>
              <option value="mountain-swiss">swiss mountain</option>
              <option value="mudhol-indian">indian mudhol</option>
              <option value="newfoundland">newfoundland</option>
              <option value="otterhound">otterhound</option>
              <option value="ovcharka-caucasian">caucasian ovcharka</option>
              <option value="papillon">papillon</option>
              <option value="pariah-indian">indian pariah</option>
              <option value="pekinese">pekinese</option>
              <option value="pembroke">pembroke</option>
              <option value="pinscher-miniature">miniature pinscher</option>
              <option value="pitbull">pitbull</option>
              <option value="pointer-german">german pointer</option>
              <option value="pointer-germanlonghair">
                germanlonghair pointer
              </option>
              <option value="pomeranian">pomeranian</option>
              <option value="poodle-medium">medium poodle</option>
              <option value="poodle-miniature">miniature poodle</option>
              <option value="poodle-standard">standard poodle</option>
              <option value="poodle-toy">toy poodle</option>
              <option value="pug">pug</option>
              <option value="puggle">puggle</option>
              <option value="pyrenees">pyrenees</option>
              <option value="rajapalayam-indian">indian rajapalayam</option>
              <option value="redbone">redbone</option>
              <option value="retriever-chesapeake">chesapeake retriever</option>
              <option value="retriever-curly">curly retriever</option>
              <option value="retriever-flatcoated">flatcoated retriever</option>
              <option value="retriever-golden">golden retriever</option>
              <option value="ridgeback-rhodesian">rhodesian ridgeback</option>
              <option value="rottweiler">rottweiler</option>
              <option value="saluki">saluki</option>
              <option value="samoyed">samoyed</option>
              <option value="schipperke">schipperke</option>
              <option value="schnauzer-giant">giant schnauzer</option>
              <option value="schnauzer-miniature">miniature schnauzer</option>
              <option value="segugio-italian">italian segugio</option>
              <option value="setter-english">english setter</option>
              <option value="setter-gordon">gordon setter</option>
              <option value="setter-irish">irish setter</option>
              <option value="sharpei">sharpei</option>
              <option value="sheepdog-english">english sheepdog</option>
              <option value="sheepdog-indian">indian sheepdog</option>
              <option value="sheepdog-shetland">shetland sheepdog</option>
              <option value="shiba">shiba</option>
              <option value="shihtzu">shihtzu</option>
              <option value="spaniel-blenheim">blenheim spaniel</option>
              <option value="spaniel-brittany">brittany spaniel</option>
              <option value="spaniel-cocker">cocker spaniel</option>
              <option value="spaniel-irish">irish spaniel</option>
              <option value="spaniel-japanese">japanese spaniel</option>
              <option value="spaniel-sussex">sussex spaniel</option>
              <option value="spaniel-welsh">welsh spaniel</option>
              <option value="spitz-indian">indian spitz</option>
              <option value="spitz-japanese">japanese spitz</option>
              <option value="springer-english">english springer</option>
              <option value="stbernard">stbernard</option>
              <option value="terrier-american">american terrier</option>
              <option value="terrier-australian">australian terrier</option>
              <option value="terrier-bedlington">bedlington terrier</option>
              <option value="terrier-border">border terrier</option>
              <option value="terrier-cairn">cairn terrier</option>
              <option value="terrier-dandie">dandie terrier</option>
              <option value="terrier-fox">fox terrier</option>
              <option value="terrier-irish">irish terrier</option>
              <option value="terrier-kerryblue">kerryblue terrier</option>
              <option value="terrier-lakeland">lakeland terrier</option>
              <option value="terrier-norfolk">norfolk terrier</option>
              <option value="terrier-norwich">norwich terrier</option>
              <option value="terrier-patterdale">patterdale terrier</option>
              <option value="terrier-russell">russell terrier</option>
              <option value="terrier-scottish">scottish terrier</option>
              <option value="terrier-sealyham">sealyham terrier</option>
              <option value="terrier-silky">silky terrier</option>
              <option value="terrier-tibetan">tibetan terrier</option>
              <option value="terrier-toy">toy terrier</option>
              <option value="terrier-welsh">welsh terrier</option>
              <option value="terrier-westhighland">westhighland terrier</option>
              <option value="terrier-wheaten">wheaten terrier</option>
              <option value="terrier-yorkshire">yorkshire terrier</option>
              <option value="tervuren">tervuren</option>
              <option value="vizsla">vizsla</option>
              <option value="waterdog-spanish">spanish waterdog</option>
              <option value="weimaraner">weimaraner</option>
              <option value="whippet">whippet</option>
              <option value="wolfhound-irish">irish wolfhound</option>
            </select>
            <div>
              <label htmlFor="genderInput" className="m-1">
                Gender:
              </label>
              <select
                value={gender}
                id="genderInput"
                className="m-1"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {/* <label htmlFor="birthdayInput" className="m-1">
              BOD
            </label>
            <input
              type="date"
              className="border-black m-1
            border-1"
            ></input> */}
              <span className="m-1">Age: {age ? age : "-"}</span>
              <label htmlFor="sterilizedInput" className="m-1">
                Sterilized:
              </label>
              <input
                className="m-1"
                type="checkbox"
                id="sterilizedInput"
                // value={sterilized}
                checked={sterilized && true}
                onChange={() => {
                  setSterilized((prev) => !prev);
                }}
              />

              <label htmlFor="vaccinatedInput" className="m-1">
                Vaccinated:
              </label>
              <input
                className="m-1"
                type="checkbox"
                id="vaccinatedInput"
                checked={vaccinated && true}
                onChange={() => {
                  setVaccinated((prev) => !prev);
                }}
              />
            </div>
            {/* row 3 */}
            <div>
              <label htmlFor="priceInput" className="m-1">
                Price(per hour):
              </label>
              <input
                type="number"
                className="m-1"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            {/* row 4 */}
            {/* <div>
            <label htmlFor="availabilityInput" className="m-1">
              Availability:
            </label>
            <select id="availabilityInput" className="m-1">
              <option>--No availability--</option>
              {availability.map((timeslot, id) => {
                <option value={timeslot} key={id}></option>;
              })}
            </select>
          </div> */}
            {/* row 5 */}
            <div className="grid grid-row-2 m-1">
              <label htmlFor="">Description:</label>
              <textarea
                value={remark}
                className="border-black border-2 m-1"
                onChange={(e) => {
                  setRemark(e.target.value);
                }}
              ></textarea>
            </div>
            {/* row 6 */}
            <div>
              <button
                onClick={() => setModal((prev) => !prev)}
                className="m-1 btn bg-green-200 hover:bg-green-300 font-bold"
              >
                Add Timeslot
              </button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add a timeslot</ModalHeader>
                <ModalBody className="grid grid-cols-2 m-1 gap-2">
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
              </Modal>
              <button
                onClick={() => updateDog(did)}
                className="m-1 btn bg-blue-200 hover:bg-blue-300 font-bold"
              >
                Update
              </button>
              <button
                onClick={() => deleteDog(did)}
                className="m-1 btn bg-red-200 hover:bg-red-300 font-bold"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div id="dogTimeslots">
          <VacantBooking timeslot={null} />
          <VacantBooking timeslot={null} />
          {allTimeSlot.map((timeslot, i) => {
            <div key={i}>
              <VacantBooking timeslot={{ timeslot }} />
            </div>;
          })}
        </div>
      </div>
    </>
  );
}
