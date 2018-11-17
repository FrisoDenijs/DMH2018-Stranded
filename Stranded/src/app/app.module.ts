import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdbKZx0W0EImCoqZylEnPpG01O4DC3JR4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
