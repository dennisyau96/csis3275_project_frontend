import { useState } from "react";
import { useEffect } from "react";
function Renter() {
  const [username, setUsername] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem("userData"))
  );

  useEffect(() => {
    if (userData != null) {
      setUsername(userData.data.username);
      setIntroduction(userData.data.profile);
      setTelephone(userData.data.phone);
      setEmail(userData.data.email);
    }
  }, []);
  return (
    <>
      <h1>This is renter page.</h1>
      <div className="grid grid-cols-1 m-10 ">
        <div className="row mb-4">
          <label>User Name</label>
          <input type="text" value={username} disabled={true} />
        </div>
        <div className="row mb-4">
          <label>Introduction</label>
          <textarea
            rows={5}
            cols={20}
            value={introduction}
            onChange={(e) => {
              setIntroduction(e.target.value);
            }}
          />
        </div>
        <div className="row mb-4">
          <label>Phone Number</label>
          <input
            type="tel"
            value={telephone}
            onChange={(e) => {
              setTelephone(e.target.value);
            }}
          />
        </div>
        <div className="row mb-4">
          <label>Email </label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
      </div>
      <div>
        <button className="p-2 m-2 bg-gray-200">Verify</button>
        <button className="p-2 m-2 bg-gray-200"> Update</button>
      </div>
    </>
  );
}

export default Renter;
