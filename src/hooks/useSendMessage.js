import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { localHost } from "../../help";
import axios from "axios";
axios.defaults.withCredentials = true;
const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${localHost}/message/send/${selectedConversation._id}`,
        {
          message,
        }
      );

      setMessages([...messages, res.data]);
    } catch (error) {
      toast.error(error.response?.data.message || error.message || error);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};
export default useSendMessage;
