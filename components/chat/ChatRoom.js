import { useState, useContext } from "react";
import { nullRoom } from "../context/Actions/Rooms/Dispatches";
import { NULL_ROOM } from "../context/Actions/Rooms/Types";
import { setUsername } from "../context/Actions/UsernameActions";
import { useDataContext } from "../context/GlobalData";
import { WebSocketContext } from "../context/Websocket/WebSocket";
import Messages from "./Messages";

export default function ChatRoom() {
  //load up the context information that we already have
  const { dispatch, username, room, chatLog } = useDataContext();
  //input fields
  const [msgInput, setMsgInput] = useState("");

  const ws = useContext(WebSocketContext);

  const sendMessage = () => {
    ws.sendMessage(room.id, {
      username: username,
      message: msgInput,
      date: new Date().toISOString(),
    });
    setMsgInput("");
  };

  return (
    <div className="room">
      <div className="flex-row">
        <h1>Messages</h1>
      </div>
      <Messages />
      <div className="input-hold-right">
        <div className="flex-center">
          <button
            className="create-button"
            onClick={() => dispatch(nullRoom())}
          >
            back
          </button>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-container">
            <input
              className="send-input"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
              type="text"
            />
            <button
              type="submit"
              className="send-button"
              onClick={() => {
                sendMessage();
              }}
            >
              send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
