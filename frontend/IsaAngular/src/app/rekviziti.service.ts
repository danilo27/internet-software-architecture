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
  
//  getAktivniOglasi(user): Observable<IPolovniRekvizit[]>{
//      return this.http.post<IPolovniRekvizit[]>('/getAktivniOglasi',user);
//  }  
  
  rezervisiZvanicniRekvizit(imeRekvizita,imeKorisnika){
      var rezervacijaRekvizita = {
              imeRekvizita:imeRekvizita,
              imeKorisnika:imeKorisnika
      };
      
      this.http.post('/rezervisiZvanicniRekvizit',rezervacijaRekvizita).subscribe((data) => {});
  }
  
  posaljiOglasNaProveru(nazivOglasa,opisOglasa,slikaOglasa,cenaOglasa,username,datumOglasa){
      var oglasZaProveru = {
              naziv:nazivOglasa,
              opis:opisOglasa,
              slika:slikaOglasa,
              cena:cenaOglasa,
              username:username,
              datumIsteka:datumOglasa
      }
      
      this.http.post('/posaljiOglasNaProveru',oglasZaProveru).subscribe((data) => {});

  }

}
