import { useState } from "react";

function Owner() {
  const [username, setUsername] = useState("user-admin");
  const [introduction, setIntroduction] = useState("introduction");
  const [telephone, setTelephone] = useState("604 - 111 - 2222");
  const [email, setEmail] = useState("123@gmail.com");
  return (
    <>
      <h1>This is Owner page.</h1>
      <div className="grid grid-cols-1 m-3 ">
        <div className="row mb-4">
          <label>User Name</label>
          <input type="text" value={username} />
        </div>
        <div className="row mb-4">
          <label>Introduction</label>
          <textarea rows={5} cols={20} value={introduction} />
        </div>
        <div className="row mb-4">
          {" "}
          <label>Phone Number</label>
          <input type="tel" value={telephone} />
        </div>
        <div className="row mb-4">
          {" "}
          <label>Email </label>
          <input type="email" value={email} />
        </div>
      </div>
    </>
  );
}
export default Owner;
