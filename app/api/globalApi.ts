import axios from "axios";

// https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com
export const globalApi = axios.create({
  baseURL: "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com",
  withCredentials: true,
});
