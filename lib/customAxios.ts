import axios from "axios";
import Token from "./Token";

const customAxios = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: Token.getToken("token"),
  },
});

export default customAxios;
