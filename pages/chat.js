import axios from "axios";
import { useState, useContext } from "react";
import { useEffect } from "react";
import ChatRoom from "../components/chat/ChatRoom";
import {
  createRoom,
  getRooms,
  joinRoom,
  setUsername,
} from "../components/context/ChatActions";
import { useDataContext } from "../components/context/GlobalData";
import { WebSocketContext } from "../components/context/Websocket/WebSocket";
const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
const { DataContext } = import("../components/context/GlobalData");

export default function MainComponent() {
  const { dispatch, rooms } = useDataContext();

  function loadRooms() {
    console.log("getting em some more");
    getRooms()(dispatch);
  }
  return (
    <div>
      <HomeComponent />
      <div className="rooms-container">
        <h3>
          Rooms{" "}
          <span>
            <button onClick={() => loadRooms()}>reload</button>
          </span>
        </h3>
        {rooms.map((item, index) => {
          return (
            <div className="rooms-item" key={index + "12"}>
              <span>{item.name}</span>
              <button
                onClick={() => joinRoom(item.id)(dispatch)}
                className="create-button"
              >
                Join
              </button>
              <span>0/1 members</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function HomeComponent() {
  const [roomName, setRoomName] = useState("");
  const [roomId, setRoomId] = useState("");
  const { dispatch, room } = useDataContext();

  return (
    <div>
      {!room && (
        <div className="create">
          <div className="new-room-container">
            <span>Create new room</span>
            <div className="create-inputs-container">
              <input
                className="create-input"
                type="text"
                placeholder="Room name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
              <button
                className="create-button"
                onClick={() => {
                  createRoom(roomName)(dispatch);
                }}
              >
                Create
              </button>
            </div>
            <span>Join existing room</span>
            <div className="create-inputs-container">
              <input
                className="create-input"
                type="text"
                placeholder="Room code"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
              />
              <button
                className="create-button"
                onClick={() => joinRoom(roomId)(dispatch)}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      )}

      {room && <ChatRoom />}
    </div>
  );
}
