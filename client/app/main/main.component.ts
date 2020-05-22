import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  value;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
  }

  onCreate() {
    this.roomService.connect(this.value);
    this.roomService.join(this.roomService.generateRoom());
  }
}
