import { Component, OnInit } from '@angular/core';
import { RekvizitiService } from "../rekviziti.service";
import { UserServiceService } from "../user-service.service";
import { UploadFileService } from "../upload-file.service";
import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IPonuda } from "../IPonuda";

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
    
    public oglasiZaProveru = null;
    
    public user = null;
    
    public notifikacije = null;
    
    public state = "zvanicni"; 
    
    public selectedFiles: FileList;
    public currentFileUpload: File;
    
    public fileUploads : string[];
    
    public nazivRek = "";
    public opisRek="";
    public slikaRek="";
    public cenaRek="";
    public mode = false;
    
    constructor(private _rekvizitiService: RekvizitiService,
                private _userService: UserServiceService,
                private _uploadService: UploadFileService) { }

    ngOnInit() {
        this._rekvizitiService.getZvanicniRekviziti().subscribe(data => this.zvanicniRekviziti = data);
        this._rekvizitiService.getPolovniRekviziti().subscribe(data => this.oglasi = data);
        this._uploadService.getFiles().subscribe(data => this.fileUploads = data);
        this.user = this._userService.getUser();
        
        console.log('user '+this.user.username +" type "+this.user.utype);
        
        this._rekvizitiService.getAktivniOglasi(this.user).subscribe(data => this.oglasiKorisnika = data);
        this._rekvizitiService.getNotifikacije(this.user).subscribe(data => this.notifikacije = data);
        
    }
    
    public zvanicnaProdavnica(){
        this.state = "zvanicni";
        this._uploadService.getFiles().subscribe(data => this.fileUploads = data);
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
    
    public noviZvanicniRekvizit(){
        this.state = "noviRekvizit";
    }
    
    public postaviOglas(nazivOglasa,opisOglasa,cenaOglasa,datumOglasa){
        var slikaRekvizita = 'noimage.jpg';
        
        if(this.selectedFiles){
            if(this.selectedFiles.item(0).name != this.slikaRek){
                slikaRekvizita = this.selectedFiles.item(0).name;
                
                this.currentFileUpload = this.selectedFiles.item(0)
                this._uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
                  if (event instanceof HttpResponse) {
                    console.log('File is completely uploaded!');
                  }
                })
                
                this.selectedFiles = undefined;
                
            }
        }
        
        
        var ponude:IPonuda[] = [];
        this._rekvizitiService.posaljiOglasNaProveru(nazivOglasa,opisOglasa,slikaRekvizita,cenaOglasa,this.user,datumOglasa,ponude);

        
        
        this._uploadService.getFiles().subscribe(data => this.fileUploads = data);
        this.state = "zvanicni";
    }
    
    
    public postaviRekvizit(nazivRekvizita,opisRekvizita,cenaRekvizita){     
        var slikaRekvizita = 'noimage.jpg';
        
        if(this.selectedFiles){
            if(this.selectedFiles.item(0).name != this.slikaRek){
                slikaRekvizita = this.selectedFiles.item(0).name;
                
                this.currentFileUpload = this.selectedFiles.item(0)
                this._uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
                  if (event instanceof HttpResponse) {
                    console.log('File is completely uploaded!');
                  }
                })
                
                this.selectedFiles = undefined;
                
            }
        }
        
        console.log(slikaRekvizita);
        
        this._rekvizitiService.postaviRekvizit(nazivRekvizita,opisRekvizita,slikaRekvizita,cenaRekvizita);
        
        this._uploadService.getFiles().subscribe(data => this.fileUploads = data);
        this.state = "zvanicni";
    }
    
    public izmeniRekvizit(nazivRekvizita,opisRekvizita,cenaRekvizita){
        var slikaRekvizita = this.slikaRek;
        var slikaPromenjena = false;
        
        if(this.selectedFiles){
            if(this.selectedFiles.item(0).name != this.slikaRek){
                slikaRekvizita = this.selectedFiles.item(0).name;
                slikaPromenjena = true;
            }
        }
        
        
        this._rekvizitiService.izmeniRekvizit(nazivRekvizita,opisRekvizita,slikaRekvizita,cenaRekvizita);
        
        if(slikaPromenjena){
            this.currentFileUpload = this.selectedFiles.item(0)
            this._uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
              if (event instanceof HttpResponse) {
                console.log('File is completely uploaded!');
              }
            })
         
            this.selectedFiles = undefined;
            
            
            this._uploadService.getFiles().subscribe(data => this.fileUploads = data);
        }
        
        this.nazivRek = "";
        this.opisRek="";
        this.slikaRek="";
        this.cenaRek="";
        this.mode = false;
        
        this.state = "zvanicni";
        
    }
    
    
    onSelectFile(event) { 
        this.selectedFiles = event.target.files; 
    }
    
    isImage(r,file){
        return file.includes(r);
    }
    
    isAdmin(){
        if(this.user.utype=="fanAdmin"){
            return true;
        }
        return false;
    }
    
    pregledajOglase(){
        this._rekvizitiService.getOglasiZaProveru().subscribe(data => this.oglasiZaProveru = data);
        this.state="proveraOglasa";
    }

    
    izmena(rekvizit){
        this.mode=true;
        this.nazivRek=rekvizit.naziv;
        this.opisRek=rekvizit.opis;
        this.slikaRek=rekvizit.slika;
        this.cenaRek=rekvizit.cena;
        this.state="noviRekvizit";
    }
    
    isMode(){
        return this.mode;
    }
    
    odustani(){
        this.nazivRek = "";
        this.opisRek="";
        this.slikaRek="";
        this.cenaRek="";
        this.mode = false;
        
        this.state = "zvanicni";
    }
    
    seen(naziv){
        console.log(naziv);
    }
}
