import { io } from "socket.io-client";
import { createContext, useReducer, useContext } from "react";
import { updateChatLog } from "../ChatActions";
import { useDataContext } from "../GlobalData";
const WS_BASE = process.env.NEXT_PUBLIC_WS_BASE;

const WebSocketContext = createContext(null);

export { WebSocketContext };

export const WebSocketProvider = ({ children }) => {
  let socket;
  let ws;

  const { dispatch } = useDataContext();

  const sendMessage = (roomId, message) => {
    console.log(`sending ${JSON.stringify(message)} to ${roomId}`);
    const payload = { roomId: roomId, data: message };
    socket.emit("event://send-message", JSON.stringify(payload));
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
