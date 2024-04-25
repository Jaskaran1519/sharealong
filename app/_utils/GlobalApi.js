import axios from "axios";

const { data } = require("autoprefixer");

const SendEmail = () => axios.post("/api/send", data);
export default {
  SendEmail,
};
