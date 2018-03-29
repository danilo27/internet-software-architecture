import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { IPolovniRekvizit } from "./IPolovniRekvizit";
import { IZvanicniRekvizit } from "./IZvanicniRekvizit";


@Injectable()
export class RekvizitiService {

  constructor(private http: HttpClient) { }

  getZvanicniRekviziti(): Observable<IZvanicniRekvizit[]> {
      return this.http.get<IZvanicniRekvizit[]>('/getZvanicniRekviziti');
  }
  
  getPolovniRekviziti(): Observable<IPolovniRekvizit[]> {
      return this.http.get<IPolovniRekvizit[]>('/getPolovniRekviziti');
  }
  
  rezervisiZvanicniRekvizit(imeRekvizita,imeKorisnika){
      console.log(imeRekvizita,imeKorisnika);
      
      var rezervacijaRekvizita = {
              imeRekvizita:imeRekvizita,
              imeKorisnika:imeKorisnika
      };
      
      this.http.post('/rezervisiZvanicniRekvizit',rezervacijaRekvizita).subscribe((data) => {});
  }

}
