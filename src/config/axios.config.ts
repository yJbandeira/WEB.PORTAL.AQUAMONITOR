import axios from "axios";

export const httpMqttApi = axios.create({
  baseURL: "https://tcc-api-mqtt.onrender.com/api",
  headers: {
    "Content-type": "application/json",
    'ngrok-skip-browser-warning': true
  }
});