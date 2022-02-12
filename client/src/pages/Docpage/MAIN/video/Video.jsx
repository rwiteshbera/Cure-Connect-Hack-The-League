import React, { useContext, useState } from "react";
import { SocketContext } from "./SocketContext";
import { Button, Container, Row, Col } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

const Video = () => {
  const {
    me,
    name,
    setName,
    callAccepted,
    myVideo,
    userVideo,
    callUser,
    leaveCall,
    callEnded,
    stream,
    call,
    answerCall,
  } = useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");
  const [muteBtnText, setMuteBtnText] = useState("Mute Audio");

  // Button to mute audio
  const MuteUnmute = () => {
    if (muteBtnText === "Mute Audio") {
      setMuteBtnText("Unmute");
      stream.getAudioTracks()[0].enabled = false;
    } else if (muteBtnText === "Unmute") {
      setMuteBtnText("Mute Audio");
      stream.getAudioTracks()[0].enabled = true;
    }
  };

  const callFunction = () => {
    let idInput = document.getElementById("enter-id").value;
    if (name === "") {
      alert("Enter your name.");
    } else {
      callUser(idToCall);
    }
  };

  return (
    <div className="main">
      <h4 id="title">HealthCare Video Conference</h4>

      {/* Incoming Call Panel  */}
      <div className="notification">
        {call.isReceivedCall && !callAccepted && (
          <div>
            <h3>{call.name} is calling.</h3>
            <Button className="btn btn-success" onClick={answerCall}>
              Answer
            </Button>
          </div>
        )}
      </div>

      <div className="videos">
        {/* My Own Video */}
        {stream && (
          <div className="myvideo">
            <p>{name || ""}</p>
            <video playsInline muted={true} autoPlay ref={myVideo}></video>
          </div>
        )}
        {/* User's Video */}
        {callAccepted && !callEnded && (
          <div className="uservideo">
            <p>{call.name || "Name"}</p>
            <video
              playsInline
              // muted={true}
              autoPlay
              ref={userVideo}
            ></video>
          </div>
        )}
      </div>

      <div className="box">
        <div className="options">
          {callAccepted && (
            <Button className="mute-button" onClick={MuteUnmute}>
              {muteBtnText}
            </Button>
          )}
          <form action="" noValidate autoComplete="off">
            <input
              placeholder="Your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CopyToClipboard text={me}>
              <Button className="button">Copy Id</Button>
            </CopyToClipboard>

            <input
              type="text"
              id="enter-id"
              onChange={(e) => setIdToCall(e.target.value)}
              value={idToCall}
              placeholder="Enter meeting id to call"
            />

            {callAccepted && !callEnded ? (
              <Button className="button btn btn-danger" onClick={leaveCall}>
                Hang Up
              </Button>
            ) : (
              <Button
                className="button btn btn-primary"
                onClick={() => {
                  callFunction();
                }}
              >
                Call
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Video;
