import { io } from "socket.io-client";
import { createContext, useReducer, useContext } from "react";
import { useDataContext } from "../GlobalData";
import { updateChatLog } from "../Actions/ChatLogActions";
const WS_BASE = process.env.NEXT_PUBLIC_WS_BASE;

const WebSocketContext = createContext(null);

export { WebSocketContext };

//create a websocket provider, this surrounds the app
export const WebSocketProvider = ({ children }) => {
  let socket;
  let ws;

  const { dispatch } = useDataContext();

  const sendMessage = (roomId, message) => {
    console.log(`sending ${JSON.stringify(message)} to ${roomId}`);
    //format data to send to backend
    const payload = { roomId: roomId, data: message };
    //send data to backend
    socket.emit("event://send-message", JSON.stringify(payload));
    //update the front end context "db"
    dispatch(updateChatLog(payload));
  };

  if (!socket) {
    socket = io.connect(WS_BASE);
    socket.on("event://get-message", (msg) => {
      const payload = JSON.parse(msg);
      dispatch(updateChatLog(payload));
    });

    ws = {
      socket: socket,
      sendMessage,
    };
  }

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};
