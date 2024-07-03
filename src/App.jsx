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
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/renter" element={<Renter />}></Route>
        <Route path="/owner" element={<Owner />}></Route>
        <Route path="/systemAdmin" element={<SystemAdmin />}></Route>
      </Routes>
    </>
  );
}

export default App;
