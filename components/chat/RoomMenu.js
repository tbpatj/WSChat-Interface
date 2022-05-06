import { useState } from "react";
import { createRoom, joinRoom } from "../context/Actions/Rooms/Actions";
import { useDataContext } from "../context/GlobalData";
import DisplayRooms from "./DisplayRooms";

export function RoomsMenu() {
  const [roomName, setRoomName] = useState("");
  const { dispatch, room } = useDataContext();
  function setTheRoom(e) {
    if (roomName.length < 30) {
      setRoomName(e.target.value);
    }
  }

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
            onChange={(e) => setTheRoom(e)}
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
        <DisplayRooms />
      </div>
    </div>
  );
}
