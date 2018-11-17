import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TripService, TravelTimeService } from '../../shared/services';
import { GetTripRequest, TripModel, TravelTimeRequest } from '../../shared/models';

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

  @Output()
  public joinTrip = new EventEmitter<TripModel>();

  public trips: TripModel[];
  public travelTime: number;

  public showTripId = -1;

  constructor(private tripService: TripService, private travelTimeService: TravelTimeService) { }

  ngOnInit() {
    const tripReq = new GetTripRequest();
    tripReq.from = !!this.from ? this.from : 'Leiden Centraal';
    tripReq.to = !!this.to ? this.to : 'Schiphol';

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

    const timeReq = new TravelTimeRequest();
    timeReq.from = !!this.from ? this.from : 'Leiden Centraal';
    timeReq.to = !!this.to ? this.to : 'Schiphol';
  }

  onJoinTrip(trip: TripModel) {
    this.joinTrip.emit(trip);
  }

  showJoin(trip: TripModel) {
    this.showTripId = trip.id;
  }
}
