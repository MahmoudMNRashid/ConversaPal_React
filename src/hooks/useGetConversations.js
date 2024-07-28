import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { localHost } from "../../help";
import axios from "axios";
const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${localHost}/users`,{

        }) 
       
      

        setConversations(res.data);
      } catch (error) {
        console.log(error)
         toast.error(error.response?.data.message || error.message || error);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};
export default useGetConversations;
