import axios from "axios";

// const baseUrl = "https://api-deploy-production-5c13.up.railway.app/login";
// const baseUrlSign = "https://api-deploy-production-5c13.up.railway.app/sign-up";
// const baseVerify = "https://api-deploy-production-5c13.up.railway.app/verify";
// const baseRecover = "https://api-deploy-production-5c13.up.railway.app/recover";
// const baseContact = "https://api-deploy-production-5c13.up.railway.app/contact";
// const SendFileURL =
//   "https://api-deploy-production-5c13.up.railway.app/send-file";
const api_url = "https://api-chuantai-dev-dbab.4.us-1.fl0.io";
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
  const { data } = await axios.post(
    "https://api-chuantai-dev-dbab.4.us-1.fl0.io/send-quote",
    credentials
  );
  return data;
};
const getUsersQuotes = async (email) => {
  const { data } = await axios.get(
    `https://api-chuantai-dev-dbab.4.us-1.fl0.io/customer-quote?email=${email}`
  );
  return data;
};
const getSingleQuote = async (id) => {
  const { data } = await axios.get(
    `https://api-chuantai-dev-dbab.4.us-1.fl0.io/quote/${id}`
  );
  return data;
};
const getAssistantQuotes = async () => {
  const { data } = await axios.get(
    "https://api-chuantai-dev-dbab.4.us-1.fl0.io/assistant-quote"
  );
  return data;
};
const getOrderes = async (email) => {
  const { data } = await axios.get(
    `https://api-chuantai-dev-dbab.4.us-1.fl0.io/my-orders?id=${email}`
  );
  return data;
};
const completedQuotes = async ({ email, status }) => {
  const { data } = await axios.get(
    `https://api-chuantai-dev-dbab.4.us-1.fl0.io/customer-quote?status=${status}&email=${email}`
  );
  return data;
};
const completedOrders = async ({ status, email }) => {
  const { data } = await axios.get(
    `https://api-chuantai-dev-dbab.4.us-1.fl0.io/customer-quote?status=${status}&email=${email}`
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
  getUsersQuotes,
  getSingleQuote,
  getAssistantQuotes,
  getOrderes,
  completedQuotes,
  completedOrders,
};
