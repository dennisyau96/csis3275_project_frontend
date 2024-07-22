import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Owner() {
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
      {userData ? (
        <>
          <h1>This is Owner page.</h1>
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
                onChange={(e) => setIntroduction(e.target.value)}
                value={introduction}
              />
            </div>
            <div className="row mb-4">
              {" "}
              <label>Phone Number</label>
              <input
                type="tel"
                onChange={(e) => {
                  setTelephone(e.target.value);
                }}
                value={telephone}
              />
            </div>
            <div className="row mb-4">
              {" "}
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
            <button className="p-2 m-2 border-black bg-gray-200 border-2  hover:bg-green-200 shadow-lg">
              Verify
            </button>
            <button className="p-2 m-2 border-black bg-gray-200 border-2 hover:bg-green-200 shadow-lg">
              {" "}
              Update
            </button>
          </div>
        </>
      ) : (
        <div>null</div>
      )}
    </>
  );
}
export default Owner;
