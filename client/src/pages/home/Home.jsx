import "./home.css";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <Header />
      <div className="home text-center">
        <img
          className="home-img"
          src="https://cdn.dribbble.com/users/499731/screenshots/6197032/patient_experience.gif"
          alt="this is home page"
        ></img>
      </div>
      <div>
        <div className="d-flex justify-content-around align-items-center flex-column  ">
          <Link to="/register" className="text-home">
            <button className="btn-my btn-primary m-2" type="button">
              Register as Doctor
            </button>
          </Link>
          <Link to="/register_as_user" className="text-home">
            <button className="btn-my btn-primary m-2" type="button">
              Login as Patient
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
