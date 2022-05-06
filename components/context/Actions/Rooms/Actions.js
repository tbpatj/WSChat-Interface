//The actual functions that run our axios get methods and such

import axios from "axios";
import {
  createRoomError,
  createRoomRequest,
  createRoomSuccess,
  getRoomsError,
  getRoomsSuccess,
  joinRoomError,
  joinRoomRequest,
  joinRoomSuccess,
} from "./Dispatches";
const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export function createRoom(roomName) {
  return async function (dispatch) {
    dispatch(createRoomRequest());
    try {
      //hit the database and create a new room. Should be a post requst
      const response = await axios.get(`${API_BASE}/room?name=${roomName}`);
      //when we recieve a response we will send the data back to DataReducer.js using the function createRoomSuccess from ./Dispaches.js
      dispatch(createRoomSuccess(response.data));
    } catch (error) {
      dispatch(createRoomError(error));
    }
  };
}

export function getRooms() {
  return async function (dispatch) {
    console.log("i guess we trying");
    try {
      //Get all the rooms from the server
      const response = await axios.get(`${API_BASE}/rooms`);
      console.log("got rooms " + JSON.stringify(response.data));
      //once we have the room data we will send it back to
      dispatch(getRoomsSuccess(response.data));
    } catch (error) {
      dispatch(getRoomsError(error));
    }
  };
}

export function joinRoom(roomId) {
  return async function (dispatch) {
    dispatch(joinRoomRequest());
    try {
      //get the data associated with the roomId from the server
      const response = await axios.get(`${API_BASE}/room/${roomId}`);
      //once we receive the data from the server we will send it back and store it in our context, via the reducer
      dispatch(joinRoomSuccess(response.data));
    } catch (error) {
      dispatch(joinRoomError(error));
    }
  };
}
