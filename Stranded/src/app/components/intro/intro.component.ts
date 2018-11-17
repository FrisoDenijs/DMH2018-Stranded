import {Component, EventEmitter, Injector, OnInit, Output, ViewChild} from '@angular/core';
import {DisruptionsService} from '../../shared/services';

const SOURCE_STATION = 'Leiden Centraal';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  reason: String;

  @Output()
  public goNext = new EventEmitter<string>();

  constructor(private disruptionService: DisruptionsService) {
  }

  ngOnInit() {

      this.disruptionService.get().subscribe(res => {
        for(const disruption of res) {
          if (disruption.station === SOURCE_STATION) {
            this.reason = disruption.result;
          }
        }
      });
  }

  clickNext() {
    this.goNext.emit();
  }

}
