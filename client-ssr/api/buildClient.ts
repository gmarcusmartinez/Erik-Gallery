import axios from "axios";

const serverUrl = "/api";
const clientUrl = "/";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    return axios.create({ baseURL: serverUrl, headers: req.headers });
  } else {
    return axios.create({ baseURL: clientUrl });
  }
};

export default buildClient;
