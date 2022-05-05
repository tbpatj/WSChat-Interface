import { useState, useContext } from "react";
import { setUsername } from "../context/ChatActions";
import { useDataContext } from "../context/GlobalData";
import { WebSocketContext } from "../context/Websocket/WebSocket";
import Messages from "./Messages";

export default function ChatRoom() {
  //load up the context information that we already have
  const { dispatch, username, room, chatLog } = useDataContext();

  //input fields
  const [usernameInput, setUsernameInput] = useState("");
  const [msgInput, setMsgInput] = useState("");

  const ws = useContext(WebSocketContext);

  //this will set the username in the context based off the input box in this page
  function enterRoom() {
    dispatch(setUsername(usernameInput));
  }

  const sendMessage = () => {
    ws.sendMessage(room.id, {
      username: username,
      message: msgInput,
      date: new Date().toISOString(),
    });
  };

  return (
    <div>
      {/* if we don't have a username display a box to enter one to enter the room */}
      {!username && (
        <div className="user">
          <input
            type="text"
            placeholder="Enter Username"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
          <button onClick={enterRoom}>Enter Room</button>
        </div>
      )}
      {/* if we do already have a username then display the send message fields */}
      {username && (
        <div className="room">
          <Messages />
          <div className="input-hold-right">
            <div className="input-container">
              <input
                className="send-input"
                value={msgInput}
                onChange={(e) => setMsgInput(e.target.value)}
                type="text"
              />
              <button className="send-button" onClick={sendMessage}>
                send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
