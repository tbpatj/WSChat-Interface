import { getRooms, joinRoom } from "../context/ChatActions";
import { useDataContext } from "../context/GlobalData";

export default function DisplayRooms() {
  const { dispatch, rooms } = useDataContext();

  function loadRooms() {
    console.log("getting em some more");
    getRooms()(dispatch);
  }

  return (
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
  );
}
