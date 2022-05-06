import { useState } from "react";
import { joinRoom } from "../context/Actions/Rooms/Actions";
import { useDataContext } from "../context/GlobalData";

export default function RoomCode() {
  const [roomId, setRoomId] = useState("");
  const { dispatch } = useDataContext();
  return (
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
  );
}
