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
    <div className="user">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter Username"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <button type="submit" onClick={enterRoom}>
          Enter Room
        </button>
      </form>
    </div>
  );
}
