import DogCard from "../../component/dog/DogCard";

import axios from "axios";
import { baseURL } from "../../../constant/constant";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [dogs, setDogs] = useState([]);

  async function fetchDog() {
    try {
      const res = await axios.get(baseURL + "/getDogs");
      const dogData = res.data.data.dogs.content;
      setTimeout(1000);
      setDogs(dogData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        {dogs.map((dog) => (
          <div key={dog.id}>
            <DogCard dog={dog} />
          </div>
        ))}
      </div>
    </>
  );
}
