import axios from "axios";
import url from "./urls";

export default axios.create({
  baseURL: url.moduleUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token") ?? undefined,
  },
});
