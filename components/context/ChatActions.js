import axios from "axios";
const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export const SEND_MESSAGE_REQUEST = "SEND_MESSAGE_REQUEST";
export const UPDATE_CHAT_LOG = "UPDATE_CHAT_LOG";

//action types
export const CREATE_ROOM_REQUEST = "CREATE_ROOM_REQUEST";
export const CREATE_ROOM_SUCCESS = "CREATE_ROOM_SUCCESS";
export const CREATE_ROOM_ERROR = "CREATE_ROOM_ERROR";

export const GET_ROOMS_SUCCESS = "GET_ROOMS_SUCCESS";
export const GET_ROOMS_ERROR = "GET_ROOMS_ERROR";

//Here we will define our actions
export function createRoomRequest() {
  return {
    type: CREATE_ROOM_REQUEST,
  };
}

export function createRoomSuccess(payload) {
  return {
    type: CREATE_ROOM_SUCCESS,
    data: payload,
  };
}

export function createRoomError(error) {
  return {
    type: CREATE_ROOM_ERROR,
    data: error,
  };
}

export function getRoomsSuccess(rooms) {
  return {
    type: GET_ROOMS_SUCCESS,
    data: rooms,
  };
}

export function getRoomsError(error) {
  return {
    type: GET_ROOMS_ERROR,
    data: error,
  };
}

export function createRoom(roomName) {
  return async function (dispatch) {
    dispatch(createRoomRequest());
    try {
      const response = await axios.get(`${API_BASE}/room?name=${roomName}`);

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
      const response = await axios.get(`${API_BASE}/rooms`);
      console.log("got rooms " + JSON.stringify(response.data));
      dispatch(getRoomsSuccess(response.data));
    } catch (error) {
      dispatch(getRoomsError(error));
    }
  };
}

export const JOIN_ROOM_REQUEST = "JOIN_ROOM_REQUEST";
export const JOIN_ROOM_SUCCESS = "JOIN_ROOM_SUCCESS";
export const JOIN_ROOM_ERROR = "JOIN_ROOM_ERROR";

export function joinRoomRequest() {
  return {
    type: JOIN_ROOM_REQUEST,
  };
}

export function joinRoomSuccess(payload) {
  return {
    type: JOIN_ROOM_SUCCESS,
    data: payload,
  };
}

export function joinRoomError(error) {
  return {
    type: JOIN_ROOM_ERROR,
    data: error,
  };
}

export function joinRoom(roomId) {
  return async function (dispatch) {
    dispatch(joinRoomRequest());
    try {
      const response = await axios.get(`${API_BASE}/room/${roomId}`);
      dispatch(joinRoomSuccess(response.data));
    } catch (error) {
      dispatch(joinRoomError(error));
    }
  };
}

export const SET_USERNAME = "SET_USERNAME";

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    data: username,
  };
}

export function updateChatLog(update) {
  return {
    type: UPDATE_CHAT_LOG,
    data: { ...update, date: new Date().toISOString() },
  };
}
