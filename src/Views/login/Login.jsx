import axios from "axios";
import { baseURL } from "../../../constant/constant";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  async function login() {
    const data = await axios.post(baseURL + "/auth/login", {
      username: username,
      password: password,
    });
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
                  type="text"
                  value={password}
                  onClick={(e) => {
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
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => login()}
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
