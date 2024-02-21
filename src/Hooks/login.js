import axios from "axios";

const baseUrl = "http://localhost:3000/login";
const baseUrlSign = "http://localhost:3000/sign-up";
const baseVerify = "http://localhost:3000/verify";
const baseRecover = "http://localhost:3000/recover";
const login = async (credentials) => {
  const { data } = await axios.post(baseUrl, credentials);
  return data;
};
const signup = async (credentials) => {
  const { data } = await axios.post(baseUrlSign, credentials);
  return data;
};
const verifyCode = async (credentials) => {
  const { data } = await axios.post(baseVerify, credentials);
  return data;
};
const recoverPassword = async (credentials) => {
  const { data } = await axios.post(baseRecover, credentials);
  return data;
};
export default { login, signup, verifyCode, recoverPassword };
