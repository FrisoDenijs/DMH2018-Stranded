import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AcceptJoinService, DisruptionsService, JoinTripService, TripService, BarsService, TravelTimeService } from './shared/services';

import { HeaderComponent } from './components/header/header.component';
import { AgmCoreModule } from '@agm/core';
import { StationInfoService } from './shared/services/station-info.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
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
    TravelTimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
