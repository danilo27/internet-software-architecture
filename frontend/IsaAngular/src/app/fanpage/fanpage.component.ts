import { Component, OnInit } from '@angular/core';
import { RekvizitiService } from "../rekviziti.service";
import { UserServiceService } from "../user-service.service";

@Component({
  selector: 'app-fanpage',
  templateUrl: './fanpage.component.html',
  styleUrls: ['./fanpage.component.css']
})
export class FanpageComponent implements OnInit {
    
    public zvanicniRekviziti = null;
    
    public oglasi = null;
    
    public user = "vlada";
    
    public rezervisaniRekviziti;
    
    public oglasiPrikazani = false; 
    
    constructor(private _rekvizitiService: RekvizitiService,
                private _userService: UserServiceService) { }

    ngOnInit() {
        this._rekvizitiService.getZvanicniRekviziti().subscribe(data => this.zvanicniRekviziti = data);
        this._rekvizitiService.getPolovniRekviziti().subscribe(data => this.oglasi = data);
        //this._userService.getUser().subscribe(data => this.user = data);
    }
    
    public rezervisanRekvizit(data){
        this.rezervisaniRekviziti = data;
    }
    
    public isOglasi(){
        return this.oglasiPrikazani;
    }
    
    public zvanicnaProdavnica(){
        this.oglasiPrikazani = false;
    }

    public polovniOglasi(){
        this.oglasiPrikazani = true;
    }
}
