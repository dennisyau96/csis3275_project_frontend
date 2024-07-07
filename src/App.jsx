import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
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

function App() {
  return (
    <>
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
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </section>
    </>
  );
}

export default App;
