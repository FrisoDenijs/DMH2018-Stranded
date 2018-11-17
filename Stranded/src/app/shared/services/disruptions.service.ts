import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetDisruptionResponse, DisruptionModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DisruptionsService {

  constructor() { }

  get(): Observable<GetDisruptionResponse> {
    const res = new GetDisruptionResponse();
    const dis1 = new DisruptionModel();
    const dis2 = new DisruptionModel();
    const dis3 = new DisruptionModel();

    res.disruptions = new DisruptionModel[3];

    dis1.result = 'Koperdiefstal';
    dis1.station = 'Amsterdam Centraal';
    dis1.title = 'Utrecht C-Amsterdam C';
    dis1.type = 'Storing';

    dis2.result = 'Aangepaste dienstregeling';
    dis2.station = 'Breda';
    dis2.title = 'Eindhoven-Breda';
    dis2.type = 'Werkzaamheid';

    dis3.result = 'Aanrijding';
    dis3.station = 'Rijswijk';
    dis3.title = 'Den Haag C-Rijswijk';
    dis3.type = 'Storing';

    res.disruptions[0] = dis1;
    res.disruptions[1] = dis2;
    res.disruptions[2] = dis3;

    return of<GetDisruptionResponse>(res);
  }
}
