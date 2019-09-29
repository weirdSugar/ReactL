import axios from "axios";

const axio = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 6000
});

axio.interceptors.request.use(
  config => config,
  err => {
    console.error("reqError-->", err);
  }
);
axio.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return res.data;
    } else {
      console.error(res);
    }
  },
  err => {
    console.error("resError-->", err);
  }
);

export function getBanner() {
  return axio.get("/banner");
}
