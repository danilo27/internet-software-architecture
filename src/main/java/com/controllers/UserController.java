package com.controllers;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.bson.Document;
import org.bson.conversions.Bson;
import org.hibernate.validator.internal.constraintvalidators.hv.EmailValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.expression.ParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.beans.Aplikacija;
import com.beans.DatumProjekcije;
import com.beans.PozBio;
import com.beans.Projekcija;
import com.beans.RezervacijaKarte;
import com.beans.Termin;
import com.beans.User;
import com.beans.ZvanicniRekvizit;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.ServerAddress;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;
import com.repositories.RezervacijaRepository;
import com.repositories.UserRepository;
import com.services.EmailService;
import com.services.PozBioService;
import com.services.UserService;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;
import static com.mongodb.client.model.Filters.eq;

@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private UserService userService;
	@Autowired
	private PozBioService pozBioService;
	@Autowired
	private RezervacijaRepository rezervacijaRepository;
	@Autowired
	MongoOperations  mongoOperations;
	
	// @Autowired
	// private Aplikacija aplikacija;

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value = HttpStatus.OK)
	public String guestLogin(@RequestBody User user, HttpServletResponse response, HttpSession session)
			throws Exception {
		if (userRepository.findByEmail(user.getEmail()) != null && userRepository.findByEmail(user.getEmail()).getEnabled().equals("true")) {
				if(userRepository.findByEmail(user.getEmail()).getPassword().equals(user.getPassword())){
				ObjectMapper mapper = new ObjectMapper();
				String u = mapper.writeValueAsString(userRepository.findByEmail(user.getEmail()));
				return u;
			} else {
				return null;
			}
		} else {
			System.out.println("User ne postoji!");
			return null;
		}
	}

	@RequestMapping(
			value = "/updateUser",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public String processRegistrationForm(@RequestBody User user, HttpServletRequest request) throws JsonProcessingException {
		String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\."+
                "[a-zA-Z0-9_+&*-]+)*@" +
                "(?:[a-zA-Z0-9-]+\\.)+[a-z" +
                "A-Z]{2,7}$";
			
	   Pattern pat = Pattern.compile(emailRegex);
      
       boolean good = true; pat.matcher(user.getEmail()).matches();

	   MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
	   MongoDatabase baza = mongoClient.getDatabase("test");
	   MongoCollection<Document> korisnici = baza.getCollection("users");

	   if(!user.getPassword().equals("") && user.getPassword().length() > 2 && !user.getPassword().contains(" ")){
		   if(userService.findByUsername(user.getUsername())!=null){
			   if(user.getPassword().equals(user.getPasswordRepeat())){
				   if(!userService.findByUsername(user.getUsername()).getPassword().equals(user.getPassword())){
					   korisnici.findOneAndUpdate(eq("username",user.getUsername()), Updates.set("password", user.getPassword()));
					   korisnici.findOneAndUpdate(eq("username",user.getUsername()), Updates.set("passwordRepeat", user.getPassword()));
					   korisnici.findOneAndUpdate(eq("username",user.getUsername()), Updates.set("promenio", true));
				   }
			   }
		   }
	   }
				
	   if(!user.getName().equals("")){
		   if(userService.findByLoggedInEmail(user.getLoggedInEmail())!=null){
			   korisnici.findOneAndUpdate(eq("loggedInEmail",user.getLoggedInEmail()), Updates.set("name", user.getName()));				
		   }
	   }	
		
	   if(!user.getLastname().equals("")){
		   if(userService.findByEmail(user.getLoggedInEmail())!=null){
			   korisnici.findOneAndUpdate(eq("loggedInEmail",user.getLoggedInEmail()), Updates.set("lastname", user.getLastname()));
		   }
	   }
	   
	   if(!user.getCity().equals("")){
		   if(userService.findByLoggedInEmail(user.getLoggedInEmail())!=null){
			   korisnici.findOneAndUpdate(eq("loggedInEmail",user.getLoggedInEmail()), Updates.set("city", user.getCity()));
		   }
	   }
	   
	   if(!Integer.toString(user.getPhoneNumber()).equals("")){
		   if(userService.findByLoggedInEmail(user.getLoggedInEmail())!=null){
			   korisnici.findOneAndUpdate(eq("loggedInEmail",user.getLoggedInEmail()), Updates.set("phoneNumber", user.getPhoneNumber()));
		   }
	   }
	   
	   if(!user.getEmail().equals("")){ 
		   if(good){ 
			   if(userService.findByLoggedInEmail(user.getLoggedInEmail()) != null) { 
				   if(userService.findByEmail(user.getEmail()) == null){ 
					   korisnici.findOneAndUpdate(eq("loggedInEmail",user.getLoggedInEmail()), Updates.set("email", user.getEmail()));
					   korisnici.findOneAndUpdate(eq("email",user.getEmail()), Updates.set("loggedInEmail", user.getLoggedInEmail()));
					  
				   }
			   }
		   }
	   }
   
	   ObjectMapper mapper = new ObjectMapper();

	   String u = mapper.writeValueAsString(userService.findByLoggedInEmail(user.getLoggedInEmail()));
	   System.out.println("Updated user: " + u);
	   System.out.println(userService.findByUsername(user.getUsername()));
	   mongoClient.close();
	   return u;
			
	}
	
	@RequestMapping(path = "/changePassword", method = RequestMethod.POST)
	@ResponseStatus(value = HttpStatus.OK)
	public String changePassword(@RequestBody User user, HttpServletResponse response, HttpSession session)
			throws Exception {	
		   MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
		   MongoDatabase baza = mongoClient.getDatabase("test");
		   MongoCollection<Document> korisnici = baza.getCollection("users");
		   
		   if(!user.getPassword().equals("") && user.getPassword().length() > 2 && !user.getPassword().contains(" ")){
			   if(userService.findByUsername(user.getUsername())!=null){
				   if(user.getPassword().equals(user.getPasswordRepeat())){
					   if(!userService.findByUsername(user.getUsername()).getPassword().equals(user.getPassword())){
						   korisnici.findOneAndUpdate(eq("username",user.getUsername()), Updates.set("password", user.getPassword()));
						   korisnici.findOneAndUpdate(eq("username",user.getUsername()), Updates.set("passwordRepeat", user.getPassword()));
						   korisnici.findOneAndUpdate(eq("username",user.getUsername()), Updates.set("promenio", true));
					   }
				   }
			   }
		   }

		   ObjectMapper mapper = new ObjectMapper();
		   String u = mapper.writeValueAsString(userService.findByUsername(user.getUsername()));
		   System.out.println("Updated user: " + u);
		   mongoClient.close();
		   return u;
	
	}
	
	@RequestMapping(path = "/find_my_friends/{username}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String find_my_friends(@PathVariable String username, HttpServletResponse response, HttpSession session)
			throws Exception {	
		ArrayList<User> friends = new ArrayList<User>();
		
		for(String s : userRepository.findByUsername(username).getFriends()){
			System.out.println(s);
			friends.add(userService.findByUsername(s));
		}
		ObjectMapper mapper = new ObjectMapper();
		   	   
	    String u = mapper.writeValueAsString(friends);
	    System.out.println(u);
	    return u;
	}
	
	@RequestMapping(path = "/find_friends/{username}", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value = HttpStatus.OK)
	public ArrayList<ArrayList<String>> find_friends(@RequestBody User user, @PathVariable String username, HttpServletResponse response, HttpSession session)
			throws Exception {
		ArrayList<ArrayList<String>>  results = new ArrayList<ArrayList<String>> ();
		ArrayList rek = new ArrayList<>();
		for(User us : userRepository.findAll()){	
			rek = new ArrayList<>();
			if(user.getName().toLowerCase().equals(us.getName().toLowerCase()) && user.getLastname().toLowerCase().equals(us.getLastname().toLowerCase())){
				if(!username.equals(us.getEmail())){
					if(userService.findByUsername(username).getListaPoslatihZahteva().contains(us.getUsername())){
						rek.add(us.getEmail());
						rek.add(us.getUsername());
						rek.add("poslat");
						rek.add(us.getName());
						rek.add(us.getLastname());
						results.add(rek);
					}else if(userService.findByUsername(username).getListaZahteva().contains(us.getUsername())){
						rek.add(us.getEmail());
						rek.add(us.getUsername());
						rek.add("primljen");
						rek.add(us.getName());
						rek.add(us.getLastname());
						results.add(rek);
					} else if (userService.findByUsername(username).getFriends().contains(us.getUsername())){
						rek.add(us.getEmail());
						rek.add(us.getUsername());
						rek.add("vec");
						rek.add(us.getName());
						rek.add(us.getLastname());
						results.add(rek);
					}
					else
					{
						rek.add(us.getEmail());
						rek.add(us.getUsername());
						rek.add("ne");
						rek.add(us.getName());
						rek.add(us.getLastname());
						results.add(rek);
					}
				}
			} else if (user.getName().toLowerCase().equals(us.getName().toLowerCase()) || user.getLastname().toLowerCase().equals(us.getLastname().toLowerCase())) {
				if(!username.equals(us.getEmail())){
					if(userService.findByUsername(username).getListaPoslatihZahteva().contains(us.getUsername())){
						rek.add(us.getEmail());
						rek.add(us.getUsername());
						rek.add("poslat");
						rek.add(us.getName());
						rek.add(us.getLastname());
						results.add(rek);
					}
					else if(userService.findByUsername(username).getFriends().contains(us.getUsername())){
						rek.add(us.getEmail());
						rek.add(us.getUsername());
						rek.add("vec");
						rek.add(us.getName());
						rek.add(us.getLastname());
						results.add(rek);
					}else if(userService.findByUsername(username).getListaZahteva().contains(us.getUsername())){
						rek.add(us.getEmail());
						rek.add(us.getUsername());
						rek.add("primljen");
						rek.add(us.getName());
						rek.add(us.getLastname());
						results.add(rek);
					}
					else
					{
						rek.add(us.getEmail());
						rek.add(us.getUsername());
						rek.add("ne");
						rek.add(us.getName());
						rek.add(us.getLastname());
						results.add(rek);
					}
				}
			}
		}
		
		return results;
	}
	
	@RequestMapping(path = "/add_friend/{username_sender}/{username_reciever}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public void add_friend(HttpServletResponse response, @PathVariable String username_sender, @PathVariable String username_reciever, HttpSession session)
			throws Exception {

		System.out.println(username_sender + " - " + username_reciever);
		Mongo mongo = new Mongo("localhost", 27017);
	    DB db = mongo.getDB("test");

	    DBCollection collection = db.getCollection("users");
		
	    DBObject findQuery = new BasicDBObject("username", username_sender);
	    collection.update(findQuery, new BasicDBObject("$push",new BasicDBObject("listaPoslatihZahteva", username_reciever)));
	    
	    
	    DBObject findQuery2 = new BasicDBObject("username", username_reciever);
	    collection.update(findQuery2, new BasicDBObject("$push",new BasicDBObject("listaZahteva", username_sender)));
	    
	}
	
	@RequestMapping(path = "/pending_friend_requests/{username}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public ArrayList<String> pending_friend_requests(@PathVariable String username, HttpServletResponse response, HttpSession session)
			throws Exception {	
		
		return userRepository.findByUsername(username).getListaZahteva();
	}
	
	@RequestMapping(path = "/acceptFR/{username_sender}/{username_reciever}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public void acceptFR(HttpServletResponse response, @PathVariable String username_sender, @PathVariable String username_reciever, HttpSession session)
			throws Exception {
		MongoClient mongo = new MongoClient(new ServerAddress("localhost", 27017));
	    DB db = mongo.getDB("test");

	    DBCollection collection = db.getCollection("users");
	    
	    DBObject findQuery = new BasicDBObject("username", username_sender);
	    collection.update(findQuery, new BasicDBObject("$push", new BasicDBObject("friends", username_reciever)));
	   
	    
	    BasicDBObject match = new BasicDBObject("username", username_sender); 
	    BasicDBObject update = new BasicDBObject("listaZahteva", username_reciever);
	    collection.update(match, new BasicDBObject("$pull", update));
	    
	    
	    
	    DBObject findQuery2 = new BasicDBObject("username", username_reciever);
	    collection.update(findQuery2, new BasicDBObject("$push",new BasicDBObject("friends", username_sender)));
	    
	    
	    BasicDBObject match2 = new BasicDBObject("username", username_reciever); 
	    BasicDBObject update2 = new BasicDBObject("listaPoslatihZahteva", username_sender);
	    collection.update(match2, new BasicDBObject("$pull", update2));
	    
	}
	
	@RequestMapping(path = "/declineFR/{username_sender}/{username_reciever}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public void declineFR(HttpServletResponse response, @PathVariable String username_sender, @PathVariable String username_reciever, HttpSession session)
			throws Exception {
		
		Mongo mongo = new Mongo("localhost", 27017);
	    DB db = mongo.getDB("test");

	    DBCollection collection = db.getCollection("users");
		
	    DBObject findQuery = new BasicDBObject("username", username_sender);
	    collection.update(findQuery, new BasicDBObject("$pull",new BasicDBObject("listaZahteva", username_reciever)));
	    
	    DBObject findQuery2 = new BasicDBObject("username", username_reciever);
	    collection.update(findQuery2, new BasicDBObject("$pull",new BasicDBObject("listaPoslatihZahteva", username_sender)));
	    
	}
	
	@RequestMapping(path = "/removeFriend/{username_sender}/{username_reciever}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public void removeFriend(HttpServletResponse response, @PathVariable String username_sender, @PathVariable String username_reciever, HttpSession session)
			throws Exception {
		
		Mongo mongo = new Mongo("localhost", 27017);
	    DB db = mongo.getDB("test");

	    DBCollection collection = db.getCollection("users");
		
	    DBObject findQuery = new BasicDBObject("username", username_sender);
	    collection.update(findQuery, new BasicDBObject("$pull",new BasicDBObject("friends", username_reciever)));
	    
	    DBObject findQuery2 = new BasicDBObject("username", username_reciever);
	    collection.update(findQuery2, new BasicDBObject("$pull",new BasicDBObject("friends", username_sender)));
	    
		System.out.println(userService.findByUsername(username_sender).getFriends());
	}
	
	@RequestMapping(path = "/cancelFR/{username_sender}/{username_reciever}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public void cancelFR(HttpServletResponse response, @PathVariable String username_sender, @PathVariable String username_reciever, HttpSession session)
			throws Exception {
		
		Mongo mongo = new Mongo("localhost", 27017);
	    DB db = mongo.getDB("test");

	    DBCollection collection = db.getCollection("users");
		
	    DBObject findQuery = new BasicDBObject("username", username_sender);
	    collection.update(findQuery, new BasicDBObject("$pull",new BasicDBObject("listaPoslatihZahteva", username_reciever)));
	    
	    DBObject findQuery2 = new BasicDBObject("username", username_reciever);
	    collection.update(findQuery2, new BasicDBObject("$pull",new BasicDBObject("listaZahteva", username_sender)));
	    
		
	}
	
	
	@RequestMapping(path = "/getDetailsByUsername/{username}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String getDetailsByUsername(HttpServletResponse response, @PathVariable String username, HttpSession session)
			throws Exception {	
		ObjectMapper mapper = new ObjectMapper();   
		String u = mapper.writeValueAsString(userService.findByUsername(username));
		System.out.println(u);
		return u;
		
	}
	
	@RequestMapping(path = "/sortByName/{username}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String sortByName(@PathVariable String username, HttpServletResponse response, HttpSession session)
			throws Exception {	
		ArrayList<User> friends = new ArrayList<User>();
		for(String s : userService.findByUsername(username).getFriends()){
			friends.add(userService.findByEmail(s));
		}
		
		Collections.sort(friends, new Comparator<User>() {
	        @Override
	        public int compare(User c1, User c2) {

	            return c1.getName().compareToIgnoreCase(c2.getName());
	        }
	       });
		
		ObjectMapper mapper = new ObjectMapper();
		   
		   
		   
		   String u = mapper.writeValueAsString(friends);
		   System.out.println(u);
		   return u;
	}
	
	@RequestMapping(path = "/sortByLastname/{username}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String sortByLastname(@PathVariable String username, HttpServletResponse response, HttpSession session)
			throws Exception {	
		ArrayList<User> friends = new ArrayList<User>();
		for(String s : userService.findByUsername(username).getFriends()){
			friends.add(userService.findByEmail(s));
		}
		
		Collections.sort(friends, new Comparator<User>() {
	        @Override
	        public int compare(User c1, User c2) {

	            return c1.getLastname().compareToIgnoreCase(c2.getLastname());
	        }
	       });
		
		   ObjectMapper mapper = new ObjectMapper();
		   
		   
		   
		   String u = mapper.writeValueAsString(friends);
		   System.out.println(u);
		   return u;
	}
	
	@RequestMapping(value = "/addAdmin", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value = HttpStatus.OK)
	public void addAdmin(@RequestBody User user, HttpServletResponse response, HttpSession session) {
		MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
		MongoDatabase baza = mongoClient.getDatabase("test");
		MongoCollection<Document> korisnici = baza.getCollection("users");
		
		System.out.println(user.getUsername() + " " + user.getUtype());
		
		korisnici.findOneAndUpdate(eq("username",user.getUsername()), Updates.set("utype", user.getUtype()));
		
		mongoClient.close();
		
	}
	
	@GetMapping("/getVenueAdmins")
	public String getVenueAdmins() {
		MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
		MongoDatabase baza = mongoClient.getDatabase("test");
		MongoCollection<Document> korisnici = baza.getCollection("users");
		FindIterable<Document> korisniciList = korisnici.find(eq("utype","venueAdmin"));
		Gson g = new GsonBuilder().create();
		String ret = "[";
		
		boolean dodaj = false;
		
		for(Document d : korisniciList) {
			if(dodaj) {
				ret+=",";
			}
			dodaj = true;
			User u = g.fromJson(d.toJson(), User.class);
			ret+=g.toJson(u);
		}
		ret+="]";

		mongoClient.close();
		
		System.out.println(ret);
		
		return ret;
	}
	
	
	@RequestMapping(value = "/registerVenue", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value = HttpStatus.OK)
	public void registerVenue(@RequestBody PozBio pozbio, HttpServletResponse response, HttpSession session) {
		MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
		MongoDatabase baza = mongoClient.getDatabase("test");
		MongoCollection<Document> pozbios = baza.getCollection("pozbios");
		
		Gson g = new GsonBuilder().create();
		
		Document d = Document.parse(g.toJson(pozbio));
		
		pozbios.insertOne(d);
		
		mongoClient.close();
		
		
	}
	
	@RequestMapping(path = "/getMyRes/{username}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String getMyRes(@PathVariable String username, HttpServletResponse response, HttpSession session)
			throws Exception {	

		ObjectMapper mapper = new ObjectMapper();
	   	ArrayList<Integer> idovi = userService.findByUsername(username).getListaProjekcija();
	   	ArrayList<RezervacijaKarte> rks = new ArrayList<RezervacijaKarte>();
	   	System.out.println("Trazeni idovi su : " + idovi);
	   	System.out.println("FindAll: "+rezervacijaRepository.findAll());
	   	System.out.println("Ids:");
	   	for(RezervacijaKarte rk : rezervacijaRepository.findAll())
	   	{
	   		System.out.println(rk.getIdRez());	
	   	}
	   	for(Integer i : idovi){
	   		if(compareDates(rezervacijaRepository.findByIdRez(i)).equals("pre"))
	   			rks.add(rezervacijaRepository.findByIdRez(i));
	   	}
	    String u = mapper.writeValueAsString(rks);
	    System.out.println(u);
	    return u;
	}
	
	@RequestMapping(path = "/getMyInv/{username}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String getMyInv(@PathVariable String username, HttpServletResponse response, HttpSession session)
			throws Exception {	
		ObjectMapper mapper = new ObjectMapper();
	   	ArrayList<Integer> idovi = userService.findByUsername(username).getListaPozivnica();
	   	ArrayList<RezervacijaKarte> rks = new ArrayList<RezervacijaKarte>();
	   	
	   	for(Integer i : idovi){
	   		if(compareDates(rezervacijaRepository.findByIdRez(i)).equals("pre"))
	   			rks.add(rezervacijaRepository.findByIdRez(i));
	   	}
	   	
	    String u = mapper.writeValueAsString(rks);
	    System.out.println(u);
	    return u;
	}
	
	@RequestMapping(path = "/getMyHist/{username}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String getMyHist(@PathVariable String username, HttpServletResponse response, HttpSession session)
			throws Exception {	
		ObjectMapper mapper = new ObjectMapper();
	   	ArrayList<Integer> idovi = userService.findByUsername(username).getListaProjekcija();
	   	ArrayList<RezervacijaKarte> rks = new ArrayList<RezervacijaKarte>();
	   	
	   	for(Integer i : idovi){
	   		if(compareDates(rezervacijaRepository.findByIdRez(i)).equals("posle"))
	   			rks.add(rezervacijaRepository.findByIdRez(i));
	   	}
	   	
	    String u = mapper.writeValueAsString(rks);
	    System.out.println(u);
	    return u;
	}
	
	public String compareDates(RezervacijaKarte fr) throws java.text.ParseException{
		String sads = new SimpleDateFormat("dd/MM/yyyy hh:mm").format(Calendar.getInstance().getTime());
		
		String datum_rez = fr.getDatum();
		String termin_rez = fr.getTermin();
		System.out.println(datum_rez);
		System.out.println(termin_rez);
		String end = datum_rez+" "+termin_rez;
		java.time.format.DateTimeFormatter formatter = java.time.format.DateTimeFormatter.ofPattern("dd/MM/yyyy hh:mm");
		SimpleDateFormat formatter2 = new SimpleDateFormat("dd/MM/yyyy hh:mm");
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
		//java.time.LocalDateTime rez = LocalDateTime.parse(end, formatter);
		//java.time.LocalDateTime sad = LocalDateTime.parse(sads, formatter);
		
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
	
	public String compareDates(String datum, String termin) throws java.text.ParseException{
		String sads = new SimpleDateFormat("dd/MM/yyyy hh:mm").format(Calendar.getInstance().getTime());

		System.out.println(datum);
		System.out.println(termin);
		String end = datum+" "+termin;
		java.time.format.DateTimeFormatter formatter = java.time.format.DateTimeFormatter.ofPattern("dd/MM/yyyy hh:mm");
		SimpleDateFormat formatter2 = new SimpleDateFormat("dd/MM/yyyy hh:mm");
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
		//java.time.LocalDateTime rez = LocalDateTime.parse(end, formatter);
		//java.time.LocalDateTime sad = LocalDateTime.parse(sads, formatter);
		
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
	
	@RequestMapping(path = "/cancelRes/{username}/{idRez}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String cancelRes(HttpServletResponse response, @PathVariable String username, @PathVariable int idRez, HttpSession session)
			throws Exception {
		
		String pozbio = rezervacijaRepository.findByIdRez(idRez).getPozbio();
		RezervacijaKarte fr = rezervacijaRepository.findByIdRez(idRez);
		PozBio pb = pozBioService.findByName(pozbio);
		
		String sads = new SimpleDateFormat("dd/MM/yyyy hh:mm").format(Calendar.getInstance().getTime());
		
		String datum_rez = fr.getDatum();
		String termin_rez = fr.getTermin();
		System.out.println(datum_rez);
		System.out.println(termin_rez);
		String end = datum_rez+" "+termin_rez;
		java.time.format.DateTimeFormatter formatter = java.time.format.DateTimeFormatter.ofPattern("dd/MM/yyyy hh:mm");
		SimpleDateFormat formatter2 = new SimpleDateFormat("dd/MM/yyyy hh:mm");
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
		//java.time.LocalDateTime rez = LocalDateTime.parse(end, formatter);
		//java.time.LocalDateTime sad = LocalDateTime.parse(sads, formatter);
		
		Instant instant_sad = Instant.ofEpochMilli(sad.getTime());
	    LocalDateTime sad_ldt = LocalDateTime.ofInstant(instant_sad, ZoneOffset.UTC);
	    
	    Instant instant_rez = Instant.ofEpochMilli(rez.getTime());
	    LocalDateTime rez_ldt = LocalDateTime.ofInstant(instant_rez, ZoneOffset.UTC);
		
		if(sad_ldt.isBefore(rez_ldt.minusMinutes(30))){
			System.out.println("Dozvoljeno otkazivanje");
			
			Mongo mongo = new Mongo("localhost", 27017);
		    DB db = mongo.getDB("test");

		    DBCollection users = db.getCollection("users");
		    DBCollection pozbios = db.getCollection("pozbios");

		    DBObject findQuery = new BasicDBObject("username", username);
		    users.update(findQuery, new BasicDBObject("$pull",new BasicDBObject("listaProjekcija", idRez)));
		    
		    ArrayList<String> invited_friends = fr.getInvited_friends();
		    ArrayList<String> confirmed_friends = fr.getPotvrdjeni();

		    DBObject findFriend;
		    for(String usern : invited_friends){
		    	findFriend = new BasicDBObject("username", usern);
		    	users.update(findFriend, new BasicDBObject("$pull",new BasicDBObject("listaPozivnica", idRez)));
		    }
		    for(String usern : confirmed_friends){
		    	findFriend = new BasicDBObject("username", usern);
		    	 users.update(findFriend, new BasicDBObject("$pull",new BasicDBObject("listaProjekcija", idRez)));
		    }
		   
		    
		    replaceCancelSedista(fr,"all");
		    

		    
		    return "{\"poruka\":\"canceled\"}";
		} else {
			System.out.println("Nije dozvoljeno otkazivanje");
		}
	
		
		return "{\"poruka\":\"neuspesno\"}";
	    
		
	}
	
	public void replaceCancelSedista(RezervacijaKarte rk, String sta) throws java.text.ParseException{
		PozBio pb = pozBioService.findByName(rk.getPozbio());
		PozBio promenjen = null;
		for(Projekcija proj : pb.getListaProjekcija()){
			if(proj.getNazivProjekcije().equals(rk.getProjekcija())){
				for(DatumProjekcije dp : proj.getListaDatumaProjekcije()){
					if(dp.getDatum().equals(rk.getDatum())){
						for(Termin t : dp.getListaTermina()){
							if(t.getTermin().equals(rk.getTermin()) && t.getSala() == Integer.parseInt(rk.getSala())){
								if(compareDates(dp.getDatum(),t.getTermin()).equals("pre")){
									if(pb != null){
									   
									   if(sta.equals("all")){
										   for(String seat : rk.getSelected_seats()){
										    	t.getZauzetost().remove(seat);
										    }
									   } else if(sta.equals("one")){
										   for(String seat : rk.getSelected_seats()){
										    	t.getZauzetost().remove(seat);
										    	break;
										    }
									   }
										
										
										MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
										MongoDatabase baza = mongoClient.getDatabase("test");
							
										
										MongoCollection<org.bson.Document> pozbios = baza.getCollection("pozbios");
										Gson g = new GsonBuilder().create();
										String prom_json = g.toJson(pb);
										org.bson.Document prom_document = org.bson.Document.parse(prom_json);
										
										
										
										pozbios.findOneAndReplace(eq("name",pb.getName()), prom_document);
										
										mongoClient.close();
									}
								}
							}
						}
					}
				}
			}
			
		}
		
	}

	@RequestMapping(path = "/acceptInv/{username}/{idRez}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public void acceptInv(HttpServletResponse response, @PathVariable String username, @PathVariable int idRez, HttpSession session)
			throws Exception {
		
		Mongo mongo = new Mongo("localhost", 27017);
	    DB db = mongo.getDB("test");

	    DBCollection collection = db.getCollection("users");
		
	    DBObject findQuery = new BasicDBObject("username", username);
	    collection.update(findQuery, new BasicDBObject("$pull",new BasicDBObject("listaPozivnica", idRez)));
	    
	    DBObject findQuery2 = new BasicDBObject("username", username);
	    collection.update(findQuery2, new BasicDBObject("$push",new BasicDBObject("listaProjekcija", idRez)));
	    
	    DBCollection rezervacije = db.getCollection("rezervacije");
	    
	    DBObject findQuery3 = new BasicDBObject("idRez", idRez);
	    rezervacije.update(findQuery3, new BasicDBObject("$push",new BasicDBObject("potvrdjeni", username)));
	    
	    DBObject findQuery4 = new BasicDBObject("idRez", idRez);
	    rezervacije.update(findQuery4, new BasicDBObject("$pull",new BasicDBObject("invited_friends", username)));
	    
	    
		
	}
	
	@RequestMapping(path = "/declineInv/{username}/{idRez}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public void declineInv(HttpServletResponse response, @PathVariable String username, @PathVariable int idRez, HttpSession session)
			throws Exception {
		
		Mongo mongo = new Mongo("localhost", 27017);
	    DB db = mongo.getDB("test");

	    DBCollection collection = db.getCollection("users");
		
	    DBObject findQuery = new BasicDBObject("username", username);
	    collection.update(findQuery, new BasicDBObject("$pull",new BasicDBObject("listaPozivnica", idRez)));
	    
	    
	    
	    RezervacijaKarte fr = rezervacijaRepository.findByIdRez(idRez);
	    replaceCancelSedista(fr,"one");
	    
		
	}
	
}
