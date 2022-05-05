import {
  CREATE_ROOM_SUCCESS,
  GET_ROOMS_SUCCESS,
  JOIN_ROOM_SUCCESS,
  SET_USERNAME,
  UPDATE_CHAT_LOG,
} from "./ChatActions";

export default function dataReducer(state, action) {
  switch (action.type) {
    case CREATE_ROOM_SUCCESS: {
      return {
        ...state,
        room: action.data,
      };
    }
    case JOIN_ROOM_SUCCESS: {
      console.log(action.data);
      return {
        ...state,
        room: { name: action.data.name, id: action.data.id },
        chatLog: action.data.chats,
      };
    }
    case SET_USERNAME:
      console.log(action.data);
      return { ...state, username: action.data };
    case GET_ROOMS_SUCCESS:
      console.log(action.data);
      let rooms = [];
      for (let key in action.data) {
        rooms.push(action.data[key]);
      }
      return { ...state, rooms: rooms };
    case UPDATE_CHAT_LOG:
      if (state.room !== null && action.data.roomId === state.room.id) {
        console.log("updating chatlog");
        //iterate through the chatlog and make sure we aren't adding duplicates

        for (let i = 0; i < state.chatLog.length; i++) {
          if (
            state.chatLog[i].message === action.data.data.message &&
            state.chatLog[i].date === action.data.data.date
          ) {
            return { ...state };
          }
        }

        /** Checks last message to see if it should add
        let cll = state.chatLog.length;
        if (
          state.chatLog[cll - 1].data.message === action.data.data.message &&
          state.chatLog[cll - 1].data.date === action.data.data.date
        ) {
          return { ...state };
        } */
        console.log("data ", action.data);
        let newState = {
          ...state,
          chatLog: [
            ...state.chatLog,
            {
              message: action.data.data.message,
              date: action.data.data.date,
              username: action.data.data.username,
            },
          ],
        };
        return newState;
      } else {
        console.log("something went wrong");
      }
      break;
    default:
      return { ...state };
  }
}
