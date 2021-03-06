import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayerDetailsComponent } from './players/player-details/player-details.component';
import { PlayerListComponent } from './players/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailsComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
