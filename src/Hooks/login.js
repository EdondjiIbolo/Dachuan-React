import axios from "axios";

const baseUrl = "https://api-deploy-production-5c13.up.railway.app/login";
const baseUrlSign = "https://api-deploy-production-5c13.up.railway.app/sign-up";
const baseVerify = "https://api-deploy-production-5c13.up.railway.app/verify";
const baseRecover = "https://api-deploy-production-5c13.up.railway.app/recover";
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
