import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  public roomId: string;
  public clients$: Observable<any>;

  constructor(private route: ActivatedRoute,
    private store: Store<AppState>) {
    this.clients$ = this.store.select((store) => store.room.clients);
  }

  ngOnInit(): void {
    this.roomId = this.route.snapshot.params['roomId'] || null;
    console.log(this.roomId);
  }
}
