import React, { useState } from "react";
import "./Sign.css";
import { GiLotusFlower } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !phoneNumber.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }
    if (phoneNumber.trim().length !== 10) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }
    if (password.length < 4) {
      alert("Password must contain at least 4 letters");
      return;
    } else if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }
    axios
      .post("http://localhost:3000/users", {
        firstName,
        lastName,
        phoneNumber,
        password,
      })
      .then((response) => {
        console.log("Signup successful with:", response.data);
        setError(""); // Clear any previous error
        alert("Signup successfully"); // Notify user about successful signup
        navigate("/Login"); // Redirect to login page after successful signup
      })
      .catch((error) => {
        console.log("signup failed", error);
        setError("signup failed.Please try again");
      });
  };

  return (
    <div className="background">
      <h1>
        <GiLotusFlower />
        <b>LoTus</b>
      </h1>
      <h1>
        Welcome to the <b>South Indian's favourite</b> Hotel Bookings
      </h1>
      <h3 className="text">We appreciate your time and interest.</h3>
      <h3 className="text">
        Join with us :- <strong>Your Safety is our responsibility..!</strong>
      </h3>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input
              placeholder=""
              type="text"
              className="input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              placeholder=""
              type="text"
              className="input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input
            placeholder=""
            type="tel"
            className="input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <span>Number</span>
        </label>

        <label>
          <input
            placeholder=""
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>
        <label>
          <input
            placeholder=""
            type="password"
            className="input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span>Confirm password</span>
        </label>
        {error && <p className="error-message">{error}</p>}
        <button className="submit" type="submit">
          Submit
        </button>
        <p>Already account?: <Link className="nav-link-active" to={"/Login"}>Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
