import axios from "axios";

export const ax = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  },
  withCredentials: true,
});
