import "./Register.css";
import Header from "../../components/header/Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [degree, setdegree] = useState();
  const [specialist, setSpecialist] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const SubmitHandeler = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !password ||
      !confirmpassword ||
      !degree ||
      !specialist
    ) {
      return;
    }
    if (password !== confirmpassword) {
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
          degree,
          specialist,
        },
        config
      );
      localStorage.setItem("Info", JSON.stringify(data));
      navigate("/Doctor");
    } catch (err) {}
  };

  return (
    <>
      <Header />
      <div className="register">
        <p className="registerTitle">Register with us!</p>
        <div className="reg-div-container">
          <div className="reg-img-div"></div>
          <div className="form-div">
            <form className="registerForm">
              <label id="doctors-name-label">Doctor's Name</label>
              <input
                type="text"
                name="name"
                className="registerInput"
                placeholder="Enter your name..."
                onChange={(e) => setName(e.target.value)}
              />
              <label>Degree</label>
              <input
                className="registerInput"
                type="text"
                name="name"
                placeholder="Enter your Degree"
                onChange={(e) => setdegree(e.target.value)}
                required
              />
              <label>Specialist</label>
              <input
                className="registerInput"
                type="text"
                name="specialist"
                placeholder="Specialist in"
                onChange={(e) => setSpecialist(e.target.value)}
                required
              />
              <label>Email</label>
              <input
                className="registerInput"
                type="text"
                name="email"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Password</label>
              <input
                className="registerInput"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Confirm Password</label>
              <input
                className="registerInput"
                type="password"
                onChange={(e) => setConfirmpassword(e.target.value)}
                required
              />
              <br />
              <button className="registerButton" onClick={SubmitHandeler}>
                Register
              </button>
            </form>
            <Link to="/login" className="link reg-text">
              <button className="loginRegisterButton">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
