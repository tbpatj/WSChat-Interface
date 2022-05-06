import { useState } from "react";
import { setUsername } from "../context/Actions/UsernameActions";
import { useDataContext } from "../context/GlobalData";

export default function ChatUserOptions() {
  const [usernameInput, setUsernameInput] = useState("");
  const { dispatch } = useDataContext();

  //this will set the username in the context ("db") based off the input box in this page
  function enterRoom() {
    dispatch(setUsername(usernameInput));
  }
  return (
    <div className="create">
      <div className="new-room-container">
        <span>
          <h2 className="lil-mg">Create your Username</h2>
        </span>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="create-inputs-container">
            <input
              className="create-input"
              type="text"
              placeholder="Username"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
            />
            <button className="create-button" type="submit" onClick={enterRoom}>
              Set
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
