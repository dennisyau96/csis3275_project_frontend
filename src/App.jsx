import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
axios.defaults.auth = true;

//import
import Login from "./Views/login/Login";
import SignUp from "./Views/signUp/SignUp";
import Owner from "./Views/Prolfile/Owner";
import Renter from "./Views/Prolfile/Renter";
import SystemAdmin from "./Views/systemAdmin/SystemAdmin";
import Home from "./Views/home/Home";
import Header from "./component/header/Header";
import Error from "./Views/Error/Error";
import OwnerDogList from "./Views/OwnerDogList/OwnerDogList";
import Booking from "./Views/Booking/Booking";
import Chatroom from "./Views/Chatroom/Chatroom";
import BookingApplication from "./Views/Booking/BookingApplication";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");
  const [token, setToken] = useState(
    sessionStorage.getItem("jwtToken")
      ? sessionStorage.getItem("jwtToken")
      : null
  );

  // function getUser() {
  //   token ? setLoggedIn(true) : null;
  // if(loggedIn){

  // }
  // }

  return (
    <>
      {/* <Toaster> */}
      <Header />
      <section className="m-2">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/renter" element={<Renter />} />
            <Route path="/owner" element={<Owner />} /> */}
            {/* <Route path="/notification" element={<Home />} /> */}
            <Route path="/booking" element={<Booking />} />
            <Route path="/dogs" />
            <Route path="/profile/owner" element={<Owner />} />
            <Route path="/profile/renter" element={<Renter />} />
            <Route path="/profile/owner/doglist" element={<OwnerDogList />} />
            <Route path="/admin" element={<SystemAdmin />} />
            <Route path="/bookingApplication" element={<BookingApplication/>}/>
            {/* <Route path="/chatroom/:username" element={<Chatroom chatroom={} />} /> */}
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </section>
      <Toaster position="bottom" />
    </>
  );
}

export default App;
