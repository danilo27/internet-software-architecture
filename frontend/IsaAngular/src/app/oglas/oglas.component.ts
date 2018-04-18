import { Component, OnInit, Input } from '@angular/core';
import { RekvizitiService } from "../rekviziti.service";
import { UserServiceService } from "../user-service.service";

@Component({
  selector: 'app-oglas',
  templateUrl: './oglas.component.html',
  styleUrls: ['./oglas.component.css']
})
export class OglasComponent implements OnInit {

    @Input('oglas') public oglas; 
    @Input('fileUpload') fileUpload: string;
    
    public trenutnaPonuda = 0;
    public user = null;
    
    
    constructor(private _rekvizitiService: RekvizitiService,
                private _userService: UserServiceService) { }

    ngOnInit() {
        this.user = this._userService.getUser();
        
        var postoji = false;
        
        for(let ponuda of this.oglas.ponude){
            if(ponuda.username == this.user.username){
                this.trenutnaPonuda = ponuda.cena;
                postoji = true;
            }
        }
        
        
        if(!postoji){
            this.trenutnaPonuda = 0;
        }
        
    }
    
    licitiraj(cenaLicitacije){
        this._rekvizitiService.posaljiPonudu(this.user.username,cenaLicitacije,this.oglas.naziv);
        this.trenutnaPonuda = cenaLicitacije;
    }
    
    isUser(){
        if(this.user.username == this.oglas.username){
            return true;
        }else{
            return false;
        }
        
    }
    
    odaberiPonudu(){
        this._rekvizitiService.odaberiPonudu(this.oglas);
    }
    
    isMode(){
        if(this.user.utype == 'regular'){
            console.log('jel dodje dovde makar nekad u true?')
            return true;
        }else{
            console.log('jel dodje dovde makar nekad u false?')
            return false;
        }
    }
    
    prihvacenOglas(){
        this._rekvizitiService.prihvacenOglas(this.oglas);
    }
    
    odbijenOglas(){
        this._rekvizitiService.odbijenOglas(this.oglas);
    }

}
