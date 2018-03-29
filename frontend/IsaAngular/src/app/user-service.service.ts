import { IUser } from './IUser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserServiceService {

  public user;

  constructor(private http: HttpClient) { }


  getUser(): Observable<IUser> {
    return this.user;
  }

  setUser() {
    this.user = this.http.get<IUser>('assets/data/test.json');

    console.log(this.user);
  }


}
