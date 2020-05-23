import { IClient } from 'models/room.models';

export class RoomActions {
  static readonly types = {
    setClients: '[Room] Set Clients'
  };

  static setClients(clients: IClient[]) {
    return {
      type: RoomActions.types.setClients,
      payload: clients
    };
  }
}