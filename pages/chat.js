import ChatRoom from "../components/chat/ChatRoom";
import DisplayRooms from "../components/chat/DisplayRooms";
import { RoomsMenu } from "../components/chat/RoomMenu";
import ChatUserOptions from "../components/chat/UserOptions";
import { useDataContext } from "../components/context/GlobalData";

export default function MainComponent() {
  const { room, username } = useDataContext();

  //a variable to check if we can enter the actual chatroom, we need a username and a room we want to join
  let openChatRoom = room !== null && username !== null;
  return (
    <div className="flex-row flex-center">
      <div className="sml-flex">
        <div className="chat-container">
          {!room && <RoomsMenu />}
          {openChatRoom && <ChatRoom />}
          {!username && <ChatUserOptions />}
        </div>
      </div>
    </div>
  );
}
