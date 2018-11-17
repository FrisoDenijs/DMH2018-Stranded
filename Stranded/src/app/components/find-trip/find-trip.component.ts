import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TripService, TravelTimeService, StationInfoService} from '../../shared/services';
import {GetTripRequest, TripModel, TravelTimeRequest, Location, InfoLocationModel} from '../../shared/models';

@Component({
  selector: 'app-find-trip',
  templateUrl: './find-trip.component.html',
  styleUrls: ['./find-trip.component.scss']
})
export class FindTripComponent implements OnInit {

  @Input()
  public from: string;

  @Input()
  public to: string;

  public trips: TripModel[];
  public travelTime: number;
  public bicyclesAvailable: boolean;
  public bicyclesLocations: InfoLocationModel[];

  public showTripId = -1;

  constructor(private tripService: TripService, private travelTimeService: TravelTimeService, private stationInfoService: StationInfoService) { }

  ngOnInit() {

    // testing
    if (!this.from) {
      this.from = 'Leiden Centraal';
      this.to = 'Schiphol';
    }

    const tripReq = new GetTripRequest();
    tripReq.from = this.from;
    tripReq.to = this.to;


    const timeReq = new TravelTimeRequest();
    timeReq.from = this.from;
    timeReq.to = this.to;

    this.tripService.get(tripReq).subscribe(res => {
      for (const trip of res) {
        trip.start_date = new Date(trip.start_time);
      }

      this.trips = res;

      this.travelTimeService.get(timeReq).subscribe(res => {
        console.log(res);
        this.travelTime = res.travelTimeInSeconds;

        // set end times
        for (const trip of this.trips) {
          const endDate = new Date(trip.start_time);
          endDate.setSeconds(endDate.getSeconds() + res.travelTimeInSeconds);
          trip.end_date = endDate;
        }
      });
    });

    this.stationInfoService.get(this.from).subscribe(res => {
      if (res.ovfiets) {
        this.bicyclesAvailable = true;
        this.bicyclesLocations = res.locations;
      }
    });
  }

  showJoin(trip: TripModel) {
    this.showTripId = trip.id;
  }
}
