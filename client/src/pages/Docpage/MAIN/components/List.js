import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./topbar.css";
import "./List.css";
import Props from "./Props";

export default function List(props) {
  return (
    <>
      <div className="container py-4 waiting-list-custom">
        <h6 className="mb-4">Patients Waiting List</h6>
        <ul className="list-group mb-0">
          {props.requests.length > 0 &&
            props.requests.map((req, i) => {
              return (
                <Props
                  key={i}
                  name={req.sender.name}
                  phone={req.sender.phone}
                  roomid={props.roomid}
                />
              );
            })}
        </ul>
      </div>
    </>
  );
}
