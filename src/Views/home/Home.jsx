import DogCard from "../../component/dog/DogCard";
import BookingRequestCard from "../../component/ManageBooking/BookingRequestCard";
import NotificationCard from "../../component/Notification/NotificationCard";
import NotificationProfile from "../../component/Notification/NotificationProfile";
function Home() {
  return (
    <>
      <h1>This is home page.</h1>

      <div className="flex flex-wrap flex-col-auto justify">
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
      </div>
    </>
  );
}
export default Home;
