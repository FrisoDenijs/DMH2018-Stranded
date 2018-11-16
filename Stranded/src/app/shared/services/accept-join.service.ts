import { Injectable } from '@angular/core';
import { PostAcceptJoinRequest } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcceptJoinService {

  constructor() { }

  post(req: PostAcceptJoinRequest): Observable<any> {
    return of<undefined>();
  }
}
