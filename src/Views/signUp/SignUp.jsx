import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { baseURL } from "../../../constant/constant";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://localhost:8082/api";
axios.defaults.withCredentials = false;

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  function clearInput() {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setPhone("");
  }

  async function register() {
    if (password != confirmPassword) {
      return toast.error("Passwords do not match.");
    }
    try {
      const data = await axios.post(baseURL + "/auth/register", {
        username: username,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        role: role,
      });
      if (data.data.success == true) {
        clearInput();
        navigate("/");
      }
      toast(data.data.message);
    } catch (err) {
      console.log(err);
    }
  }

  //component code
  return (
    <>
      <div className="m-20 p-10 bg-white rounded-xl text-center hover:shadow-2xl shadow-neutral-950">
        <div>
          <h1 className="text-4xl">
            Sign up now and hang out with some fluffy doggy.
          </h1>
          <br />
          <button
            type="button"
            className="btn bg-orange-200 font-bold text-xl m-2 text-grey hover:bg-blue-300"
            data-bs-toggle="modal"
            data-bs-target="#signUpModal"
            onClick={() => {
              clearInput();
            }}
          >
            Sign up
          </button>
        </div>

        <div className="mt-20">
          {" "}
          <h1>Already have an account? Sign in and make appointment!</h1>
          <br />
          <button className="  font-bold text-xl m-2 hover:text-amber-800 underline">
            <Link to="/login">Sign in Now</Link>
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
                    <br />
                    <span>All the field are mandatory.</span>
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
                    <label
                      htmlFor="registerUsername"
                      className="mr-2 col-span-1"
                    >
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
                    <label
                      htmlFor="registerPassword"
                      className="mr-2 col-span-1"
                    >
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
                    <label
                      htmlFor="registerFirstName"
                      className="mr-2 col-span-1"
                    >
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
                    <label
                      htmlFor="registerLastName"
                      className="mr-2 col-span-1"
                    >
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
                      type="text"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></input>
                  </div>
                  {/* phone */}
                  <div className="mb-2">
                    <label htmlFor="registerPhone" className="mr-2 col-span-1">
                      Phone
                    </label>
                    <input
                      name="registerPhone"
                      className="border-2"
                      type="text"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>

                <div className="modal-footer justify-start flex flex-wrap">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    // onClick={() => {
                    //   clearInput();
                    // }}
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setRole("owner");
                      setTimeout(1000);
                      register();
                    }}
                    // data-bs-dismiss="modal"
                  >
                    Register as Owner
                  </button>
                  <button
                    type="button"
                    className="btn bg-orange-200 hover:bg-orange-300"
                    onClick={() => {
                      setRole("renter");
                      setTimeout(1000);
                      register();
                    }}
                    // data-bs-dismiss="modal"
                  >
                    Register as Renter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
