import { RoomState } from './reducers/room.reducer';

export interface AppState {
  readonly room: RoomState;
}