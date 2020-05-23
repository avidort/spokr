import { RoomActions } from '../actions/room.actions';
import { IClient } from 'models/room.models';

export interface RoomState {
  joinedRoom: string;
  clients: IClient[];
}

const initialState: RoomState = {
  joinedRoom: null,
  clients: []
};

const handlers = {
  [RoomActions.types.setJoined]: setJoined,
  [RoomActions.types.setClients]: setClients
};

export function roomReducer(state: RoomState = initialState, action: any) {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }

  return state;
}

function setJoined(state, action) {
  return {
    ...state,
    joinedRoom: action.payload
  };
}

function setClients(state, action) {
  return {
    ...state,
    clients: action.payload
  };
}
