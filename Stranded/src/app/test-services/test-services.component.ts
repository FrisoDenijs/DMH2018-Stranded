import { Component, OnInit } from '@angular/core';
import { DisruptionsService, TripService } from '../shared/services';
import { GetTripRequest } from '../shared/models';

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
}
