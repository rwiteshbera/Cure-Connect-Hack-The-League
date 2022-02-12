import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "./components/Nav";
import List from "./components/List";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Docpage.css";
import axios from "axios";
import io from "socket.io-client";
const ENDPOINT = "http://localhost:5000";
var socket;
function Docpage() {
  const [name, setName] = useState();
  const [email, setemail] = useState();
  const [id, setid] = useState();
  const [specialist, setspecialist] = useState();
  const [degree, setdegree] = useState();
  const [data, setdata] = useState([]);
  const [socketid, setsocketid] = useState([]);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("Info");
    navigate("/");
  };

  const fetch_all_req = async (tokens) => {
    try {
      socket.on("gotreq", async (newdata) => {
        console.log(newdata);
        const config = { headers: { Authorization: `Bearer ${tokens}` } };
        const { data } = await axios.get("/api/user/GetAllReq", config);
        setdata(data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Info"));
    setid(user._id);
    setName(user.name);
    setemail(user.email);
    setdegree(user.degree);
    setspecialist(user.specialist);
    if (!user) {
      navigate("/");
    }
    socket = io(ENDPOINT);
    socket.emit("setup", user._id);
    socket.on("getroomID", (id) => {
      setsocketid(id);
    });
    fetch_all_req(user.token);
  }, []);

  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem("Info"));
    const config = { headers: { Authorization: `Bearer ${user.token}` } };
    const { data } = await axios.get("/api/user/GetAllReq", config);
    setdata(data);
  });

  return (
    <>
      <div className="App">
        <TopBar />

        <div className="docpage justify-content-center mt-2 flex-wrap">
          <Profile
            name={name}
            email={email}
            degree={degree}
            specialist={specialist}
          />
          <div className="list-container">
            <List key={id} requests={data} roomid={socketid} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Docpage;
