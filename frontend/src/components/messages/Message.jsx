import {useAuthContext} from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';

const Message = ({message}) => {                                //Inside the Message component, it receives props, specifically a message object.
  const {authUser} = useAuthContext();                          //The useAuthContext hook is used to get the current authenticated user from the authentication context. It assumes there is a context named AuthContext that provides the authUser.
  const {selectedConversation} = useConversation();             //The useConversation hook is used to get the currently selected conversation. It's likely managing some state related to conversations.
  const fromMe = message.senderId === authUser._id;             //It checks whether the message was sent by the authenticated user (fromMe variable).
  const formattedTime = extractTime(message.createdAt);
  const chartClassName = fromMe ? 'chat-end' : 'chat-start';    //Based on whether the message was sent by the authenticated user or not, it sets the CSS class for styling purposes (chartClassName, bubbleBgColor).
  const profilePic = fromMe ? authUser.profilePic: selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : "";
  const shakeclass = message.shouldShake ? "shake" : ""

  return (
    <div className={`chat ${chartClassName}`}>
        <div className="chat-image avatar">
           <div className="w-10 rounded-full">
              <img src={profilePic} alt="Tailwind CSS chat bubble component" />
           </div>      
        </div>         
        <div className={`chat-bubble text-white  ${bubbleBgColor} ${shakeclass} pb-2`}>{message.message}</div>     
        <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>{formattedTime}</div>
    </div>
                        // The chat-bubble div displays the content of the message (message.message).
                        //in chat bubble div if (bg-blue-500) is not there, It becomes dynamic and if message is from us it's color is blue otherwise feom others it's black
                      // The chat-footer div displays the time of the message (hardcoded to "12:42" in this example).
  )
};

export default Message