import { useState } from "react";
import axios from "axios";

export default function DogProfileCard() {
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [breed, setBreed] = useState();
  const [birthday, setBirthday] = useState();
  const [age, setAge] = useState();
  const [sterilized, setSterilized] = useState();
  const [price, setPrice] = useState();
  const [availability, setAvailability] = useState();
  const [remarks, setRemarks] = useState();

  return (
    <>
      <div
        id="dogProfileCard"
        className="grid grid-cols-6 bg-white m-6 p-4 rounded-md"
      >
        <div id="leftCol" className="  grid-rows-4 col-span-2">
          <img src="" alt="dog photo"></img>
          <button>UploadPhoto</button>
          <div></div>
        </div>
        <div id="rightCol" className=" grid-rows-6 col-span-4">
          {/* row 1 */}
          <div>
            <label htmlFor="nameInput">Name</label>
            <input type="text" value={name} id="nameInput" />
            <label htmlFor="breedInput"></label>
            <select value={breed} id="breedInput">
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
          </div>
          {/* row 2*/}
          <div>
            <label htmlFor="genderInput">Gender</label>
            <select id="genderInput">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label htmlFor="birthdayInput">BOD</label>
            <input
              type="date"
              className="border-black
            border-1"
            ></input>
            <span>Age {}</span>
            <label htmlFor="sterilizedInput">sterilized</label>
            <input type="checkbox" id="sterilizedInput" />
          </div>
          {/* row 3 */}
          <div>
            <label htmlFor="priceInput">Price</label>
            <input type="number">{}</input>/hour
          </div>
          {/* row 4 */}
          <div>
            <label htmlFor="availabilityInput">Availability</label>
            <select id="availabilityInput">
              <option></option>
            </select>
          </div>
          {/* row 5 */}
          <div className="grid grid-row-2">
            <label htmlFor="">Special Needs/Message to renters</label>
            <textarea
              value={remarks}
              className="border-black border-2"
            ></textarea>
          </div>
          {/* row 6 */}
          <div>
            <button>Update Dog Profile</button>
          </div>
        </div>
      </div>
    </>
  );
}
