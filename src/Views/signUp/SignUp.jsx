import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { baseURL } from "../../../constant/constant";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const navigate = useNavigate();

  //register API function v.1
  // async function register1(type) {
  //   if (username == null || username == "") {
  //     return toast.error("Please input the username.");
  //   } else if (password == null || password == "") {
  //     return toast.error("Please input the password.");
  //   } else if (confirmPassword == null || confirmPassword == "") {
  //     return toast.error("Please input the password again.");
  //   } else if (email == null || email == "") {
  //     return toast.error("Please input the email.");
  //   } else if (password != confirmPassword) {
  //     return toast.error("The passwords do not match.");
  //   } else {
  //     try {
  //       const data = await axios.post(baseURL + "auth/register", {
  //         username: username,
  //         password: password,
  //         email: email,
  //         type: type,
  //       });
  //     } catch (err) {
  //       console.log(err);
  //       navigate(-1);
  //     }
  //   }
  // }

  //register API function v.2

  function clearInput() {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
  }

  async function register2(type) {
    if (password != confirmPassword) {
      return toast.error("Passwords do not match.");
    }
    try {
      const data = await axios.post(baseURL + "auth/register", {
        username: username,
        password: password,
        email: email,
        type: type,
      });

      if (data.sucess == false) {
        console.log(data.data.message);
        toast.error(data.data.message);
      } else {
        toast.success(data.data.message);
        console.log(data.data.message);
        clearInput();
      }
    } catch (err) {
      console.log(err);
    }
  }

  //component code
  return (
    <>
      <h1>This is sign up page.</h1>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#signUpModal"
        onClick={() => {
          clearInput();
        }}
      >
        Sign up
      </button>

      <div
        className="modal fade"
        id="signUpModal"
        tabIndex="-1"
        aria-labelledby="signUpModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="signUpModalLabel">
                Sign Up
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  clearInput();
                }}
              ></button>
            </div>
            <div className="modal-body table text-right">
              {/*username */}
              <div className="mb-2">
                <label htmlFor="registerUsername" className="mr-2 col-span-1">
                  Username
                </label>
                <input
                  name="registerUsername"
                  className="border-2"
                  type="text"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  value={username}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                ></input>
              </div>

              {/*confirm password */}
              <div className="mb-2">
                <label
                  htmlFor="registerConfirmPasword"
                  className="mr-2 col-span-1"
                >
                  Confirm Password
                </label>
                <input
                  name="registerConfirmPasword"
                  className="border-2"
                  type="password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  value={confirmPassword}
                ></input>
              </div>
              {/*First name */}
              <div className="mb-2">
                <label htmlFor="registerFirstName" className="mr-2 col-span-1">
                  First Name
                </label>
                <input
                  name="registerFirstName"
                  className="border-2"
                  type="text"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  value={firstName}
                ></input>
              </div>

              {/*Last name */}
              <div className="mb-2">
                <label htmlFor="registerLastName" className="mr-2 col-span-1">
                  Last Name
                </label>
                <input
                  name="registerLastName"
                  className="border-2"
                  type="text"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  value={lastName}
                ></input>
              </div>
              {/*email  */}
              <div className="mb-2">
                <label htmlFor="registerEmail" className="mr-2 col-span-1">
                  Email
                </label>
                <input
                  name="registerEmail"
                  className="border-2"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
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
                  register2("Owner");
                }}
                data-bs-dismiss="modal"
              >
                Register as Owner
              </button>
              <button
                type="button"
                className="btn bg-orange-200"
                onClick={() => register2("Renter")}
                data-bs-dismiss="modal"
              >
                Register as Renter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
