import React, { useState } from "react";
import axios from "axios";

interface GeocodingResult {
  lat: string;
  lon: string;
  display_name: string;
}

interface AddressSearchFormProps {
  onGeocodingResult: (result: GeocodingResult) => void;
}

const AddressSearchForm = ({ onGeocodingResult }: AddressSearchFormProps) => {
  const [address, setAddress] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
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
        console.log("No results found.");
      }
    } catch (error) {
      // Handle API request error
      console.error("API request error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="">
        <h1 className="lg:mb-20 sm:mb-4 text-lime-400 text-4xl font-bold tracking-tight sm:text-6xl">
          Address Geocoder
        </h1>
        <label className="block mb-1">Enter Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border rounded border-lime-500 px-4 py-2"
        />
        <button
          type="submit"
          className="mt-4 bg-lime-800 text-white px-4 py-2 rounded ml-1"
        >
          LookUp
        </button>
      </form>
    </div>
  );
};

export default AddressSearchForm;
