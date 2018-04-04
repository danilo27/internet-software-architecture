import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RekvizitiService } from "../rekviziti.service";
import { UploadFileService } from "../upload-file.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-rekvizit',
  templateUrl: './rekvizit.component.html',
  styleUrls: ['./rekvizit.component.css']
})
export class RekvizitComponent implements OnInit {

    @Input('rekvizit') public rekvizit; 
    @Input('username') public username;
    @Input('fileUpload') fileUpload: string;
    
    

    constructor(private _rekvizitiService: RekvizitiService) { }

    ngOnInit() {
    }

    rezervisiZvanicni(){
        this._rekvizitiService.rezervisiZvanicniRekvizit(this.rekvizit.naziv,this.username);
    }

}
