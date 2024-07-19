import axios from "axios";
import { baseURL } from "../../../constant/constant";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8082/api";
axios.defaults.withCredentials = false;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigator = useNavigate();

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

      const token = data.data.data.token;
      const tokenString = JSON.stringify(data.data.data.token);
      setToken((prev) => token);

      sessionStorage.removeItem("token");
      sessionStorage.setItem("token", tokenString);

      axios.defaults.headers.common = {
        Authorization: `Bearer ${tokenString}`,
      };
      if (token)
        try {
          const userData = await axios.get(baseURL + "/users/me", {
            headers: {
              Authorization: `${token}`,
            },
          });

          setUserData(JSON.stringify(userData.data));
          console.log(userData);
        } catch (err) {
          console.log(err);
        }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="m-20 p-10  bg-white rounded-xl text-center hover:shadow-2xl shadow-neutral-950">
        <div>
          <h1 className="text-4xl">Login for the latest dog rental </h1>
          <br />
          <button
            type="button"
            className="btn bg-amber-300 font-bold text-xl m-2 hover:bg-amber-200"
            data-bs-toggle="modal"
            data-bs-target="#signInModal"
          >
            Sign in
          </button>
        </div>
        <div className="mt-20 ">
          <h1>
            Do not have an account? Sign up now and hang out with some fluffy
            doggy!
          </h1>
          <br />
          <button className="btn bg-blue-500 font-bold text-xl m-2 text-white hover:bg-blue-400">
            <Link to="/signup">Sign up Now</Link>
          </button>
        </div>

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
      </div>
    </>
  );
}
export default Login;
