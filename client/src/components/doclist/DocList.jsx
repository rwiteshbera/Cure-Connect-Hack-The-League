import "./DocList.css";
import { Link, useNavigate } from "react-router-dom";
export default function Patient() {
  const navigate = useNavigate();
  const patientName = JSON.parse(localStorage.getItem("Info")).name;
  const logoutHandler = () => {
    localStorage.removeItem("Info");
    navigate("/");
  };
  return (
    <>
      <div className="patient-header">
        <h1 className="">Patient</h1>
        <h3 className="">Hello, {patientName}</h3>
        <button
          className="btn btn-info px-4 mx-4 text-white"
          onClick={logoutHandler}
        >
          Logout
        </button>
        <div className="elli1"></div>
        <div className="elli2"></div>
      </div>
      <div className="title-doctors">Doctors</div>
      <div className="main-container">
        <ul className="nav nav-fill nav__list">
          <li className="nav-item nav__items">
            <Link to="/general" className="nav-link">
              General Physician
            </Link>
          </li>
          <li className="nav-item nav__items">
            <Link to="/pediatrical" className="nav-link">
              Pediatricial
            </Link>
          </li>
          <li className="nav-item nav__items">
            <Link to="/neurologist" className="nav-link">
              Neurologist
            </Link>
          </li>
          <li className="nav-item nav__items">
            <Link to="/orthopedics" className="nav-link">
              Orthopedics
            </Link>
          </li>
          <li className="nav-item nav__items">
            <Link to="/cardiologist" className="nav-link">
              Cardiologist
            </Link>
          </li>
          <li className="nav-item nav__items">
            <Link to="/dermatologist" className="nav-link">
              Dermatologist
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
