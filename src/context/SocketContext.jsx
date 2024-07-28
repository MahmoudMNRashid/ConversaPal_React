import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
import { localHost } from "../../help";

const SocketContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    //first create connection with backend  //and backend know what user is online
    if (authUser) {
      const socket = io(localHost, {
        query: {
          userId: authUser._id,
        },
      });
console.log(socket)
      setSocket(socket);

//now we can listen to events  first event which is online users
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
    });

      return () => socket.close();
    } else {
      if (socket) {
        //this is will be disconnect function in backend 
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
