import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {DisruptionModel} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DisruptionsService {

  private readonly disruptionUrl = 'http://172.24.23.244:8000/api/disruptions/';

  constructor(private http: HttpClient) { }

  get(): Observable<DisruptionModel[]> {
    return this.http.get<DisruptionModel[]>(this.disruptionUrl);
  }
}
