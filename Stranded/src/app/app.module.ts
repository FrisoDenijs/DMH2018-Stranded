import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AcceptJoinService, DisruptionsService,
  JoinTripService, TripService, BarsService,
  TravelTimeService, StationInfoService, StationListService } from './shared/services';


import { HeaderComponent } from './components/header/header.component';
import { AgmCoreModule } from '@agm/core';
import { FindTripComponent } from './components/find-trip/find-trip.component';
import { IntroComponent } from './components/intro/intro.component';
import { JoinTripComponent } from './components/join-trip/join-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    IntroComponent,
    FindTripComponent,
    HeaderComponent,
    JoinTripComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdbKZx0W0EImCoqZylEnPpG01O4DC3JR4'
    })
  ],
  providers: [
    AcceptJoinService,
    DisruptionsService,
    JoinTripService,
    TripService,
    BarsService,
    StationInfoService,
    TravelTimeService,
    StationListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
