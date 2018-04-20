package com.controllers;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.bson.conversions.Bson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.expression.ParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.beans.DatumProjekcije;
import com.beans.PozBio;
import com.beans.Projekcija;
import com.beans.RezervacijaKarte;
import com.beans.Termin;
import com.beans.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.repositories.PozBioRepository;
import com.repositories.RezervacijaRepository;
import com.repositories.UserRepository;
import com.services.EmailService;
import com.services.PozBioService;
import com.services.UserService;
import static com.mongodb.client.model.Filters.eq;


@RestController
public class PozBioController {
	@Autowired
	private UserService userService;
	@Autowired
	private PozBioService pozBioService;

	@Autowired
	private RezervacijaRepository rezervacijaRepository;
	
	//all poz
	@RequestMapping(path = "/getPoz", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String getPoz(HttpServletResponse response, HttpSession session)
			throws Exception {	
	    ObjectMapper mapper = new ObjectMapper();  
	    String p = mapper.writeValueAsString(pozBioService.findByType("poz"));
	    System.out.println(p);
	    return p;
	}
	
	//all bio
	@RequestMapping(path = "/getBio", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String getBio(HttpServletResponse response, HttpSession session)
			throws Exception {	
		ObjectMapper mapper = new ObjectMapper();  
	    String b = mapper.writeValueAsString(pozBioService.findByType("bio"));
	    System.out.println(b);
	    return b;
	}
	
	@RequestMapping(path = "/getPozBio/{name}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String getPozBio(@PathVariable String name, HttpServletResponse response, HttpSession session)
			throws Exception {	
		ObjectMapper mapper = new ObjectMapper();  
	    String b = mapper.writeValueAsString(pozBioService.findByName(name.replace("%20", " ")));
	    System.out.println(b);
	    return b;
	}
	
	@RequestMapping(path = "/findPozBio/{tip}/{keyword}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String findPozBio(@PathVariable String tip, @PathVariable String keyword, HttpServletResponse response, HttpSession session)
			throws Exception {	
		ObjectMapper mapper = new ObjectMapper();	
		Collection<PozBio> sta = pozBioService.findByType(tip);
		ArrayList<PozBio> rez = new ArrayList<PozBio>();
		
		String right = keyword.replace("+", " ").toLowerCase();
		
		for(PozBio pb : sta){
			if(pb.getName().toLowerCase().contains(right)){
				rez.add(pb);
			}
		}

	    String u = mapper.writeValueAsString(rez);
	    System.out.println(u);
	    return u;
	}

	@RequestMapping(path = "/sortPozBio/{tip}/{sortBy}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String sortPozBio(@PathVariable String tip, @PathVariable String sortBy, HttpServletResponse response, HttpSession session)
			throws Exception {	
		ArrayList<PozBio> rez = new ArrayList<PozBio>();
		
		for(PozBio pb : pozBioService.findByType(tip)){
			rez.add(pozBioService.findByName(pb.getName()));
		}
		
		if(sortBy.equals("name")){
			Collections.sort(rez, new Comparator<PozBio>() {
				@Override
				public int compare(PozBio o1, PozBio o2) {
					return o1.getName().compareToIgnoreCase(o2.getName());
				}
		       });
			
		    ObjectMapper mapper = new ObjectMapper();
		    String u = mapper.writeValueAsString(rez);
		    System.out.println(u);
		    return u;
		} else if (sortBy.equals("city")){
			Collections.sort(rez, new Comparator<PozBio>() {
				@Override
				public int compare(PozBio o1, PozBio o2) {
					return o1.getCity().compareToIgnoreCase(o2.getCity());
				}
		       });
			
		    ObjectMapper mapper = new ObjectMapper();
		    String u = mapper.writeValueAsString(rez);
		    System.out.println(u);
		    return u;
		} else if (sortBy.equals("distance")){
			return null;
		} else {
			return null;
		}
	}
	
	public int getRezId(){
		return rezervacijaRepository.findAll().size();
	}
	
	private org.bson.Document pojoToDoc(RezervacijaKarte rk){
		org.bson.Document doc = new org.bson.Document();

	    doc.put("pozbio",rk.getPozbio());
	    doc.put("projekcija",rk.getProjekcija());
	    doc.put("datum",rk.getDatum());
	    doc.put("termin",rk.getTermin());
	    doc.put("sala",rk.getSala());
	    doc.put("selected_seats",rk.getSelected_seats());
	    doc.put("invited_friends",rk.getInvited_friends());
	    doc.put("narucilac",rk.getNarucilac());
	    doc.put("idRez", rk.getIdRez());

	    return doc;
	} 
	
	public String compareDates(String datum, String termin) throws java.text.ParseException{
		String sads = new SimpleDateFormat("dd/MM/yyyy HH:mm").format(Calendar.getInstance().getTime());

		System.out.println(datum);
		System.out.println(termin);
		String end = datum+" "+termin;
		SimpleDateFormat formatter2 = new SimpleDateFormat("dd/MM/yyyy HH:mm");
		Date sad = null;
		Date rez = null;
		try{
			sad = formatter2.parse(sads);
			rez = formatter2.parse(end);
		}catch(ParseException e){
			e.printStackTrace();
		}
		System.out.println(sad);
		System.out.println(rez);
		
		Instant instant_sad = Instant.ofEpochMilli(sad.getTime());
	    LocalDateTime sad_ldt = LocalDateTime.ofInstant(instant_sad, ZoneOffset.UTC);
	    
	    Instant instant_rez = Instant.ofEpochMilli(rez.getTime());
	    LocalDateTime rez_ldt = LocalDateTime.ofInstant(instant_rez, ZoneOffset.UTC);
		
		if(sad_ldt.isBefore(rez_ldt)){
			return "pre";
		} else {
			return "posle";
		}
	}
	
	@SuppressWarnings("unused")
	@RequestMapping(path = "/rezervisi", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value = HttpStatus.OK)
	public String rezervisi(@RequestBody RezervacijaKarte rk, HttpServletResponse response,HttpServletRequest request, HttpSession session)
			throws Exception {	
		ArrayList<PozBio> rez = new ArrayList<PozBio>();
		
		PozBio pb = pozBioService.findByName(rk.getPozbio());
		PozBio promenjen = null;
		for(Projekcija proj : pb.getListaProjekcija()){
			if(proj.getNazivProjekcije().equals(rk.getProjekcija())){
				for(DatumProjekcije dp : proj.getListaDatumaProjekcije()){
					if(dp.getDatum().equals(rk.getDatum())){
						for(Termin t : dp.getListaTermina()){
							if(t.getTermin().equals(rk.getTermin()) && t.getSala() == Integer.parseInt(rk.getSala())){
								if(compareDates(dp.getDatum(),t.getTermin()).equals("pre")){
										System.out.println("Rezervisanje...");
										
										User narucilac = userService.findByUsername(rk.getNarucilac());
										
										Mongo mongo = new Mongo("localhost", 27017);
									    DB db = mongo.getDB("test");
										
										DBCollection users = db.getCollection("users");
										DBCollection pozbios = db.getCollection("pozbios");
										
										
										//save	
										RezervacijaKarte nova = new RezervacijaKarte(
												rk.getPozbio(),
												rk.getProjekcija(),
												rk.getDatum(),
												rk.getTermin(),
												rk.getSala(),
												rk.getSelected_seats(),
												rk.getInvited_friends(),
												rk.getNarucilac(),
												getRezId(),
												rk.getUkcena(),
												rk.getFiksnaCena()
												);
										
										rezervacijaRepository.save(nova);
										
									    DBObject findQuery = new BasicDBObject("name", rk.getPozbio());
									    pozbios.update(findQuery, new BasicDBObject("$push",new BasicDBObject("listaRezervacija", pojoToDoc(nova))));
									    
									    DBObject findQuery2 = new BasicDBObject("username", narucilac.getUsername());
									    users.update(findQuery2, new BasicDBObject("$push",new BasicDBObject("listaProjekcija", nova.getIdRez())));
									    System.out.println(userService.findByUsername(narucilac.getUsername()).getListaProjekcija());

									    DBObject findQuery3;
									    for(String un : rk.getInvited_friends()){
									    	findQuery3 = new BasicDBObject("username", un);
									    	 users.update(findQuery3, new BasicDBObject("$push",new BasicDBObject("listaPozivnica", nova.getIdRez())));
									    }

									    for(String seat : rk.getSelected_seats()){
									    	t.getZauzetost().add(seat);
									    	System.out.println(t.getZauzetost());
									    	
									    }
	
										if(pb != null){
											MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
											MongoDatabase baza = mongoClient.getDatabase("test");

											
											MongoCollection<org.bson.Document> pozbos = baza.getCollection("pozbios");
											Gson g = new GsonBuilder().create();
											String prom_json = g.toJson(pb);
											org.bson.Document prom_document = org.bson.Document.parse(prom_json);
		
											pozbos.findOneAndReplace(eq("name",pb.getName()), prom_document);
											
											mongoClient.close();	
										}
									    
										String appUrl = request.getScheme() + "://" + request.getServerName();
		
										System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
									    
										String[] to = { narucilac.getEmail() };
										EmailService.sendFromGMail("tarmiricmiisa","lozinkalozinka",to,
												"New Reservation Details",
		
												rk.getPozbio() + "\n"+rk.getProjekcija()+"\n"+
														rk.getSala()+"\n"+rk.getTermin()
														+"\n"+rk.getUkcena()+" RSD"
												);
										
										System.out.println("Mail sent - naruciocu.");
										
										///////////////////////////////////////////////////////////
		
										ArrayList<String> pom = new ArrayList<String>();
						
										String mail;
										 for(String un : rk.getInvited_friends()){
											 mail = userService.findByUsername(un).getEmail();
											 pom.add(mail); 
										 }
										 if(pom.size()>0){
										String[] to_friends = new String[pom.size()];
										to_friends = pom.toArray(to_friends); 
										EmailService.sendFromGMail("tarmiricmiisa","lozinkalozinka",to_friends,
												"Invitation Link","You have new invitation. You can view them in your invitations on the following link:\n"
												+ appUrl + ":8080/login?token=potvrdiPozivnicu"
														);
										
										System.out.println("Mail sent - prijateljima.");
									 }
								} else {
										 return "{\"poruka\":\"isteklo\"}";
								}
								} else {
									 System.out.println("No invited friends");
								}
							
								return "{\"poruka\":\"success\"}";
															
							
						}
					}
				}
			}
		
		}
		
		return null;
		
	}
	
	@RequestMapping(path = "/sortBioByDistance/{email}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String sortBioByDistance(@PathVariable String email, HttpServletResponse response, HttpSession session)
			throws Exception {	
		ArrayList<User> friends = new ArrayList<User>();
		for(String s : userService.findByEmail(email).getFriends()){
			friends.add(userService.findByEmail(s));
		}
		
		Collections.sort(friends, new Comparator<User>() {
	        @Override
	        public int compare(User c1, User c2) {

	            return c1.getLastname().compareTo(c2.getLastname());
	        }
	       });
		
		   ObjectMapper mapper = new ObjectMapper();
		   
		   
		   
		   String u = mapper.writeValueAsString(friends);
		   System.out.println(u);
		   return u;
	}
}
