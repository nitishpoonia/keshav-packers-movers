// src/components/LocationFetcher.js
"use client";

import { useState, useEffect } from "react";
import { fetchLocation } from "../lib/fetchLocation";
import Header from "./Header";

export default function LocationFetcher({ children }) {
  const [city, setCity] = useState("India");

  useEffect(() => {
    const getCity = async () => {
      const fetchedCity = await fetchLocation();
      setCity(fetchedCity);
    };

    getCity();
  }, []);

  return (
    <>
      <Header city={city} />
      {children}
    </>
  );
}
