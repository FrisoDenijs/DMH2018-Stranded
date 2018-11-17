import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AcceptJoinService, DisruptionsService, JoinTripService, TripService } from './shared/services';
import { TestServicesComponent } from './test-services/test-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestServicesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
