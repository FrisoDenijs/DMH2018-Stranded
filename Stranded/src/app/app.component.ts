import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  toStation: string;
  showHeader = false;
  showIntro = true;
  showHome = false;
  showFindTrip = false;

  toHome() {
    this.showIntro = false;
    this.showHome = true;
  }

  toStationListener(station: string) {
    this.toStation = station;
    this.showHome = false;
    this.showFindTrip = true;
  }

  clickIntro() {
    this.showIntro = false;
    this.showHeader = true;
    this.showHome = true;
  }
}
