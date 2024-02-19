import axios from "axios";

const baseUrl = "http://localhost:3000/login";
const baseUrlSign = "http://localhost:3000/sign-up";
const login = async (credentials) => {
  const { data } = await axios.post(baseUrl, credentials);
  return data;
};
const signup = async (credentials) => {
  const { data } = await axios.post(baseUrlSign, credentials);
  return data;
};

export default { login, signup };
