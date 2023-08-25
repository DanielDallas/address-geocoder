"use client";

import React, { useState } from "react";
import AddressSearchForm from "./components/AddressSearchForm";

interface GeocodingResult {
  lat: string;
  lon: string;
  display_name: string;
}

export default function SearchPage() {
  const [geocodingResult, setGeocodingResult] =
    useState<GeocodingResult | null>(null);

  const handleGeocodingResult = (result: GeocodingResult) => {
    setGeocodingResult(result);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <AddressSearchForm onGeocodingResult={handleGeocodingResult} />
        {geocodingResult && (
          <div className="lg:m-20 p-6">
            <h2 className="lg:text-center text-xl font-semibold mb-2 text-lime-400">
              <hr className="mb-4" />
              Lookup Result:
            </h2>
            <p className="lg:text-center">
              <span className="font-semibold">Address:</span>{" "}
              {geocodingResult.display_name}
            </p>
            <p className="lg:text-center">
              <span className="font-semibold">Latitude: </span>{" "}
              {geocodingResult.lat}
            </p>
            <p className="lg:text-center">
              <span className="font-semibold">Longitude: </span>{" "}
              {geocodingResult.lon}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
