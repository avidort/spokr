import { Component, OnInit, Input } from '@angular/core';
import { RoomService } from 'client/app/room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.scss']
})
export class JoinRoomComponent implements OnInit {
  @Input() roomId: string;
  public name: string;

  constructor(private router: Router,
    private roomService: RoomService) {
  }

  ngOnInit(): void {
  }

  onJoin() {
    this.roomService.connect(this.name);
    this.router.navigate(['room', this.roomId])
    this.roomService.join(this.roomId);
  }
}
