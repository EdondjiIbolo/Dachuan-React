import axios from "axios";

// const baseUrl = "https://api-deploy-production-5c13.up.railway.app/login";
// const baseUrlSign = "https://api-deploy-production-5c13.up.railway.app/sign-up";
// const baseVerify = "https://api-deploy-production-5c13.up.railway.app/verify";
// const baseRecover = "https://api-deploy-production-5c13.up.railway.app/recover";
// const baseContact = "https://api-deploy-production-5c13.up.railway.app/contact";
// const SendFileURL =
//   "https://api-deploy-production-5c13.up.railway.app/send-file";
const baseUrl = "https://api-chuantai-dev-dbab.4.us-1.fl0.io/login";
const baseUrlSign = "https://api-chuantai-dev-dbab.4.us-1.fl0.io/sign-up";
const baseVerify = "https://api-chuantai-dev-dbab.4.us-1.fl0.io/verify";
const baseRecover = "https://api-chuantai-dev-dbab.4.us-1.fl0.io/recover";
const baseContact =
  "https://api-chuantai-dev-dbab.4.us-1.fl0.io/message-contact";
const SendFileURL = "https://api-chuantai-dev-dbab.4.us-1.fl0.io/new-quote";
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
    "https://api-chuantai-dev-dbab.4.us-1.fl0.io/assistant-changes",
    credentials
  );
  return data;
};
const createQuote = async (credentials) => {
  const { data } = await axios.post(
    "https://api-chuantai-dev-dbab.4.us-1.fl0.io/new-quote",
    credentials
  );
  return data;
};
const customQuote = async (credentials) => {
  const { data } = axios.post(
    "https://api-chuantai-dev-dbab.4.us-1.fl0.io/send-quote",
    credentials
  );
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
