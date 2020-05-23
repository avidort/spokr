import { RoomActions } from '../actions/room.actions';
import { IClient } from 'models/room.models';

export interface RoomState {
  clients: IClient[];
}

const initialState: RoomState = {
  clients: []
};

const handlers = {
  [RoomActions.types.setClients]: setClients
};

export function roomReducer(state: RoomState = initialState, action: any) {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }

  return state;
}

function setClients(state, action) {
  return {
    ...state,
    clients: action.payload
  };
}
