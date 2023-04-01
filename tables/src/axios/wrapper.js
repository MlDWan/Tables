import axios from "axios";

export const wrapper = ({ method, url, data, query, extraHeaders }) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };
  const headers = {
    ...defaultHeaders,
    ...extraHeaders,
  };
  return axios({
    headers,
    method,
    url,
    data,
    params: query,
  });
};
