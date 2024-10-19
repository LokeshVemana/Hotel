import React, { useState } from "react";
import { GiLotusFlower } from "react-icons/gi";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios.get(`http://localhost:3000/users?phoneNumber=${phoneNumber}`)
        .then(response => {
          const user = response.data[0]; // Assuming enterNumber is unique
          if (user && user.password === password) {
            alert("Login Successfully!");
            navigate("/Home");
          } else {
            alert("Invalid phone number or password.");
          }
        })
        .catch(error => {
          console.error("Error fetching user:", error);
          alert("Error during login. Please try again.");
        });
    }
  };

  const validate = () => {
    if (!phoneNumber || !password) {
      alert("Please enter both phone number and password.");
      return false;
    }
    return true;
  };

  return (
    <div className="Login">
      <h1 className="Title">
        <GiLotusFlower />
        Lotus Hotels & Bookings
      </h1>
      <h3>
        Across 80 cities in <b>India</b>
      </h3>
      <p>
        <b>There’s a smarter way to LoTus around </b> Login with your phone
        number and <br></br>
        get exclusive access to discounts and savings on <b>LoTus</b> stays and
        with our many travel partners.
      </p>
      <form className="forms" onSubmit={handleSubmit}>
        <p className="form-title">Login to your account</p>
        <div className="input-container">
          <input
            type="number"
            placeholder="Enter number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit">
          Sign in
        </button>
        <p className="signup-link">
          No account? Register Now
          <Button variant="link">
            <Link className="nav-link active" to={"/Signup"}>
              Sign up
            </Link>
          </Button>
        </p>
      </form>
    </div>
  );
};

export default Login;
