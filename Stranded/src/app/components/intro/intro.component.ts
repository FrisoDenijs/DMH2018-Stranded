import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {DisruptionsService} from '../../shared/services';
import {AppComponent} from '../../app.component';

const SOURCE_STATION = 'Leiden Centraal';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  reason: String;

  constructor(private disruptionService: DisruptionsService, private inj: Injector) {
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
    this.inj.get(AppComponent).showHome = true;
  }

}
