import { Component, OnInit } from '@angular/core';
import { RekvizitiService } from "../rekviziti.service";
import { UserServiceService } from "../user-service.service";
import { UploadFileService } from "../upload-file.service";
import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

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
    
    public selectedFiles: FileList;
    public currentFileUpload: File;
    
    public fileUploads : string[];
    
    constructor(private _rekvizitiService: RekvizitiService,
                private _userService: UserServiceService,
                private _uploadService: UploadFileService) { }

    ngOnInit() {
        this._rekvizitiService.getZvanicniRekviziti().subscribe(data => this.zvanicniRekviziti = data);
        this._rekvizitiService.getPolovniRekviziti().subscribe(data => this.oglasi = data);
        this._uploadService.getFiles().subscribe(data => this.fileUploads = data);
        
        console.log('fileUploads:');
        console.log(this.fileUploads);
//        this._rekvizitiService.getAktivniOglasi(this.user).subscribe(data => this.oglasiKorisnika = data);
        //this._userService.getUser().subscribe(data => this.user = data);
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
    
    public postaviOglas(nazivOglasa,opisOglasa,cenaOglasa,datumOglasa){
        var slikaOglasa = "testSlikeValjda";
        console.log('postavljen oglas :');
        console.log(nazivOglasa,opisOglasa,slikaOglasa,cenaOglasa,datumOglasa);
        this._rekvizitiService.posaljiOglasNaProveru(nazivOglasa,opisOglasa,slikaOglasa,cenaOglasa,this.user,datumOglasa);
        
        this.currentFileUpload = this.selectedFiles.item(0)
        this._uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
          if (event instanceof HttpResponse) {
            console.log('File is completely uploaded!');
          }
        })
     
        this.selectedFiles = undefined;
        
        
        this._uploadService.getFiles().subscribe(data => this.fileUploads = data);
        this.state = "zvanicni";
    }
    
    onSelectFile(event) { 
        this.selectedFiles = event.target.files; 
    }
    
    isImage(r,file){
        console.log(r);
        console.log(file);
        return file.includes(r);
    }
    
    
    
}
