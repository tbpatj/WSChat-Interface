import { useDataContext } from "../context/GlobalData";

export default function Messages() {
  const { chatLog, username } = useDataContext();

  return (
    <div className="history">
      {chatLog.map((chatItem, index) => {
        return (
          <div key={index + "msg"} className="messages-container">
            {/* insert a div in front to move content sent by the user to the right */}
            {chatItem.data.username === username && <div></div>}
            {/* the messages in the chat */}
            <div
              key={index + "msg"}
              className={
                chatItem.data.username === username ? "my-message" : "message"
              }
            >
              <i>{chatItem.data.username}:</i>
              <br /> {chatItem.data.message}
            </div>
          </div>
        );
      })}
    </div>
  );
}
