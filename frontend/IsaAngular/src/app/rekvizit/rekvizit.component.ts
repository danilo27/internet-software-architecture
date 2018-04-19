import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RekvizitiService } from "../rekviziti.service";
import { UploadFileService } from "../upload-file.service";
import { Observable } from "rxjs/Observable";
import { UserServiceService } from "../user-service.service";

@Component({
  selector: 'app-rekvizit',
  templateUrl: './rekvizit.component.html',
  styleUrls: ['./rekvizit.component.css']
})
export class RekvizitComponent implements OnInit {

    @Input('rekvizit') public rekvizit; 
    @Input('fileUpload') fileUpload: string;
    
    public user = null;
    
    @Output () public izmenaEvent = new EventEmitter();

    constructor(private _rekvizitiService: RekvizitiService,
                private _userService : UserServiceService) { }

    ngOnInit() {
        this.user = this._userService.getUser();
    }

    rezervisiZvanicni(){
        this._rekvizitiService.rezervisiZvanicniRekvizit(this.rekvizit.naziv,this.user.username);
    }
    
    ukloniZvanicni(){
        this._rekvizitiService.ukloniZvanicni(this.rekvizit);
    }
    
    izmeniZvanicni(){
        this.izmenaEvent.emit(this.rekvizit);
    }
    
    isAdmin(){
        if(this.user.utype=="fanAdmin"){
            return true;
        }
        return false;
    }

}