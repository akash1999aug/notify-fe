import axios from "axios";

// Common Instance
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {},
});

export default instance;
