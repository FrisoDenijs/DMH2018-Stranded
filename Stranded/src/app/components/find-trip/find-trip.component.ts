import { Component, OnInit, Input } from '@angular/core';
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

  public trips: TripModel[];
  public travelTime: number;

  constructor(private tripService: TripService, private travelTimeService: TravelTimeService) { }

  ngOnInit() {
    const tripReq = new GetTripRequest();
    tripReq.from = !!this.from ? this.from : 'Leiden Centraal';
    tripReq.to = !!this.to ? this.to : 'Schiphol';

    this.tripService.get(tripReq).subscribe(res => {
      console.log(res);
      this.trips = res.trips;
    });

    const timeReq = new TravelTimeRequest();
    timeReq.from = !!this.from ? this.from : 'Leiden Centraal';
    timeReq.to = !!this.to ? this.to : 'Schiphol';


    this.travelTimeService.get(timeReq).subscribe(res => {
      console.log(res);
      this.travelTime = res.travelTimeInSeconds;
    });
  }

}