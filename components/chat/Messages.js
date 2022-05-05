import { useEffect, useRef } from "react";
import { useDataContext } from "../context/GlobalData";

export default function Messages() {
  const { chatLog, username } = useDataContext();
  let lastMessage = useRef(null);
  useEffect(
    () => {
      if (lastMessage.current !== null) {
        lastMessage.current.scrollIntoView(false);
      }
    },
    [chatLog],
    lastMessage.current
  );
  return (
    <div className="history">
      {chatLog.map((chatItem, index) => {
        return (
          <div>
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
            {index === chatLog.length - 1 && (
              <div ref={lastMessage} id="last-div"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
