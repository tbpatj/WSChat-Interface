import { useState } from "react";
import { createRoom, joinRoom } from "../context/Actions/Rooms/Actions";
import { useDataContext } from "../context/GlobalData";

export function RoomsMenu() {
  const [roomName, setRoomName] = useState("");
  const [roomId, setRoomId] = useState("");
  const { dispatch, room } = useDataContext();

  return (
    <div className="create">
      <div className="new-room-container">
        <span>
          <h2 className="lil-mg">Create new room</h2>
        </span>
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
  );
}
