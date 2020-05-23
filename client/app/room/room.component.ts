import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { IClient } from 'models/room.models';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  public clients$: Observable<IClient[]>;
  public roomId: string;

  joined;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>) {
    this.clients$ = this.store.select((store) => store.room.clients);
  }

  ngOnInit(): void {
    this.roomId = this.route.snapshot.params['roomId'] || null;
    console.log(this.roomId);
  }
}
