import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from '@angular/router'
import { } from '@types/googlemaps';
import { IUser } from "../IUser";

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
    lat: number = 45.25362179991922;
    lng: number = 19.830322265625;
    zoom: number = 12;
    locationChosen = false;
    adminName: string;
    
    bstatus: number = 50;
    sstatus: number = 30;
    zstatus: number = 0;

    public admins = null;
    
  public what: string;
  public usertype: string;
  public admin_what: string;
  
  constructor(private user: UserServiceService,
  private http: HttpClient,private router:Router,
                private route: ActivatedRoute) {
        // this.friends = user.friends;

  }
  //my_friends_list: Array<Array<string>>;
   my_friends_list: any;
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
    this.usertype = this.user.getUtype();
    console.log('user type');
    console.log(this.usertype);
    this.user.getVenueAdmins().subscribe(data=>this.admins = data);
    
    
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
  }
  
  theatres_button(){
  this.what = 'theatres';
  }
  
  register_cinemas_button(){
      this.admin_what = 'register_cinemas';
      
      console.log(this.admins);
  }
  
  add_admin_button(){
      this.admin_what = 'add_admin';
  }
  
  my_profile_button(){
  this.router.navigate(['users/'+this.user.username]);
  }
  
  my_friends(){
  
    this.http.get('/find_my_friends/'+this.user.email).subscribe(data => {
      
      if(data != null){
        console.log('1 ',data);
        this.my_friends_list = data as any[];
        
       
      }
    })
  }
  
  removeFriend(event) {
     console.log(event.target.name);

      this.http.get('/removeFriend/'+this.user.email+"/"+event.target.name).subscribe(data => {

     this.my_friends();
    })
    return false;
  }
  
  sortByName(){
  
    this.http.get('/sortByName/'+this.user.email).subscribe(data => {
      
      if(data != null){
        console.log('sort by name ',data);
        this.my_friends_list = data as any[];
        
       
      }
    })
  }
  
  sortByLastname(){
  
    this.http.get('/sortByLastname/'+this.user.email).subscribe(data => {
      
      if(data != null){
        console.log('sort by lastname ',data);
        this.my_friends_list = data as any[];
        
       
      }
    })
  }
  
  addAdmin(sysAdmin,name){
      console.log('podaci');
      console.log(sysAdmin);
      console.log(name);
      
      var utype = "";
      
      if(sysAdmin){
          utype = 'sysAdmin';
      }else{
          utype = 'fanAdmin';
      }
      
      var user = {
          utype: utype,
          username: name
      }
      
      this.http.post('/addAdmin',user).subscribe(data => {});
      
      
  }
  
  registerVenue(cinemaButton,venueName){
      console.log(cinemaButton);
      console.log(venueName);
      
      var type = "";
      if(cinemaButton){
          type = "cinema";
      }else{
          type = "theatre";
      }
      
      
      var pozbio = {
              type: type,
              name: venueName,
              adminName: this.adminName,
              latitude: this.lat,
              longitude: this.lng
      }
      
      this.http.post('/registerVenue',pozbio).subscribe(data => {});
  }
  
  
  onChoseLocation(event){
      this.lat = event.coords.lat;
      this.lng = event.coords.lng;
      console.log(event);
      this.locationChosen = true;
  }
  
  chosenAdmin(username){
      this.adminName=username;
  }
}
