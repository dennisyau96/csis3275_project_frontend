import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { createContext, useEffect, useState, useContext } from "react";
import Forum from "./Views/Forum/Forum";
import { Toaster } from "react-hot-toast";
// axios.defaults.auth = true;

// export const userContext = createContext();

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
import Footer from "./component/Footer/Footer";
export default function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [username, setUsername] = useState("");
  // const [userType, setUserType] = useState("");

  // useEffect(() => {
  //   const userDataJSON = JSON.parse(localStorage.getItem("userData"));
  //   if (userDataJSON.success) {
  //     setLoggedIn((prev) => true);
  //     setUsername((prev) => JSON.stringify(userDataJSON.data.data.username));
  //     setUserType((prev) => setUserType(userDataJSON.data.data.role));
  //   } else {
  //     setLoggedIn((prev) => false);
  //     setUsername((prev) => "");
  //     setUserType((prev) => "");
  //   }
  // }, []);

  return (
    <>
      <Header />
      <section className="m-2 h-100">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forum" element={<Forum />} />

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
            <Route
              path="/bookingApplication"
              element={<BookingApplication />}
            />
            {/* <Route path="/chatroom/:username" element={<Chatroom chatroom={} />} /> */}
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </section>
      <Footer />
      <Toaster position="bottom-center" toastOptions={{ duration: 1000 }} />
    </>
  );
}
