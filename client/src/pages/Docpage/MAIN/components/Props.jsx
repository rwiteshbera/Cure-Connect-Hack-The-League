import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Props = (props) => {
  const navigate = useNavigate();
  const video_call = async (phone, msg) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.post("/api/requests/sentroomID", { phone, msg }, config);
    navigate("/Videocall_room");
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
          onClick={() => {
            video_call(props.phone, props.roomid);
          }}
          data-mdb-toggle="tooltip"
          title="Remove item"
        >
          <i className="fas fa-video"></i>
        </button>
      </li>
    </>
  );
};

export default Props;
