import { Component, OnInit } from '@angular/core';
import { DisruptionsService, TripService } from '../shared/services';
import { GetTripRequest, PostTripRequest } from '../shared/models';

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.scss']
})
export class TestServicesComponent implements OnInit {

  public data: any;

  constructor(private disruptionService: DisruptionsService, private tripService: TripService) { }

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
}
