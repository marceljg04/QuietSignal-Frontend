import axios from "axios";

const API = "http://localhost:8000/users";

export const fetchCurrentUser = async () => {
  try {
    const res = await axios.get(`${API}/me`, { withCredentials: true });
    return res.data;
  } catch (err) {
    if (err.response && err.response.status === 401) {
      return null;
    }
    throw err;
  }
};
