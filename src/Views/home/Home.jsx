import DogCard from "../../component/dog/DogCard";

import axios from "axios";
import { baseURL } from "../../../constant/constant";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [dogs, setDogs] = useState([
    {
      _id: "6687be1d45865d8ccb0e6447",
      owner_id: "4",
      service_id: 1,
      name: "Buddy",
      breed: "Golden Retriever",
      age: 3,
      sex: "Male",
      additional_message:
        "Buddy is very friendly and loves to play fetch. Please be cautious around small children as he is very energetic.",
      profile_pic: null,
      rental_price_per_hour: 20,
      location: "Vancouver",
      desexed: true,
      vaccinated: true,
      average_rating: null,
      profile_description:
        "Buddy is a playful and friendly Golden Retriever who loves outdoor activities and meeting new people.",
    },
    {
      _id: "6687be1d45865d8ccb0e6448",
      owner_id: "2",
      service_id: 1,
      name: "Max",
      breed: "Labrador Retriever",
      age: 5,
      sex: "Male",
      additional_message:
        "Max is well-trained and very gentle. He is great with children and other pets.",
      profile_pic: null,
      rental_price_per_hour: 25,
      location: "Burnaby",
      desexed: true,
      vaccinated: true,
      average_rating: null,
      profile_description:
        "Max is a gentle and well-trained Labrador Retriever who enjoys long walks and spending time with kids.",
    },
  ]);

  // useEffect(() => {
  //   setDogs([
  //     {
  //       _id: "6687be1d45865d8ccb0e6447",
  //       owner_id: "4",
  //       service_id: 1,
  //       name: "Buddy",
  //       breed: "Golden Retriever",
  //       age: 3,
  //       sex: "Male",
  //       additional_message:
  //         "Buddy is very friendly and loves to play fetch. Please be cautious around small children as he is very energetic.",
  //       profile_pic: null,
  //       rental_price_per_hour: 20,
  //       location: "Vancouver",
  //       desexed: true,
  //       vaccinated: true,
  //       average_rating: null,
  //       profile_description:
  //         "Buddy is a playful and friendly Golden Retriever who loves outdoor activities and meeting new people.",
  //     },
  //     {
  //       _id: "6687be1d45865d8ccb0e6448",
  //       owner_id: "2",
  //       service_id: 1,
  //       name: "Max",
  //       breed: "Labrador Retriever",
  //       age: 5,
  //       sex: "Male",
  //       additional_message:
  //         "Max is well-trained and very gentle. He is great with children and other pets.",
  //       profile_pic: null,
  //       rental_price_per_hour: 25,
  //       location: "Burnaby",
  //       desexed: true,
  //       vaccinated: true,
  //       average_rating: null,
  //       profile_description:
  //         "Max is a gentle and well-trained Labrador Retriever who enjoys long walks and spending time with kids.",
  //     },
  //     {
  //       _id: "6687be1d45865d8ccb0e644a",
  //       owner_id: "1",
  //       service_id: 3,
  //       name: "Charlie",
  //       breed: "Beagle",
  //       age: 4,
  //       sex: "Male",
  //       additional_message:
  //         "Charlie loves to explore and follow scents. Keep an eye on him as he tends to wander off if he catches an interesting scent.",
  //       profile_pic: null,
  //       rental_price_per_hour: 15,
  //       location: "Surrey",
  //       desexed: true,
  //       vaccinated: true,
  //       average_rating: null,
  //       profile_description:
  //         "Charlie is an adventurous Beagle who loves exploring new places and following scents. He's friendly and curious.",
  //     },
  //     {
  //       _id: "6687be1d45865d8ccb0e6449",
  //       owner_id: "668e2bb38e268a1cdc763f65",
  //       service_id: 2,
  //       name: "Bella",
  //       breed: "Poodle",
  //       age: 2,
  //       sex: "Female",
  //       additional_message:
  //         "Bella is very affectionate and enjoys being around people. Please be gentle as she can be a bit shy initially.",
  //       profile_pic: null,
  //       rental_price_per_hour: 30,
  //       location: "Richmond",
  //       desexed: false,
  //       vaccinated: true,
  //       average_rating: null,
  //       profile_description:
  //         "Bella is an affectionate and sweet Poodle who loves cuddles and spending time with people. She can be a bit shy at first but warms up quickly.",
  //     },
  //     {
  //       _id: "6687be1d45865d8ccb0e644b",
  //       owner_id: "6",
  //       service_id: 1,
  //       name: "Luna",
  //       breed: "Husky",
  //       age: 3,
  //       sex: "Female",
  //       additional_message:
  //         "Luna is very energetic and needs a lot of exercise. She can be a bit stubborn, so make sure to keep her on a leash.",
  //       profile_pic: null,
  //       rental_price_per_hour: 35,
  //       location: "New Westminster",
  //       desexed: false,
  //       vaccinated: true,
  //       average_rating: null,
  //       profile_description:
  //         "Luna is a high-energy Husky who loves to run and play. She needs a lot of exercise and can be a bit stubborn, but she’s very friendly.",
  //     },
  //     {
  //       _id: "6687c2c545865d8ccb12e93a",
  //       owner_id: "2",
  //       service_id: 1,
  //       name: "Max",
  //       breed: "Siberian Husky",
  //       age: 2,
  //       sex: "Male",
  //       additional_message: "Loves cold weather and long walks.",
  //       profile_pic: null,
  //       rental_price_per_hour: 35,
  //       location: "Burnaby",
  //       desexed: true,
  //       vaccinated: true,
  //       average_rating: null,
  //       profile_description:
  //         "Max is an energetic and friendly Siberian Husky who enjoys outdoor activities.",
  //     },
  //     {
  //       _id: "6687c2c545865d8ccb12e93e",
  //       owner_id: "4",
  //       service_id: 1,
  //       name: "Rosie",
  //       breed: "Labradoodle",
  //       age: 1,
  //       sex: "Female",
  //       additional_message: "Still learning basic commands, very playful.",
  //       profile_pic: null,
  //       rental_price_per_hour: 28,
  //       location: "New Westminster",
  //       desexed: true,
  //       vaccinated: true,
  //       average_rating: null,
  //       profile_description:
  //         "Rosie is a smart and energetic Labradoodle who loves meeting new friends.",
  //     },
  //     {
  //       _id: "6687c2c545865d8ccb12e93b",
  //       owner_id: "8",
  //       service_id: 3,
  //       name: "Bailey",
  //       breed: "Beagle",
  //       age: 4,
  //       sex: "Female",
  //       additional_message:
  //         "Requires leash when outside, tends to chase small animals.",
  //       profile_pic: null,
  //       rental_price_per_hour: 22,
  //       location: "Vancouver",
  //       desexed: true,
  //       vaccinated: true,
  //       average_rating: null,
  //       profile_description:
  //         "Bailey is a curious and affectionate Beagle who loves exploring new scents.",
  //     },
  //     {
  //       _id: "6687c2c545865d8ccb12e93c",
  //       owner_id: "6",
  //       service_id: 1,
  //       name: "Duke",
  //       breed: "Rottweiler",
  //       age: 3,
  //       sex: "Male",
  //       additional_message: "Requires an experienced handler, very protective.",
  //       profile_pic: null,
  //       rental_price_per_hour: 40,
  //       location: "Richmond",
  //       desexed: true,
  //       vaccinated: true,
  //       average_rating: null,
  //       profile_description:
  //         "Duke is a strong and loyal Rottweiler with a calm demeanor around familiar faces.",
  //     },
  //     {
  //       _id: "6687c2c545865d8ccb12e93d",
  //       owner_id: "1",
  //       service_id: 2,
  //       name: "Molly",
  //       breed: "Shih Tzu",
  //       age: 6,
  //       sex: "Female",
  //       additional_message: "Loves cuddles and indoor play.",
  //       profile_pic: null,
  //       rental_price_per_hour: 18,
  //       location: "Surrey",
  //       desexed: true,
  //       vaccinated: true,
  //       average_rating: null,
  //       profile_description:
  //         "Molly is a gentle and affectionate Shih Tzu who enjoys spending time with people.",
  //     },
  //   ]);
  // }, []);

  // async function fetchDogs() {
  //   const dogData = await axios.get(baseURL + "/getDogs");
  //   // setDogs(dogData.data.data.dogs.content);
  // }

  return (
    <>
      <div>This is Home page</div>
      <div></div>
    </>
  );
}
