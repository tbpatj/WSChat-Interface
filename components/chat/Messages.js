import { useEffect, useRef } from "react";
import { useDataContext } from "../context/GlobalData";

export default function Messages() {
  const { chatLog, username } = useDataContext();
  let lastMessage = useRef(null);
  useEffect(
    () => {
      if (lastMessage.current !== null) {
        lastMessage.current.scrollIntoView({ behavior: "smooth" });
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

              {chatItem.username === username && <div></div>}

              {/* the messages in the chat */}
              <div
                key={index + "msg"}
                className={
                  chatItem.username === username ? "my-message" : "message"
                }
              >
                <i>{chatItem.username}:</i>
                <br /> {chatItem.message}
              </div>
            </div>
            {/* this is a ref element that goes at the bottom so when you send in a message it scrolls to the bottom */}
            {index === chatLog.length - 1 && (
              <div ref={lastMessage} id="last-div"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
