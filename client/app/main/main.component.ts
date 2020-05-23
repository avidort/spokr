import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  value;

  constructor(private router: Router,
    private roomService: RoomService) { }

  ngOnInit(): void {
  }

  onCreate() {
    this.roomService.connect(this.value);

    const roomId = this.roomService.generateRoom();
    this.router.navigate(['room', roomId])
    this.roomService.join(roomId);
  }
}
