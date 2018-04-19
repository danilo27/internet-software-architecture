import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { IPolovniRekvizit } from "./IPolovniRekvizit";
import { IZvanicniRekvizit } from "./IZvanicniRekvizit";
import { ILicitacija } from "./ILicitacija";
import { INotifikacija } from "./INotifikacija";


@Injectable()
export class RekvizitiService {

  constructor(private http: HttpClient) { }

  getZvanicniRekviziti(): Observable<IZvanicniRekvizit[]> {
      return this.http.get<IZvanicniRekvizit[]>('/getZvanicniRekviziti');
  }
  
  getPolovniRekviziti(): Observable<IPolovniRekvizit[]> {
      return this.http.get<IPolovniRekvizit[]>('/getPolovniRekviziti');
  }
  
  getOglasiZaProveru(): Observable<IPolovniRekvizit[]> {
      return this.http.get<IPolovniRekvizit[]>('/getOglasiZaProveru');
  }
  
  getAktivniOglasi(user): Observable<IPolovniRekvizit[]>{
      return this.http.post<IPolovniRekvizit[]>('/getAktivniOglasi',user);
  }
  
  getNotifikacije(user): Observable<INotifikacija[]>{
      return this.http.post<INotifikacija[]>('/getNotifikacije',user);
  }
  
  rezervisiZvanicniRekvizit(imeRekvizita,imeKorisnika){
      var rezervacijaRekvizita = {
              imeRekvizita:imeRekvizita,
              imeKorisnika:imeKorisnika
      };
      
      this.http.post('/rezervisiZvanicniRekvizit',rezervacijaRekvizita).subscribe(
          data => { alert("Uspesno ste rezervisali rekvizit" + imeRekvizita) }, 
          error => {alert("Nazalost ovaj rekvizit je vec rezervisan")} 
      );
  }
  
  posaljiOglasNaProveru(nazivOglasa,opisOglasa,slikaOglasa,cenaOglasa,user,datumOglasa,ponude){
      var oglasZaProveru = {
              naziv:nazivOglasa,
              opis:opisOglasa,
              slika:slikaOglasa,
              cena:cenaOglasa,
              username:user.username,
              datumIsteka:datumOglasa,
              ponude:ponude
      }
      
      this.http.post('/posaljiOglasNaProveru',oglasZaProveru).subscribe((data) => {});

  }
  
  postaviRekvizit(nazivRekvizita,opisRekvizita,slikaRekvizita,cenaRekvizita){
      var rekvizit = {
              naziv:nazivRekvizita,
              opis:opisRekvizita,
              slika:slikaRekvizita,
              cena:cenaRekvizita,
              rezervisan:false
      }
      
      this.http.post('/postaviRekvizit',rekvizit).subscribe((data)=>{});
      
  }
  
  izmeniRekvizit(nazivRekvizita,opisRekvizita,slikaRekvizita,cenaRekvizita){
      var rekvizit = {
              naziv:nazivRekvizita,
              opis:opisRekvizita,
              slika:slikaRekvizita,
              cena:cenaRekvizita,
              rezervisan:false
      }
      
      this.http.post('/izmeniRekvizit',rekvizit).subscribe((data)=>{});
  }
  
  ukloniZvanicni(rekvizit){
      this.http.post('/ukloniZvanicni',rekvizit).subscribe((data)=>{});
  }
  
  posaljiPonudu(imeKorisnika,cenaLicitacije,nazivOglasa): boolean{
      var uspeh = false;
      var licitacija = {
              username:imeKorisnika,
              cena:cenaLicitacije,
              oglas:nazivOglasa
      }
      
      this.http.post('/posaljiPonudu',licitacija).subscribe(
              data => { uspeh = true; }, 
              error => {alert("Licitacije na oglas: " + licitacija.oglas + " su zabranjene")} 
          );
      
      return uspeh;
  }
  
  odaberiPonudu(oglas){
      this.http.post('/odaberiPonudu',oglas).subscribe((data)=>{});
  }
  
  prihvacenOglas(oglas){
      this.http.post('/prihvacenOglas',oglas).subscribe(
              data => { alert("Oglas prihvacen: " + oglas.naziv) }, 
              error => {alert("Nazalost ovaj oglas je vec preuzet na proveru")} 
          );
  }
  
  odbijenOglas(oglas){
      this.http.post('/odbijenOglas',oglas).subscribe(
              data => { alert("Oglas odbijen: " + oglas.naziv) }, 
              error => {alert("Nazalost ovaj oglas je vec preuzet na proveru")} 
          );
  }
  
 

}
