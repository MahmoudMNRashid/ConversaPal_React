import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { localHost } from "../../help";
import axios from "axios";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      await axios.post(`${localHost}/auth/logout`);

      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.response?.data.message || error.message || error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};
export default useLogout;
