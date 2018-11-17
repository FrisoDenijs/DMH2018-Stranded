import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stranded';

  toStation: string;

  showIntro = true;
  showHome = true;
  showFindTrip = false;

  toStationListener(station: string) {
    this.toStation = station;
    this.showHome = false;
    this.showFindTrip = true;
  }
}
