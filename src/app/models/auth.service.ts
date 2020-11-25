import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasource';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _DS: RestDataSource) {}
  authenticate(username: string, password: string): Observable<boolean> {
    return this._DS.authenticate(username, password);
  }
  get authenticated() {
    return this._DS.auth_token != null;
  }
  clear() {
    this._DS.auth_token = null;
  }
}
