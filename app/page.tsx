"use client";

import React, { useState } from "react";
import AddressSearchForm from "./components/AddressSearchForm";

export default function SearchPage() {
  const [geocodingResult, setGeocodingResult] = useState(null);

  const handleGeocodingResult = (result) => {
    setGeocodingResult(result);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Geocoding App</h1>
      <AddressSearchForm onGeocodingResult={handleGeocodingResult} />
      {geocodingResult && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Geocoding Result:</h2>
          <p>Address: {geocodingResult.display_name}</p>
          <p>Latitude: {geocodingResult.lat}</p>
          <p>Longitude: {geocodingResult.lon}</p>
        </div>
      )}
    </div>
  );
}
