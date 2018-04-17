import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  public what: string;
  public all_or_found_bio: string;
  public all_or_found_poz: string;
  
  constructor(private user: UserServiceService,
  private http: HttpClient,private router:Router,
                private route: ActivatedRoute) {
        // this.friends = user.friends;

  }
  //my_friends_list: Array<Array<string>>;
   my_friends_list: any;
  bios_list: any;
  bios_sorted: any;
  poz_list: any;
  poz_sorted: any;
  friends_sorted: string;
  
    get email():string {
      return this.user.email;
    }
    set email(value: string) {
      this.user.email = value;
    }

    get friends():Array<string> {
        return this.user.friends;
    }

    set friends(value: Array<string>){
        this.user.friends = value;
    }

    getUsername(){
      return this.user.getUsername();
      }
  ngOnInit() {
    console.log('user set on userpage', this.user.getUser());
    this.my_friends();
  }
  
  friends_button(){
    this.what='friends';
  }
  
  istorija(){
  this.what ='history';
  }
  
  lista_rezervacija(){
  this.what = 'rezervations';
  }
  
  cinemas_button(){
  this.what = 'cinemas';
    this.all_or_found_bio = 'all_bio';
    this.getAllBios();
  }
  
  theatres_button(){
  this.what = 'theatres';
    this.all_or_found_poz = 'all_poz';
    this.getAllPoz();
  }
  
  my_profile_button(){
  this.router.navigate(['users/'+this.user.username]);
  }
  
  getAllBios(){
  this.http.get('/getBio').subscribe(data => {
      
      if(data != null){
        console.log(data);
        this.bios_list = data as any[];
        
       
      }
    })
  }
  
   getAllPoz(){
  this.http.get('/getPoz').subscribe(data => {
      
      if(data != null){
        console.log(data);
        this.poz_list = data as any[];
        
       
      }
    })
  }
  
  findBio(event){
    event.preventDefault();
    if(event.target.elements[0].value.length == 0){
      this.getAllBios();
    } else {
      this.http.get('/findPozBio/bio/'+event.target.elements[0].value).subscribe(data => {
        if(data != null){
       
          this.bios_list = data as any[];
          
         
        }
      })
    }
  }
  
  findPoz(event){
    event.preventDefault();
    if(event.target.elements[0].value.length == 0){
      this.getAllPoz();
    } else {
      this.http.get('/findPozBio/poz/'+event.target.elements[0].value).subscribe(data => {
        
        if(data != null){
       
          this.poz_list = data as any[];
          
         
        }
      })
    }
  }
  
  my_friends(){
  
    this.http.get('/find_my_friends/'+this.user.username).subscribe(data => {
      
      if(data != null){
        console.log('1 ',data);
        this.my_friends_list = data as any[];
        
       
      }
    })
  }
  
  removeFriend(event) {
     console.log(event.target.name);

      this.http.get('/removeFriend/'+this.user.username+"/"+event.target.name).subscribe(data => {

     this.my_friends();
    })
    return false;
  }
  
  sortByName(){
  
    this.http.get('/sortByName/'+this.user.username).subscribe(data => {
      
      if(data != null){
        console.log('sort by name ',data);
        this.my_friends_list = data as any[];
        
       
      }
    })
  }
  
  sortByLastname(){
  
    this.http.get('/sortByLastname/'+this.user.username).subscribe(data => {
      
      if(data != null){
        console.log('sort by lastname ',data);
        this.my_friends_list = data as any[];
        
       
      }
    })
  }
  
  sortBioByName(){
  
    this.http.get('/sortPozBio/bio/name').subscribe(data => {  
      if(data != null){
        this.bios_list = data as any;
        
       
      }
    })
  }
  
  sortBioByCity(){
  
    this.http.get('/sortPozBio/bio/city').subscribe(data => {
      
      if(data != null){
        this.bios_list = data as any[];
        
       
      }
    })
  }
 
  sortBioByDistance(){
  
    this.http.get('/sortPozBio/bio/distance').subscribe(data => {
      
      if(data != null){
        this.bios_list = data as any[];
        
       
      }
    })
  }

  sortPozByName(){
  
    this.http.get('/sortPozBio/poz/name').subscribe(data => {
      
      if(data != null){
        this.my_friends_list = data as any[];
        
       
      }
    })
  }
  
  sortPozByCity(){
  
    this.http.get('/sortPozBio/poz/city').subscribe(data => {
      
      if(data != null){
        this.my_friends_list = data as any[];
        
       
      }
    })
  }
  
  sortPozByDistance(){
  
    this.http.get('/sortPozBio/poz/distance').subscribe(data => {
      
      if(data != null){
        this.my_friends_list = data as any[];
       
      }
    })
  }
  
}
