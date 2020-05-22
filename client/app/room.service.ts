import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private socket: any;

  constructor() {
  }

  public generateRoom(): string {
    return Math.random().toString(20).substr(2);
  }

  public connect(nickname: string) {
    this.socket = io('http://localhost:3000');
    this.socket.emit('register', nickname);
    console.log(`Connected and registered as ${nickname}`);
  }

  public join(room: string) {
    this.socket.emit('join', room);
    console.log(`Joined room ${room}`);
  }
}
