import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

const HotelDetails = () => {
  const { id } = useParams(); // Use useParams hook to get the id parameter from URL
  const [hotels, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/hotels/${id}`);
        setHotel(response.data); // Assuming response.data has the details of the hotel
      } catch (error) {
        console.error("Error fetching hotel details:", error);
      }
    };

    fetchHotelDetails();
  }, [id]); // Include id in the dependency array to fetch new hotel details when id changes

  if (!hotels) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hotel-details">
      <h2>{hotels.name}</h2>
      <p>City: {hotels.city}</p>
      <p>Description: {hotels.description}</p>
      <p>Price: {hotels.price} /-</p>
      <img src={hotels.image} alt={hotels.name} />
    </div>
  );
};

export default HotelDetails;
