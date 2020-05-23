import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  public roomId: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.roomId = this.route.snapshot.params['roomId'] || null;
    console.log(this.roomId);
  }
}
