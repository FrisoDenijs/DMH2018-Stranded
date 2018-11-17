import { Injectable } from '@angular/core';
import { PostAcceptJoinRequest } from '../models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcceptJoinService {

  private readonly acceptJoinUrl = 'http://172.24.23.244:8000/api/acceptJoinRequest';

  constructor(private http: HttpClient) { }

  post(req: PostAcceptJoinRequest): Observable<any> {
    return this.http.post(this.acceptJoinUrl, req);
  }
}
