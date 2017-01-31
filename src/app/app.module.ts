import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component';

import { VehicleService } from './components/vehicle/vehicle.service';
import { CharacterService } from './components/character-list/character.service';
import { AppService } from './app.service';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule
  ],
  providers: [
      AppService,
      VehicleService,
      CharacterService
  ],
  declarations: [
      AppComponent,
      VehicleComponent,
      CharacterListComponent,
      CharacterComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/
