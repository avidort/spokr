import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { RoomActions } from './actions/room.actions';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private socket: any;

  constructor(private store: Store<AppState>) {
  }

  public generateRoom(): string {
    return Math.random().toString(20).substr(2);
  }

  public connect(nickname: string): void {
    this.socket = io('http://localhost:3000');
    this.socket.emit('register', nickname);
    this.setupEvents();
    console.log(`Connected and registered as ${nickname}`);
  }

  public join(roomId: string): void {
    this.socket.emit('join', roomId);
    console.log(`Joined room ${roomId}`);
  }

  private setupEvents() {
    this.socket.on('connected-clients', (clients) => {
      this.store.dispatch(RoomActions.setClients(clients));
    });
  }
}
