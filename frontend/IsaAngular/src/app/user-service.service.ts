import { IUser } from './IUser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserServiceService {

  private user;
  private loggedIn;
  username : string;

  constructor(private http: HttpClient) {
      this.loggedIn = false;
  }

  setLoggedIn(){
      this.loggedIn = true;
  }

  getLoggedIn(){
      return this.loggedIn;
  }

  getUser(): Observable<IUser> {
    return this.user;
  }

  setUser() {
    //this.user = this.http.get<IUser>('assets/data/test.json');
    this.loggedIn = true;
    //console.log(this.user);
  }

  getUsername(){
      return this.username;
  }

}
