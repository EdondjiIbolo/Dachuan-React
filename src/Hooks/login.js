import axios from "axios";

// const baseUrl = "https://api-deploy-production-5c13.up.railway.app/login";
// const baseUrlSign = "https://api-deploy-production-5c13.up.railway.app/sign-up";
// const baseVerify = "https://api-deploy-production-5c13.up.railway.app/verify";
// const baseRecover = "https://api-deploy-production-5c13.up.railway.app/recover";
// const baseContact = "https://api-deploy-production-5c13.up.railway.app/contact";
// const SendFileURL =
//   "https://api-deploy-production-5c13.up.railway.app/send-file";
const baseUrl = "http://localhost:3000/login";
const baseUrlSign = "http://localhost:3000/sign-up";
const baseVerify = "http://localhost:3000/verify";
const baseRecover = "http://localhost:3000/recover";
const baseContact = "http://localhost:3000/message-contact";
const SendFileURL = "http://localhost:3000/new-quote";
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
const contactMessage = async (credentials) => {
  const { data } = await axios.post(baseContact, credentials);
  return data;
};
const sendFile = async (credentials) => {
  const { data } = await axios.post(SendFileURL, credentials);
  return data;
};
const sendChanges = async (credentials) => {
  const { data } = await axios.post(
    "http://localhost:3000/assistant-changes",
    credentials
  );
  return data;
};
const createQuote = async (credentials) => {
  const { data } = await axios.post(
    "http://localhost:3000/new-quote",
    credentials
  );
  return data;
};
const customQuote = async (credentials) => {
  const { data } = axios.post("http://localhost:3000/send-quote", credentials);
  return data;
};
export default {
  login,
  signup,
  verifyCode,
  recoverPassword,
  contactMessage,
  sendFile,
  sendChanges,
  createQuote,
  customQuote,
};
