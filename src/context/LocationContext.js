// src/context/LocationContext.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { fetchLocation } from "../lib/fetchLocation";

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [city, setCity] = useState("India");

  useEffect(() => {
    const getCity = async () => {
      const fetchedCity = await fetchLocation();
      setCity(fetchedCity);
    };

    getCity();
  }, []);

  return (
    <LocationContext.Provider value={{ city }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}
