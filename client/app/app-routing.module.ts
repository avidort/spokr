import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  {
    path: 'room/:roomId',
    component: RoomComponent
  },

  {
    path: 'room',
    redirectTo: ''
  },

  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
