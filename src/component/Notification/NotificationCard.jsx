import axios from "axios";

function NotificationCard() {
  return (
    <>
      <div className="border-2 m-1 w-60 rounded-md border-slate-300 bg-white hover:bg-slate-300">
        <div className="p-2 hover:shadow-lg hover:bg-slate-200 cursor-pointer">
          <div className="text-lg font-bold">Type of notification</div>
          <div className="text-sm">Details:.....</div>
        </div>
      </div>
    </>
  );
}

export default NotificationCard;
