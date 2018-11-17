import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stranded';

  toStation: string;

  showHome = false;
  showFindTrip = false;

  toStationListener(station: string) {
    this.toStation = station;
    this.showHome = false;
    this.showFindTrip = true;
  }
}
