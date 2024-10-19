import React, { useState } from "react";
import "./Navbar.css";
import { GiLotusFlower } from "react-icons/gi";
import { IoLogInSharp } from "react-icons/io5";
import { ImHome3 } from "react-icons/im";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8000/hotels`,
        {
          params: {
            term: searchTerm.trim()
          }
        }
      );
      console.log("Search results:", response.data);
      // Example: navigate to search results page
      window.location.href = `/search?term=${searchTerm.trim()}`;
    } catch (error) {
      console.error("Error fetching search results:", error);
      // Handle error, e.g., show error message to user
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">
          <GiLotusFlower />
          LoTus Hotels
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to={"/Home"}>
                <ImHome3 />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/Login"}>
                <IoLogInSharp />
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
