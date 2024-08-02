export default function DogDetail({ dog, dogImage }) {
  return (
    <>
      <div className="grid grid-cols-5 row">
        <span className="col-span-2">Name: </span>
        <span className="col-span-3">{dog.dog.name}</span>
        <span className="col-span-2 ">Breed: </span>
        <span className="col-span-3">{dog.dog.breed}</span>
        <span className="col-span-2">Age: </span>
        <span className="col-span-3">{dog.dog.age}</span>
        <span className="col-span-2">Gender: </span>
        <span className="col-span-3">{dog.dog.sex}</span>
        <span className="col-span-2">Rate: </span>
        <span className="col-span-3">{dog.dog.rental_price_per_hour}</span>
        <span className="col-span-2">Vaccinated:</span>
        <span className="col-span-3">{dog.dog.vaccinated ? "Yes" : "No"}</span>
        <span className="col-span-2">Neutralised:</span>
        <span className="col-span-3">{dog.dog.desexed ? "Yes" : "No"}</span>
        <span className="col-span-2">Rating:</span>
        <span className="col-span-3">
          {dog.dog.average_rating ? average_rating : "-"}
        </span>
        <span className="col-span-2">More to know:</span>
        <span className="col-span-3">{dog.dog.additional_message}</span>
      </div>

      <div className="mt-10 row justify-center">
        <img
          className="h-80 w-80 justify-items-center"
          src={`${dog.dog.profile_pic}`}
          alt={`${dog.dog.name} photo`}
        />
      </div>
    </>
  );
}
