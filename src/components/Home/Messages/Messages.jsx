import { useEffect, useRef } from "react";
import useGetMessages from "../../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "./MessageSkeleton";
import useListenMessages from "../../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
useListenMessages()
  //for scroll to last message first thing we need to catch last element we will do that with ref
  const lastMessageRef = useRef();
//why setTimeOut for reqeuest maybe late 
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      <div className="px-4 flex-1 overflow-auto h-96">
        {!loading &&
          messages.length > 0 &&
          messages.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          ))}

        {loading &&
          [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
        {!loading && messages.length === 0 && (
          <p className="text-center">
            Send a message to start the conversation
          </p>
        )}
      </div>
    </div>
  );
};

export default Messages;