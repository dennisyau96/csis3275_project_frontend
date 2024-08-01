export default function Requested({ booking }) {
  const newBooking = JSON.parse(sessionStorage.getItem("newBooking"));
  return (
    <div className="grid grid-cols-1 bg-white w-96">
      <p>Dog name:{newBooking.data.dog.name}</p>
    </div>
  );
}
