import { Component, Input } from '@angular/core';
import { RoomService } from 'client/app/room.service';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.scss']
})
export class JoinRoomComponent {
  @Input() roomId: string;
  public nickname: string;

  constructor(private roomService: RoomService) {
  }

  onJoin() {
    this.roomService.connect(this.nickname);
    this.roomService.join(this.roomId);
  }
}
