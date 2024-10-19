import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import HotelDetails from "./Components/Rooms/HotelDetails";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Residence from "./Components/Rooms/Residence";
import Bhrunda from "./Components/Rooms/Bhrundha/Bhrunda";
import Raj from "./Components/Rooms/Raj";
import Lakshyu from "./Components/Rooms/Lakshyu";
import Ninja from "./Components/Rooms/Ninja";
import Mahan from "./Components/Rooms/Mahan";
import Bharat from "./Components/Rooms/Bharat";
import Metric from "./Components/Rooms/Metric";
import Fico from "./Components/Rooms/Fico";
import Wanak from "./Components/Rooms/Wanak";
import Atras from "./Components/Rooms/Atras";
import Atras2 from "./Components/Rooms/Atras2";
import Heavens from "./Components/Rooms/Heavens";
import GrandNew from "./Components/Rooms/GrandNew";
import Thunder from "./Components/Rooms/Thunder";
import Mersi from "./Components/Rooms/Mersi";
import Mersi2 from "./Components/Rooms/Mersi2";
import Mantra from "./Components/Rooms/Mantra";
import Bhrunda2 from "./Components/Rooms/Bhrunda2";
import Bhrunda3 from "./Components/Rooms/Bhrunda3";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Munnar from "./Components/Rooms/munnar";
const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/hotel/:id" element={<HotelDetails/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Residence" element={<Residence />} />
        <Route path="/Bhrunda" element={<Bhrunda />} />
        <Route path="/Raj" element={<Raj />} />
        <Route path="/Lakshyu" element={<Lakshyu />} />
        <Route path="/Ninja" element={<Ninja />} />
        <Route path="/Mahan" element={<Mahan />} />
        <Route path="/Bharat" element={<Bharat />} />
        <Route path="/Metric" element={<Metric />} />
        <Route path="/Fico" element={<Fico />} />
        <Route path="/Wanak" element={<Wanak />} />
        <Route path="/Atras" element={<Atras />} />
        <Route path="/Atras2" element={<Atras2 />} />
        <Route path="/Heavens" element={<Heavens />} />
        <Route path="/GrandNew" element={<GrandNew />} />
        <Route path="/Thunder" element={<Thunder />} />
        <Route path="/Mersi" element={<Mersi />} />
        <Route path="/Mersi2" element={<Mersi2 />} />
        <Route path="/Mantra" element={<Mantra />} />
        <Route path="/Munnar" element={<Munnar />} />
        <Route path="/Bhrunda2" element={<Bhrunda2 />} />
        <Route path="/Bhrunda3" element={<Bhrunda3 />} />
        <Route path="/WelcomePage" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
