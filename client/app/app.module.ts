import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { reducers } from './reducers/index';

import { MainComponent } from './main/main.component';
import { RoomComponent } from './room/room.component';
import { JoinRoomComponent } from './room/join-room/join-room.component';

// ngrx/store logger factory (based on redux-logger)
export function logger(reducer) {
  return storeLogger()(reducer);
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RoomComponent,
    JoinRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers, {
      metaReducers: [logger] // TODO: Remove logger to disable (in case of production-mode)
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
