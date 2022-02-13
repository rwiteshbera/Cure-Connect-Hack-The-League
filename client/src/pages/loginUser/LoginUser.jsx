import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SawoLogin from "sawo-react";
import axios from "axios";
import "./sawo.css";

const Userlogin = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/patient");
    }
  });
  const Apicall = async (payload) => {
    if (payload) {
      if (payload.customFieldInputValues.Name && payload.identifier) {
        const name = payload.customFieldInputValues.Name;
        const phone = payload.identifier;
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const { data } = await axios.post(
            "/api/user/login",
            { name, phone },
            config
          );
          if (data.msg) {
            console.log(data.msg);
          } else {
            localStorage.setItem("Info", JSON.stringify(data));
            localStorage.setItem("type", "Patient");
            setUserLoggedIn(true);
          }
        } catch (err) {
          console.log(err);
          setUserLoggedIn(false);
        }
      }
    }
  };

  function sawoLoginCallback(payload) {
    Apicall(payload);
  }

  const sawoConfig = {
    onSuccess: sawoLoginCallback, //required,
    identifierType: "phone_number_sms", //required, must be one of: 'email', 'phone_number_sms',
    apiKey: "e00d0a49-98ff-473e-8676-07ff7cd36072",
    containerHeight: "300px", // the login container height, default is 300px
  };

  return (
    <div>
      <SawoLogin config={sawoConfig} />
    </div>
  );
};

export default Userlogin;
