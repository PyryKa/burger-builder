import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-7740c.firebaseio.com/"
});

export default instance;
