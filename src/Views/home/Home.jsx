import DogCard from "../../component/dog/DogCard";

import axios from "axios";
import { baseURL } from "../../../constant/constant";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [dogs, setDogs] = useState();

  async function fetchDog() {
    try {
      const res = await axios.get(
        baseURL + `/getDogs?page_no=0&page_size=99999`
      );
      const dogData = res.data.data.dogs.content;
      // localStorage.setItem("dogData", JSON.stringify(dogData));
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
      <div>
        {dogs == [] || dogs == null ? (
          <div>Homepage</div>
        ) : (
          <div className="flex flex-wrap">
            {dogs.map((dog, i) => (
              <div key={i}>
                <DogCard dog={dog} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
