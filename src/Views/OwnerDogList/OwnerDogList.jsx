import DogProfileCard from "../../component/dog/DogProfileCard";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Profiler, useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../../constant/constant";
import toast from "react-hot-toast";
import DogCard from "../../component/dog/DogCard";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8082/api";
axios.defaults.withCredentials = true;

function OwnerDogList() {
  const [modal, setModal] = useState(false);
  const [myDogs, setMyDogs] = useState([]);
  const navigate = useNavigate();

  // value hook

  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const token2 = sessionStorage.getItem("token");

  axios.defaults.headers.common["Authorization1"] = `Bearer ${token2}`;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token2}`;

  //useState hooks
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [picture, setPicture] = useState("");
  const [rate, setRate] = useState("");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");
  const [sterized, setSterized] = useState(false);
  const [sex, setSex] = useState("");
  const [vaccinated, setVaccinated] = useState(false);
  const [description, setDescription] = useState("");
  const [owner_id, setOwnerId] = useState("");
  const [service_id, setServiceId] = useState("");
  const [additional_message, setAddtionalMessage] = useState("");

  useEffect(() => {
    displayDog();
    setOwnerId(sessionStorage.getItem("userID"));
  }, []);

  function toggle() {
    setModal((prev) => !modal);
  }

  function clearInput() {
    setName();
    setAge();
    setBreed();
    setSex();
    setPicture();
    setLocation();
    setRate();
    setSterized();
    setVaccinated();
    setDescription();
    setOwnerId();
    setServiceId();
    setAddtionalMessage();
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
        // toast.success(ownerDog.data.message);
        setMyDogs((prev) => ownerDog.data.data.dogs.content);
        localStorage.setItem(
          "myDogs",
          JSON.stringify(ownerDog.data.data.dogs.content)
        );
      } else {
        // toast.error(ownerDog.data.message);
        setMyDogs([]);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function addDog() {
    try {
      const newDog = await axios.post(
        baseURL + "/addDog",
        {
          owner_id: owner_id,
          service_id: service_id,
          name: name,
          breed: breed,
          age: age,
          sex: sex,
          additional_message: additional_message,
          profile_pic: picture,
          rental_price_per_hour: rate,
          location: location,
          desexed: sterized,
          vaccinated: vaccinated,
          average_rating: rating,
          profile_description: description,
        },
        {
          withCredentials: true,
          headers: {
            // Authorization: "Bearer " + data.data.data.token,
            Authorization: "Bearer " + token2,
            Authorization1: "Bearer " + token2,
          },
        }
      );

      if (newDog.data.success == true) {
        toast(newDog.data.data.message);
        window.location.reload();
      } else {
        toast(newDog.data.data.message);

        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="">
        <h1 className="mr-9">Your Dog Profiles</h1>
        <br />
        <Button color="primary" onClick={toggle}>
          Add new dog
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add a new Dog</ModalHeader>
          <ModalBody className="grid grid-cols-2 m-1 gap-2">
            <label>Dog name</label>
            <input
              type="text"
              className="border-black border-solid border-2 rounded-lg"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <label>Sex</label>
            <select
              value={sex}
              className="border-black border-solid border-2 rounded-lg"
              onChange={(e) => {
                setSex(e.target.value);
              }}
            >
              <option defaultChecked value="">
                ---Sex---
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label>Age</label>
            <input
              className="border-black border-solid border-2 rounded-lg"
              value={age}
              type="number"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            ></input>
            <label>Breed</label>
            <select
              value={breed}
              id="breedInput"
              className="border-black border-solid border-2 rounded-lg"
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

            <label>Picture</label>
            <input
              type="url"
              value={picture}
              className="border-black border-solid border-2 rounded-lg"
              onChange={(e) => {
                setPicture(e.target.value);
              }}
            ></input>
            <label>Rate(per hour)</label>
            <input
              value={rate}
              type="number"
              className="border-black border-solid border-2 rounded-lg"
              onChange={(e) => {
                setRate(e.target.value);
              }}
            ></input>
            <label>Location</label>
            <input
              type="text"
              value={location}
              className="border-black border-solid border-2 rounded-lg"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            ></input>
            <label>Sterized</label>
            <div>
              <input
                type="checkbox"
                value={sterized}
                onChange={(e) => setSterized(e.target.checked)}
                className="border-black border-solid border-2 rounded-lg align-self-center"
              ></input>
              <span className="ml-2">Yes</span>
            </div>

            <label>Vaccinated</label>
            <div>
              <input
                type="checkbox"
                value={vaccinated}
                className="border-black border-solid border-2 rounded-lg"
                onClick={(e) => {
                  setVaccinated(e.target.checked);
                }}
              ></input>
              <span className="ml-2">Yes</span>
            </div>

            <label>Description</label>
            <textarea
              value={description}
              className="border-black border-solid border-2 rounded-lg"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                addDog();
                setTimeout(1000);
                toggle();
              }}
            >
              Save Dog
            </Button>{" "}
            <Button
              color="secondary"
              onClick={() => {
                toggle();
                // clearInput();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <div>
          {myDogs == [] || myDogs == null ? (
            <div>No Dogs</div>
          ) : (
            <div className="flex flex-wrap">
              {myDogs.map((dog) => (
                <div key={dog.id}>
                  <DogProfileCard dog={dog} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default OwnerDogList;
