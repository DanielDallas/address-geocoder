"use client";

import React, { useState } from "react";
import axios from "axios";

const AddressSearchForm = ({ onGeocodingResult }) => {
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          address
        )}&format=json`
      );

      if (response.data.length > 0) {
        const { lat, lon, display_name } = response.data[0];
        onGeocodingResult({ lat, lon, display_name });
      } else {
        // Handle no results found
      }
    } catch (error) {
      // Handle API request error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="my-4">
        <label className="block mb-2">Enter Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded ml-2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default AddressSearchForm;
