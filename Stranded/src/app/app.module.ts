import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AcceptJoinService, DisruptionsService, JoinTripService, TripService } from './shared/services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HttpClientModule,
  ],
  imports: [
    BrowserModule
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
