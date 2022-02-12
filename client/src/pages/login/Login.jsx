import "./Login.css";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/toast";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const toast = useToast();
  const navigate = useNavigate();

  const SubmitHandeler = async (e) => {
    e.preventDefault();
     if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/LoginDoctor",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("Info", JSON.stringify(data));
      navigate("/Doctor");
    } catch (err) {
      toast({
        title: "Login Successful",
        status: "error",
         description: err.response.data.message,
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

    }
  };

  return (
    <>
      <Header />
      <div className="login">
        <p className="loginTitle">Welcome Back !!!</p>
        <div className="log-div-container">
              <form className="loginForm">
                <label>Email</label>
                <input
                  type="text"
                  className="loginInput"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email..."
                />
                <label>Password</label>
                <input
                  type="password"
                  className="loginInput"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password..."
                />
                <button className="loginButton" onClick={SubmitHandeler}>
                  Login
                </button>
              </form>
              
                <Link to="/register" className="link log-text">
                <button className="loginRegisterButton">Register</button>
                </Link>

            <div className="log-img-div">
            </div>
        </div>
      </div>
    </>
  );
}
