import React from "react";

const List = (props) => {
  const sendRequest = () => {
    window.open("https://payment-stp.herokuapp.com/", "_blank");
    props.send_call_req(props.senderID, props.receiverID);
  };

  return (
    <>
      <div className="card custom-card-width m-1">
        <img
          src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg&ga=GA1.1.1515406099.1641945600"
          className="card-img-top"
          alt={props.name}
        />
        <div className="card-body text-center">
          <h3>{props.name}</h3>
          <h4 className="card-text font-weight-bold">{props.specialist}</h4>
          <h5 className="card-text">{props.degree}</h5>
          <h5 className="card-text font-weight-bold">{props.email}</h5>
          <button onClick={sendRequest} className="btn btn-info px-4 mt-2 ">
            Book Video Consult
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
