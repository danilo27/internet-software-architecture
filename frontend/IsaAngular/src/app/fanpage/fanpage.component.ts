import { Component, OnInit } from '@angular/core';
import { RekvizitiService } from "../rekviziti.service";
import { UserServiceService } from "../user-service.service";

@Component({
  selector: 'app-fanpage',
  templateUrl: './fanpage.component.html',
  styleUrls: ['./fanpage.component.css']
})
export class FanpageComponent implements OnInit {
    public url: any;
    
    public zvanicniRekviziti = null;
    
    public oglasi = null;
   
    public oglasiKorisnika = null;
    
    public user = "vlada";
    
    public state = "zvanicni"; 
    
    public selectedFile = null;
    
    
    constructor(private _rekvizitiService: RekvizitiService,
                private _userService: UserServiceService) { }

    ngOnInit() {
        this._rekvizitiService.getZvanicniRekviziti().subscribe(data => this.zvanicniRekviziti = data);
        this._rekvizitiService.getPolovniRekviziti().subscribe(data => this.oglasi = data);
//        this._rekvizitiService.getAktivniOglasi(this.user).subscribe(data => this.oglasiKorisnika = data);
        //this._userService.getUser().subscribe(data => this.user = data);
    }
    
    public zvanicnaProdavnica(){
        this.state = "zvanicni";
    }

    public polovniOglasi(){
        this.state = "oglasi";
    }
    
    public noviOglas(){
        this.state = "noviOglas";
    }
    
    public aktivniOglasi(){
        this.state = "aktivniOglasi";
    }
    
    public postaviOglas(nazivOglasa,opisOglasa,slikaOglasa,cenaOglasa,datumOglasa){
        console.log('postavljen oglas :');
        console.log(nazivOglasa,opisOglasa,slikaOglasa,cenaOglasa,datumOglasa);
        this._rekvizitiService.posaljiOglasNaProveru(nazivOglasa,opisOglasa,slikaOglasa,cenaOglasa,this.user,datumOglasa);
    }
    
    onSelectFile(event) { 
            this.selectedFile = event.target.files[0];
        
    }
    
    
    
    
    
}
