import React from "react";
import { useState } from "react";
import "./Mahan.css";
import Carousel from "react-bootstrap/Carousel";
// import Accordion from 'react-bootstrap/Accordion';
import { GiLotusFlower } from "react-icons/gi";
import { Card, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Mahan = () => {
  const [numRooms, setNumRooms] = useState(1);
  const [numAdults, setNumAdults] = useState(0);
  const [numChildren, setNumChildren] = useState(0);
  const [pricePerRoom] = useState(2000);
  const [totalPrice, setTotalPrice] = useState(pricePerRoom);

  const increment = (type) => {
    switch (type) {
      case "rooms":
        setNumRooms(numRooms + 1);
        setTotalPrice(totalPrice + pricePerRoom);
        break;
      case "adults":
        setNumAdults(numAdults + 1);
        setNumAdults("3");
        break;
      case "children":
        setNumChildren(numChildren + 1);
        setNumChildren("2");
        break;
      default:
        break;
    }
  };

  const decrement = (type) => {
    switch (type) {
      case "rooms":
        if (numRooms > 1) {
          setNumRooms(numRooms - 1);
          setTotalPrice(totalPrice - pricePerRoom);
        }
        break;
      case "adults":
        if (numAdults > 1) {
          setNumAdults(numAdults - 1);
        }
        break;
      case "children":
        if (numChildren > 0) {
          setNumChildren(numChildren - 1);
        }
        break;
      default:
        break;
    }
  };
  // const [index, setIndex] = React.useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };
  return (
    <div className="Residence">
      <Carousel>
        <Carousel.Item interval={5}>
          <img
            style={{ maxHeight: "400px" }}
            className="d-block w-100 "
            src="https://images.oyoroomscdn.com/uploads/hotel_image/206983/large/9053c82895f0270c.jpg"
            alt="Pic1"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            <p>
              LoTus Providers <GiLotusFlower />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "400px" }}
            className="d-block w-100 "
            src="https://images.oyoroomscdn.com/uploads/hotel_image/206983/large/228a436488fffaf2.jpg"
            alt="pic2"
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            <p>
              LoTus Providers <GiLotusFlower />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "400px" }}
            className="d-block w-100 "
            src="https://images.oyoroomscdn.com/uploads/hotel_image/206983/large/f60c19cf9f612ef9.jpg"
            alt="pic3"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            <p>
              LoTus Providers <GiLotusFlower />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "400px" }}
            className="d-block w-100 "
            src="https://images.oyoroomscdn.com/uploads/hotel_image/206983/large/d9ba5db08b124844.jpg"
            alt="pic4"
          />
          <Carousel.Caption>
            {/* <h3>Fourth slide label</h3> */}
            <p>
              LoTus Providers <GiLotusFlower />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "400px" }}
            className="d-block w-100 "
            src="https://images.oyoroomscdn.com/uploads/hotel_image/206983/large/8b5c97801a79667d.jpg"
            alt="pic5"
          />
          <Carousel.Caption>
            {/* <h3>Fifth slide label</h3> */}
            <p>
              LoTus Providers <GiLotusFlower />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "400px" }}
            className="d-block w-100 "
            src="https://images.oyoroomscdn.com/uploads/hotel_image/206983/large/a219a3c5a6ee3fc6.jpg"
            alt="pic6"
          />
          <Carousel.Caption>
            {/* <h3>Six slide label</h3> */}
            <p>
              LoTus Providers <GiLotusFlower />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="Res">
        <h2>Hotel Raj-Mahan Bangalore Near KR Puram</h2>
        <p style={{ color: "gray" }}>
        100, No 390, Old Madras Road, I L D Extension, 4th Main Road, K R Puram, Bangalore
        </p>
        <h3>Amenities</h3>
        <p>Free wifi</p>
        <p>AC</p>
        <p>TV</p>
        <select>
          See More
          <option disabled>See More</option>
          <option>
            <p>CCTV camaras</p>
          </option>
          <option>
            <p>Private entrance</p>
          </option>
          <option>
            <p>First-aid kit</p>
          </option>
          <option>
            <p>Fire extinguisher ,24/7 check-in</p>
          </option>
          <option>
            <p>Daily housekeeping</p>
          </option>
        </select>
        <br></br>
        <h3>About this LoTus</h3>
        <p>A place where a new life can njoy with their loving ones always.</p>
        <p>A space for new-age travelers.</p>
        <b>Location</b>
        <p>
        100, No 390, Old Madras Road, I L D Extension, 4th Main Road, K R Puram, Bangalore
        </p>
        <h3>Hotel policies </h3>
        Check-in 12:00 PM Check-out 11:00 AM
        <li>Couples are welcome</li>
        <p>
          Guests can check in using any local or outstation ID proof (PAN card
          not accepted).
        </p>
        <p>
          This hotel is serviced under the trade name of Blue Waters Lounge as
          per quality standards of LoTus
        </p>
        <h3>Guest Policies For LotusHotels And Homes In SouthIndia.</h3>
        <h4>General Booking Policy:</h4>
        <p>
          1.Certain destinations may have different travel guidelines for
          specific times during the year. Please abide by all laws and
          guidelines as applicable.
        </p>
        <p>
          2.Policies are booking specific and would be informed to the guest at
          the time of booking or upon Check-In.
        </p>
        <p>
          3.Reference to LoTus includes its affiliates, employees and officers.
          “Hotel” refers to the hotel or home in which you have made a valid
          booking through LoTus.
        </p>
        <u>
          <b>
            If you need any help in creating new booking LoTus Hotel Booking
            expert has a 24*7 support to help you around the clock. Please
            contact LoTus customer care number <q>0124-4208080</q>
          </b>
        </u>
        <div>
          <u>
            <b>
              If you need to cancel or change your reservation made through the
              LoTus app, website or call center, please contact LoTus customer
              care number <q>93139 31393</q>
            </b>
          </u>
          <p>
            4.The primary guest must be at least 18 years of age to be able to
            check into the hotel.
          </p>
          <p>
            5.It is mandatory for all guests to present valid photo
            identification at the time of check-in. According to government
            regulations, a valid Photo ID has to be carried by every person
            above the age of 18 staying at the hotel. The identification proofs
            accepted are Aadhar Card, Driving License, Voter ID Card, and
            Passport. Note that PAN card is not acceptable. Without an original
            copy of a valid ID, you will not be allowed to check-in.
          </p>
        </div>
      </div>
      <div className="footer">
        <h2>
          Hotel Raj-Mahan is one of the main branches of Lotus .Located at
          KR Puram ,Bangalore.
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Contact Us</h3>
              <p>100, No 390, Old Madras Road, I L D Extension, 4th Main Road, K R Puram, Bangalore, India</p>
              <p>Phone: +91 123456789</p>
              <p>Email: LotusHotels@gmail.com</p>
            </div>
            <div className="col-md-4">
              <h3>Explore</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/rooms">Rooms</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Social Media</h3>
              <ul className="social-icons">
                <ul>
                  <a href=" ">
                    <FaFacebook />
                  </a>
                </ul>
                <ul>
                  <a href="https://www.twitter.com/">
                    <FaTwitter />
                  </a>
                </ul>
                <ul>
                  <a href=" ">
                    <FaInstagram />
                  </a>
                </ul>
              </ul>
            </div>
          </div>
          <div>
            <h4>Locations:</h4>
            <ul>Hyderabad</ul>
            <ul>Bangalore</ul>
            <ul>Chennai</ul>
            <ul>kerala</ul>
            <ul>Vizag</ul>
          </div>
        </div>
        <div>
          <Card
            style={{
              width: "20rem",
              backgroundColor: " antiquewhite",
              position: "absolute",
              top: "500px",
              left: "900px"
            }}
          >
            
            <Card.Body className="Pricing">
              <Card.Title style={{color:"orange"}}>
                <GiLotusFlower />
                Hotel Raj-Mahan
              </Card.Title>
              <Card.Text style={{color:"gray"}}>
                <p>Lowest prices and good facilities provoded by LoTus</p>
                <div>
                  <div className="rooms">
                    <h3>Total Price: ${totalPrice}</h3>
                    <h3>Rooms</h3>
                    <button onClick={() => decrement("rooms")}>-</button>
                    <span>{numRooms}</span>
                    <button onClick={() => increment("rooms")}>+</button>
                  </div>
                  <div>
                    <h3>Adults</h3>
                    <button onClick={() => decrement("adults")}>-</button>
                    <span>{numAdults}</span>
                    <button onClick={() => increment("adults")}>+</button>
                  </div>
                  <div>
                    <h3>Children</h3>
                    <button onClick={() => decrement("children")}>-</button>
                    <span>{numChildren}</span>
                    <button onClick={() => increment("children")}>+</button>
                  </div>
                </div>
              </Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Mahan;
