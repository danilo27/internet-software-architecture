import { UserServiceService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rezervacija',
  templateUrl: './rezervacija.component.html',
  styleUrls: ['./rezervacija.component.css']
})
export class RezervacijaComponent implements OnInit {
   poz_bio: any;
   name: string;
   what: string;
   izabrana_projekcija: string;
   izabran_datum: string;
   izabran_termin: string;
   termin: string;
   sala: any;
   cena: any;
   sedista: any;
   my_friends_list: any;
   selected_friends_count: any;
   invited_friends: string[] = [];
   invited_friends_ids: string[] = [];
   kupac = null;
   constructor(private user: UserServiceService,
                private http: HttpClient,
                private router: Router,
                private route: ActivatedRoute
    ) {
       
      console.log('route: ', route.snapshot.params["name"])
      this.name = route.snapshot.params["name"];
      this.what = 'sve';
      this.calling_friends = false;
      this.my_friends();
      
      
  }

  ngOnInit() {
    this.getPozBio();
    this.calling_friends = false;
    this.kupac = this.user.getUser();
  }
  
  getPozBio(){
    this.http.get('/getPozBio/'+this.name).subscribe(data => {  
      if(data != null){
        this.poz_bio = data as any[];
        console.log(this.poz_bio);
      }
    })
  }
  
  projekcija_button(e){
    this.what = 'izabrana_projekcija';
    this.izabrana_projekcija = e.target.name;

    this.calling_friends = false;
    
  }
  
  datum_button(e){
    this.what = 'izabran_datum';
    this.izabran_datum = e.target.name;
    console.log('izabran datum: ', this.izabran_datum);
    this.calling_friends = false;

  }
 
  alphabet: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
  brRow: any;
  brCol: any;
  
  termin_button(e){
    this.what = 'izabran_termin';
    this.izabran_termin = e.target.name;
    console.log('izabran termin: ', this.izabran_termin);
    this.termin = this.izabran_termin.split("-")[0];
    this.sala = Number(this.izabran_termin.split("-")[1]);
    this.cena = Number(this.izabran_termin.split("-")[2]);
    this.rows = [];
    this.cols = [];
    this.selected = [];
    this.reserved = [];
    this.calling_friends = false;

    this.ticketPrice = this.cena;
    this.totalPrice = 0;

    
    for(let s of this.poz_bio.listaSala){
    	if(s.brojSale==this.sala){
    		
    		for(this.brRow=0;this.brRow<s.brojRedova;this.brRow++){
    			if(this.brRow<27){
    				this.rows.push(this.alphabet[this.brRow]);
    			}
    			
    		}
    		
    		for(this.brCol=1;this.brCol<=s.brojKolona;this.brCol++){
    			this.cols.push(this.brCol);
    		}
    	}

    }
    
    for(let p of this.poz_bio.listaProjekcija){
    	if(p.nazivProjekcije == this.izabrana_projekcija){
    		for(let d of p.listaDatumaProjekcije){
    			if(d.datum == this.izabran_datum){
    				for (let t of d.listaTermina){
    					if(t.termin == this.termin && t.sala == this.sala){
    						for(let z of t.zauzetost){
    							console.log(t.zauzetost);
    							this.reserved.push(z);
    						}
    					}
    				}
    			}
    		}
    	}
    }
    
//    for(let z of this.poz_bio.zauzetost){
//    	if(z.datum==this.izabran_datum && z.termin == this.izabran_termin){
//    		for(let m of z.listaMesta){
//    			this.reserved.push(m)
//    		}
//    	}
//    }
    
    
    
//    this.http.get('/getSeats/'+this.poz_bio.name+'/'+this.poz_bio.sala).subscribe(data => {  
//        if(data != null){
//          this.sedista = data as any[];
//          console.log(this.sedista);
//        }
//      })
  }
  
  my_friends(){
	  
	    this.http.get('/find_my_friends/'+this.user.username).subscribe(data => {
	      
	      if(data != null){
	        console.log(data);
	        this.my_friends_list = data as any[];
	        
	        
	      }
	    })
	  }
  
  calling_friends = false;
  called_friends = false;
  
  
  inviteFriendsDiv(){
	  this.calling_friends = true;
	  this.called_friends = false;
  }
  
  doneInviting(){
	  this.calling_friends = false;
	  this.called_friends = true;
  }
  
  changed(){

    this.selected_friends_count = 0;
    this.invited_friends = [];
    this.invited_friends_ids = [];
    this.my_friends_list.forEach(item=>{
      console.log(item);
      if(item['checked']){
        this.selected_friends_count = this.selected_friends_count+1;
        this.invited_friends.push(item);
        this.invited_friends_ids.push(item['username']);
      }  
    })
  }
  
  
  
  
  
  
  
  
  
//variable declarations

  rows: string[] = [];// = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  cols: number[] = [];//  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  reserved: string[] = [];// = ['a1','A2', 'A3', 'F5', 'F1', 'F2','F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];
  selected: string[] = [];

  ticketPrice: number;
  totalPrice: number = 0;
  currency: string = "RSD";

  //return status of each seat
  getStatus = function(seatPos: string) {
      if(this.reserved.indexOf(seatPos) !== -1) {
          return 'reserved';
      } else if(this.selected.indexOf(seatPos) !== -1) {
          return 'selected';
      }
  }
  //clear handler
  clearSelected = function() {
      this.selected = [];
      this.calling_friends = false;
  }
  //click handler
  seatClicked = function(seatPos: string) {
      var index = this.selected.indexOf(seatPos);
      
      if(index !== -1) {
          // seat already selected, remove
    	  if(this.invited_friends.length > this.selected.length - 2 && this.selected.length > 1){
    		  alert('You need to cancel invitation first!')
    	  } else {
    		  this.selected.splice(index, 1)
    	  }
      } else {
          //push to selected array only if it is not reserved
          if(this.reserved.indexOf(seatPos) === -1)
              this.selected.push(seatPos);
      }
  }

  
  //Buy button handler
  showSelected = function() {
      if(this.selected.length > 0) {
          
          if(window.confirm('Mesta:' + this.selected.length + '\nTotal: '+(this.ticketPrice * this.selected.length)+'\nPotvrdite rezervaciju:')){
        	  var rk = {
        			  narucilac: this.user.username,
                      pozbio: this.poz_bio.name,
                		projekcija: this.izabrana_projekcija,
                		datum: this.izabran_datum,
                		termin: this.izabran_termin.split("-")[0],
                		sala: this.izabran_termin.split("-")[1],
                		selected_seats: this.selected,
                		invited_friends: this.invited_friends_ids,
                		ukcena: (this.ticketPrice * this.selected.length * ((100 - this.kupac.popust)/100)),
                		fiksnaCena: this.ticketPrice
                 }

        	    console.log(rk);
        	  	alert('Processing information. Please wait.');
        	  	this.router.navigate(['userpage']);
                this.http.post('/rezervisi', rk).subscribe(data => {
      	        if(data != null){
      	        	if(data['poruka']=='success'){
	      	          alert('Detalji o rezervaciji su poslati na Vas mejl');
	      	          
      	        	} else if(data['poruka']=='isteklo'){
      	        		alert('Isteklo vreme za rezervaciju!');
      	        	}
      	          
      	        }
            })
  	    	
  	    	
  	   }
          
      } else {
          alert("No seats selected!");
      }
  }
  
  
  
  
  
}
