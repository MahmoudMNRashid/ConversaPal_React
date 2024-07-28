import { extractTime } from "../../../../help";
import useConversation from "../../../zustand/useConversation";
import { useAuthContext } from "../../../context/AuthContext";
const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const formattedTime = extractTime(message.createdAt);

  console.log(message.senderId === authUser._id);
  const fromMe = message.senderId === authUser._id;

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const logo = fromMe ? authUser.logo : selectedConversation?.logo;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={logo} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white pb-2 ${bubbleBgColor}  ${shakeClass} `}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
