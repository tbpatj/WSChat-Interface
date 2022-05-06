import {
  CREATE_ROOM_ERROR,
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
  GET_ROOMS_ERROR,
  GET_ROOMS_SUCCESS,
  JOIN_ROOM_ERROR,
  JOIN_ROOM_REQUEST,
  JOIN_ROOM_SUCCESS,
} from "./Types";

//Here we will define our actions,
// these create an object that we return to the dispatch,
// just makes ease of use when coding in other places
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
