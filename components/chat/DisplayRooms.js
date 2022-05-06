import { getRooms, joinRoom } from "../context/Actions/Rooms/Actions";
import { useDataContext } from "../context/GlobalData";
import RoomCode from "./RoomCode";

export default function DisplayRooms() {
  const { dispatch, rooms } = useDataContext();

  function loadRooms() {
    console.log("getting em some more");
    getRooms()(dispatch);
  }

  return (
    <div className="rooms-container">
      <div className="flex-row">
        <h3>Rooms </h3>
        <button className="reload-button" onClick={() => loadRooms()}>
          <span className="center">⟳</span>
        </button>
      </div>

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
          </div>
        );
      })}
      <h6 className="lil-mg">Join via room code</h6>
      <RoomCode />
    </div>
  );
}
