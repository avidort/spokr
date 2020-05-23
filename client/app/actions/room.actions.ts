import { IClient } from 'models/room.models';

export class RoomActions {
  static readonly types = {
    setJoined: '[Room] Set Joined',
    setClients: '[Room] Set Clients'
  };

  static setJoined(roomId: string) {
    return {
      type: RoomActions.types.setJoined,
      payload: roomId
    };
  }

  static setClients(clients: IClient[]) {
    return {
      type: RoomActions.types.setClients,
      payload: clients
    };
  }
}