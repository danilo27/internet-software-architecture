import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {

  public user = null;

  constructor() { }

  // ovde ce ici rest poziv valjda
  getUser() {
    return this.user;
  }

  setUser() {
    this.user = {'name': 'Vlada', 'type': 'admin'};
  }


}
