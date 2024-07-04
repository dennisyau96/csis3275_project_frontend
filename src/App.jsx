import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

//import
import Login from "./Views/login/Login";
import SignUp from "./Views/signUp/SignUp";
import Owner from "./Views/owner/Owner";
import Renter from "./Views/renter/Renter";
import SystemAdmin from "./Views/systemAdmin/SystemAdmin";
import Home from "./Views/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/renter" element={<Renter />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/systemAdmin" element={<SystemAdmin />} />
      </Routes>
    </>
  );
}

export default App;
