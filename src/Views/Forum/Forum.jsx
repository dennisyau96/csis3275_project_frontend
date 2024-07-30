import axios from "axios";
import { useState } from "react";

export default function Forum() {
  const [allMessage, setAllMessage] = useState([]);
  return (
    <>
      <div>
        <div className="bg-white m-10 p-10">
          {allMessage ? <h1>All message </h1> : <h1>There is no message</h1>}
        </div>
      </div>
    </>
  );
}
