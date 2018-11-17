import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AcceptJoinService, DisruptionsService, JoinTripService, TripService, BarsService } from './shared/services';

import { HeaderComponent } from './components/header/header.component';
import { AgmCoreModule } from '@agm/core';

>>>>>>> cbcce9d4bc17961df444286240a09b45382909a9

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
    TripService,
    BarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
