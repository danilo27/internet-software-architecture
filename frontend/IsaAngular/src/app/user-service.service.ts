import { IUser } from './IUser';
import { IStatus } from './IStatus';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserServiceService {

  private user;
  private loggedIn;
  email: string;
  friends: string[] = [];
  name: string;
  lastname: string;
  phoneNumber: number;
  city: string;
  username: string;
  utype: string;
  promenio: boolean;

  
private _isLoggedIn:Subject<boolean> = new BehaviorSubject<boolean>(false);
 


    
    constructor(private http: HttpClient) {
      this.loggedIn = false;
  }

  setLoggedIn(){
      this.loggedIn = true;
  }

  getLoggedIn(){
      return this.loggedIn;
  }
  
  getUsername() {
    return  this.username;
  }
  getPromenio(){
  	return this.user.promenio;
  }
  logout(){
  this.loggedIn = false;
  }

  getUser(): Observable<IUser> {
    return this.user;
  }
  
  getUtype(){
      return this.user.utype;
  }

  setUser(data) {
                
    this.user = data;//this.http.get<IUser>('/getDetailsByUsername/'+this.username);
    this.loggedIn = true;

    console.log('user set', this.user.username);
  }

  getEmail(){
      return this.email;
  }

  getFriends(){
      return this.friends;
  }

  getName(){
      return this.name;
  }
  getLastname(){
      return this.lastname;
  }
  getCity(){
      return this.city;
  }
  
  getVenueAdmins(): Observable<IUser[]>{
      return this.http.get<IUser[]>('/getVenueAdmins');
  }
  
  getStatus(username): Observable<IStatus>{
   	  return this.http.get<IStatus>('/getStatus/'+username);
  }


}
