import React from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Userlogin from "./pages/loginUser/LoginUser";
import Patient from "./pages/patient/Patient";
import General from "./pages/ListDoc/General/General";
import Pediatrical from "./pages/ListDoc/Pediatrical/Pediatrical";
import Orthopedics from "./pages/ListDoc/Orthopedics/Orthopedics";
import Neurologist from "./pages/ListDoc/Neurologist/Neurologist";
import Dermatologist from "./pages/ListDoc/Dermatologist/Dermatologist";
import Cardiologist from "./pages/ListDoc/Cardiologist/Cardiologist";
import Docpage from "./pages/Docpage/MAIN/Docpage";
import Video from "./pages/Docpage/MAIN/video/Video";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/register_as_User" element={<Userlogin />} exact />
        {/* <Route path="/login_as_User" element={<Userlogin />} exact /> */}
        <Route path="/patient" element={<Patient />} exact />
        <Route path="/general" element={<General />} exact />
        <Route path="/pediatrical" element={<Pediatrical />} exact />
        <Route path="/orthopedics" element={<Orthopedics />} exact />
        <Route path="/neurologist" element={<Neurologist />} exact />
        <Route path="/dermatologist" element={<Dermatologist />} exact />
        <Route path="/cardiologist" element={<Cardiologist />} exact />
        <Route path="/Doctor" element={<Docpage />} exact />
        <Route path="/Videocall_room" element={<Video />} exact />
      </Routes>
    </Router>
  );
}

export default App;
