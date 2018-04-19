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

  public all_or_found_bio: string;
  public all_or_found_poz: string;

  public usertype: string;
  public admin_what: string;

  public promenio: boolean;
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
  res: any;
  inv: any;
  hist: any;
  
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

    
    this.usertype = this.user.getUtype();
    this.promenio = this.user.getPromenio();

    

	    this.my_friends();
	    
	   
	    console.log(this.usertype);
	    this.user.getVenueAdmins().subscribe(data=>this.admins = data);
	
    
  }

  
  friends_button(){
    this.what='friends';
  }
  
  istorija(){
  this.what ='history';
	this.http.get('/getMyHist/'+this.user.username).subscribe(data => {
	      
	      if(data != null){
	        console.log(data);
	        this.hist = data as any[];
	        
	       
	      }
	    })
  }
  
  lista_rezervacija(){
	  this.what = 'reservations';
	  this.http.get('/getMyRes/'+this.user.username).subscribe(data => {
      
      if(data != null){
        console.log(data);
        this.res = data as any[];
        
       
      }
    })
  }
  
  lista_pozivnica(){
  this.what = 'invitations';
  this.http.get('/getMyInv/'+this.user.username).subscribe(data => {
      
      if(data != null){
        console.log(data);
        this.inv = data as any[];
        
       
      }
    })
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
  
  removeRes(event){
	  console.log('cancel res: ',event.target.name);
      this.http.get('/cancelRes/'+this.user.username+"/"+event.target.name).subscribe(data => {
      if(data['poruka']=='canceled'){
    	  this.lista_rezervacija();
      } else {
    	  alert('Isteklo vreme za otkazivanje!');
      }
    })
    return false;
  }
  
  acceptRes(event){
	  console.log('accept inv: ',event.target.name);
      this.http.get('/acceptInv/'+this.user.username+"/"+event.target.name).subscribe(data => {

    	  this.lista_pozivnica();
    })
    return false;
  }
  
  declineRes(event){
	  console.log('decline inv: ',event.target.name);
      this.http.get('/declineInv/'+this.user.username+"/"+event.target.name).subscribe(data => {

    	  this.lista_pozivnica();
    })
    return false;
  }

}
