import axios from "axios";

const BASE_URL = "https://test.api.weniv.co.kr/mall";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
