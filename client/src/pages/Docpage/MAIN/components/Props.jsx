import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Props = (props) => {
  const navigate = useNavigate();
  const video_call = async () => {
    localStorage.setItem("patientPhone", props.phone);
    navigate("/Videocall_room");
    const id = props.putID;
    console.log("id is", id);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const res = await axios.put("/api/requests/deleterequest", { id }, config);
    console.log(res);
  };

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
        <div className="d-flex align-items-center">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            aria-label="..."
          />
          {props.name}
        </div>
        <button
          onClick={() => video_call(props.phone, props.roomid)}
          data-mdb-toggle="tooltip"
          title="Remove item"
          className="btn-vdo"
        >
          <i className="fas fa-video"></i>
        </button>
      </li>
    </>
  );
};

export default Props;
