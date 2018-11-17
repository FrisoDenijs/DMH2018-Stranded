import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AgmCoreModule } from '@agm/core';


import { AcceptJoinService, DisruptionsService, JoinTripService, TripService } from './shared/services';
// import { TestServicesComponent } from './test-services/test-services.component';


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
    // TestServicesComponent,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdbKZx0W0EImCoqZylEnPpG01O4DC3JR4'
    })
  ],
  providers: [
    AcceptJoinService,
    DisruptionsService,
    JoinTripService,
    TripService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
