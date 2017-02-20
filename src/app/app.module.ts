import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';


/* Feature Modules */
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

import { VehicleService } from './components/vehicle-list/vehicle.service';
import { CharacterService } from './components/character-list/character.service';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      CoreModule,
      AppRoutingModule,
      MomentModule,
      NgbModule.forRoot()
  ],
  providers: [
      VehicleService,
      CharacterService
  ],
  declarations: [
      AppComponent,
      routableComponents
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/
