import { Component } from '@angular/core';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public createNickname: string;
  public joinRoomId: string;

  constructor(private router: Router,
    private roomService: RoomService) {
  }

  onCreate() {
    this.roomService.connect(this.createNickname);
    this.roomService.join(this.roomService.generateRoom());
  }

  onJoin() {
    this.router.navigate(['room', this.joinRoomId]);
  }
}