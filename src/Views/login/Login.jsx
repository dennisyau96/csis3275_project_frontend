import axios from "axios";
import { baseURL } from "../../../constant/constant";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
axios.defaults.baseURL = "http://localhost:8082/api";
axios.defaults.withCredentials = false;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  function clearInput() {
    setUsername("");
    setPassword("");
  }

  async function login() {
    try {
      const data = await axios.post(baseURL + "/auth/login", {
        username: username,
        password: password,
      });
      toast(data.data.message);

      if (data.data.data.token) {
        localStorage.setItem("jwtToken", data.data.data.token);
        console.log(localStorage.getItem("jwtToken"));

        try {
          const config = {
            headers: {
              Authorization: localStorage.getItem("jwtToken"),
            },
          };
          const userData = await axios.get(baseURL + "/users/me", config);
          setUserData(userData.get);
          // localStorage.setItem("userData", userData);
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>This is login page.</h1>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#signInModal"
      >
        Sign in
      </button>

      <div
        className="modal fade"
        id="signInModal"
        tabIndex="-1"
        aria-labelledby="signInModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="signInModalLabel">
                Sign In
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body table">
              {/*username */}
              <div className="mb-2">
                <label htmlFor="registerUsername" className="mr-2 col-span-1">
                  Username
                </label>
                <input
                  name="registerUsername"
                  autoFocus
                  className="border-2"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                ></input>
              </div>
              {/*password */}
              <div className="mb-2">
                <label htmlFor="registerPassword" className="mr-2 col-span-1">
                  Password
                </label>
                <input
                  name="registerPassword"
                  className="border-2"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  clearInput();
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  login();
                  setTimeout(1000);

                  clearInput();
                }}
                data-bs-dismiss="modal"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
