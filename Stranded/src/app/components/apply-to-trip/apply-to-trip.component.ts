import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TripModel } from 'src/app/shared';

@Component({
  selector: 'app-apply-to-trip',
  templateUrl: './apply-to-trip.component.html',
  styleUrls: ['./apply-to-trip.component.scss']
})
export class ApplyToTripComponent implements OnInit {

  @Input()
  public trip: TripModel;

  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'name': new FormControl(),
      'age': new FormControl(),
      'gender': new FormControl()
    });
  }

  ngOnInit() {
  }

}
