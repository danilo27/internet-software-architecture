import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-oglas',
  templateUrl: './oglas.component.html',
  styleUrls: ['./oglas.component.css']
})
export class OglasComponent implements OnInit {

    @Input('oglas') public oglas; 
    
    constructor() { }

    ngOnInit() {
    }

}
