import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid, Slider, TextField } from "@mui/material";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [Hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/hotels")
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.log("error fetching data", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterHotels(event.target.value);
  };

  const filterHotels = (term) => {
    if (term === "") {
      setFilteredHotels([]);
    } else {
      const filtered = Hotels.filter((hotel) =>
        hotel.city.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredHotels(filtered);
    }
  };

  // Display filtered hotels if search term is entered
  const displayHotels = searchTerm === "" ? Hotels : filteredHotels;

  return (
    <div className="Home">
      <aside>
        <h3>Filter</h3>
        <input
          type="text "
          placeholder="Enter the City"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <h3>Price</h3>
        <input type="range" id="vol" name="vol" min="1000" max="10000" />
      </aside>
      <div className="body">
        <div className="card-body">
          <div className="card" key={Hotels.id}>
            <div className="container">
              <h4>
                <b>Hotel residence: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/196886/large/fdf11f5875f59f3f.jpg"
              alt="Hotel residence"
            />
            <p>Price:1200rs/-</p>
            <button>
            <Link className="nav-link active" to={"/residence"}>
                  Book Now
                </Link>
            </button>
          </div>
        
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Bhrundha: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/110830/large/5a808252142cfc23.jpg"
              alt="pic 2"
            />
            <p>Price:2000rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Bhrunda"}>
                Book Now
              </Link>
            </button>
          </div>
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Raj: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/105993/medium/qbxvttwtbodp.jpg"
              alt="pic 3"
            />
            <p>Price:1500rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Raj"}>
                Book Now
              </Link>
            </button>
          </div>
        </div>
        <div className="card-body2">
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Lakshyu: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/227536/medium/pwbdbgxqpodd.jpg"
              alt="pic 4"
            />
            <p>Price:1800rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Lakshyu"}>
                Book Now
              </Link>
            </button>
          </div>
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Raj-Ninjas: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/227536/medium/rfswtivnxorx.jpg"
              alt="pic 5"
            />
            <p>Price:1500rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Ninja"}>
                Book Now
              </Link>
            </button>
          </div>
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Raj-Mahan: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/227536/medium/ymrcdrrmgyqv.jpg"
              alt="pic 6"
            />
            <p>Price:2000rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Mahan"}>
                Book Now
              </Link>
            </button>
          </div>
        </div>
        <div className="card-body3">
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Bharat: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/88914/medium/4052182a77eae71f.jpg"
              alt="pic 7"
            />
            <p>Price:1500rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Bharat"}>
                Book Now
              </Link>
            </button>
          </div>
          <div className="card">
            <div className="container">
              <h4>
                <b>Grand-New: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/230018/medium/rcxxsnduapoy.jpg"
              alt="pic 8"
            />
            <p>Price:5000rs/-</p>
            <button>
              <Link className="nav-link active" to={"/GrandNew"}>
                Book Now
              </Link>
            </button>
          </div>
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Thunder: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/16874/medium/233c8a6c93f0788e.jpg"
              alt="pic 9"
            />
            <p>Price:1800rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Thunder"}>
                Book Now
              </Link>
            </button>
          </div>
        </div>
        <div className="card-body4">
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Mersi: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/242558/large/myoqdpdxwfhf.jpg"
              alt="pic 10"
            />
            <p>Price:5000rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Mersi"}>
                Book Now
              </Link>
            </button>
          </div>
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Finco: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/190017/large/89eb827e50aa6b1b.jpg"
              alt="pic 11 "
            />
            <p>Price:5000rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Fico"}>
                Book Now
              </Link>
            </button>
          </div>
          <div className="card">
            <div className="container">
              <h4>
                <b> Heaven's New: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/104215/medium/ee7939638caa86d1.jpg"
              alt="pic 12"
            />
            <p>Price:8000rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Heavens"}>
                Book Now
              </Link>
            </button>
          </div>
        </div>
        <div className="card-body5">
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Wanak: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/201925/large/dhwyipqancdq.jpg"
              alt="pic 13"
            />
            <p>Price:5000rs/-</p>
            <button>
              {" "}
              <Link className="nav-link active" to={"/Wanak"}>
                Book Now
              </Link>
            </button>
          </div>
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Metric: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/218716/large/pjhgswotobyx.jpg"
              alt="pic 14"
            />
            <p>Price:10000rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Metric"}>
                Book Now
              </Link>
            </button>
          </div>
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Atras: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/88914/large/5ada17b66cb040b3.jpg"
              alt="pic 15"
            />
            <p>Price:5000rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Atras"}>
                Book Now
              </Link>
            </button>
          </div>
        </div>
        <div className="card-body6">
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Bhrunda: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/113888/medium/835069c02381cf22.jpg"
              alt="pic 16"
            />
            <p>Price:2500rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Bhrunda2"}>
                Book Now
              </Link>
            </button>
          </div>
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Atras: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/109936/medium/qeyfvfslevsp.jpg"
              alt="pic 17"
            />
            <p>Price:2000rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Atras2"}>
                Book Now
              </Link>
            </button>
          </div>
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Mantra: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/112610/medium/ccerctkvtsws.jpg"
              alt="pic 18"
            />
            <p>Price:3500rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Mantra"}>
                Book Now
              </Link>
            </button>
          </div>
        </div>
        <div className="card-body7">
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Munnar: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/17728/medium/1da223f96961ddf1.jpg"
              alt="pic 19"
            />
            <p>Price:2000rs/-</p>
            <button>
              <Link className="nav-link active" to={"/munnar"}>
                Book Now
              </Link>
            </button>
          </div>
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Bhrunda: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/235109/medium/cvlytaghmixh.jpg"
              alt="pic 20"
            />
            <p>Price:3500rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Bhrunda3"}>
                Book Now
              </Link>
            </button>
          </div>
          <div className="card">
            <div className="container">
              <h4>
                <b>Hotel Mersi: LoTus</b>
              </h4>
              <p>Comfort & Flexible</p>
            </div>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/218891/medium/eotsirelmalr.jpg"
              alt="pic 21"
            />
            <p>Price:1500rs/-</p>
            <button>
              <Link className="nav-link active" to={"/Mersi2"}>
                Book Now
              </Link>
            </button>
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default Home;
