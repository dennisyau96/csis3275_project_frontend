import DogProfileCard from "../../component/dog/DogProfileCard";
function OwnerDogList() {
  return (
    <>
      <div className=" items-center">
        <h1 className="mr-9">Dog Profiles</h1>
        <br />
        <button className="border-2 border-black bg-gray-300 shadow-sm p-2">
          Add new dog
        </button>
      </div>
    </>
  );
}
export default OwnerDogList;
