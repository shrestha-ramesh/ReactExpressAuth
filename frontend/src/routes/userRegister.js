const backendUrl = "http://localhost:5000";
const axios = require("axios");
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
const userRegister = async (Credentials) => {
  const formData = JSON.stringify(Credentials);
  const userRegisterUrl = `${backendUrl}/register`;
  const { data } = await axios.post(userRegisterUrl, formData, config);
  return data
};
export default userRegister;
