import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit {

    zoom: number = 15;
    
    public cinemas = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('/getCinemas').subscribe(data=>this.cinemas=data);
  }

}
