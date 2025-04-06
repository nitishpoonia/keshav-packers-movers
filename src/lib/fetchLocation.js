// src/lib/fetchLocation.js
import Cookies from "js-cookie";
import { getLocation } from "../utils/getLocation";
import axios from "axios";

export async function fetchLocation() {
  const cachedCity = Cookies.get("userCity");
  if (cachedCity) {
    return cachedCity;
  }

  try {
    const ipResponse = await axios.get("https://api.ipify.org?format=json");
    const ip = ipResponse.data.ip;
    const fetchedCity = await getLocation(ip);
    Cookies.set("userCity", fetchedCity, { expires: 7 });
    return fetchedCity;
  } catch (error) {
    console.error("Error fetching IP or city:", error);
    return "India";
  }
}
