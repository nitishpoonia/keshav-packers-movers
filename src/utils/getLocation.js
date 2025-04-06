// src/utils/getLocation.js
import axios from "axios";

export async function getLocation(ip) {
  try {
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    return response.data.city || "India";
  } catch (error) {
    return "India";
  }
}
