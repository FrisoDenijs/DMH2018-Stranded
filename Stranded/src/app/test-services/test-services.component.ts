import { Component, OnInit } from '@angular/core';
import { DisruptionsService, TripService, JoinTripService } from '../shared/services';
import { GetTripRequest, PostTripRequest, PostJoinTripRequest, GetJoinTripRequest } from '../shared/models';

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.scss']
})
export class TestServicesComponent implements OnInit {

  public data: any;

  constructor(private disruptionService: DisruptionsService, private tripService: TripService,
    private joinTripService: JoinTripService) { }

  ngOnInit() {
  }

  public getDisruptions() {
    this.disruptionService.get().subscribe(res => {
      console.log(res);
      this.data = res;
    });
  }

  public getTrip() {
    const req = new GetTripRequest();
    req.to = 'Den Haag HS';
    req.from = 'Amsterdam';

    this.tripService.get(req).subscribe(res => {
      console.log(res);
    });
  }

  public postTrip() {
    const req = new PostTripRequest();
    req.to = 'Delft';
    req.from = 'Breda';
    req.age = 42;
    req.gender = 'man';
    req.seats = 1;
    req.name = 'John Lennon';

    this.tripService.post(req).subscribe(res => {
      console.log(res);
    });
  }

  public postJoinTrip() {
    const req = new PostJoinTripRequest();
    req.age = 57;
    req.gender = 'vrouw';
    req.name = 'M.G. Schmidt';
    req.tripId = 1;

    this.joinTripService.post(req).subscribe(res => {
      console.log(res);
    });
  }

  public getJoinTrip() {
    const req = new GetJoinTripRequest();
    req.tripId = 1;

    this.joinTripService.get(req).subscribe(res => {
      console.log(res);
    });
  }

}
