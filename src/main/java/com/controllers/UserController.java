package com.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
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
import com.beans.PozBio;
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
import com.repositories.UserRepository;
import com.services.EmailService;
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
	MongoOperations  mongoOperations;
	
	// @Autowired
	// private Aplikacija aplikacija;

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value = HttpStatus.OK)
	public String guestLogin(@RequestBody User user, HttpServletResponse response, HttpSession session)
			throws Exception {
		if (userRepository.findByEmail(user.getEmail()) != null) {
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
	   
	   System.out.println("user je: " + user.getLoggedInEmail());
	   System.out.println("a lastanme: " + user.getLastname());
	   
	   Mongo mongo = new Mongo("localhost", 27017);
	   DB db = mongo.getDB("test");

	   DBCollection collection = db.getCollection("users");
	   System.out.println("--->"+collection.findOne()+"<---");
	   
	   if(!user.getPassword().equals("") && user.getPassword().length() > 3 && !user.getPassword().contains(" ")){
		   if(userService.findByLoggedInEmail(user.getLoggedInEmail())!=null){
			   if(user.getPassword().equals(user.getPasswordRepeat())){
				   userService.findByLoggedInEmail(user.getLoggedInEmail()).setPassword(user.getPassword());
				   
				   BasicDBObject newDocument = new BasicDBObject();
				   newDocument.put("password", user.getPassword());
				   BasicDBObject searchQuery = new BasicDBObject().append("email", user.getLoggedInEmail());
				   collection.update(searchQuery, newDocument);
				   
				   System.out.println("Password updated. Password now: " + userService.findByLoggedInEmail(user.getLoggedInEmail()).getPassword());
			   }
		   }
	   }
				
	   if(!user.getName().equals("")){
		   if(userService.findByLoggedInEmail(user.getLoggedInEmail())!=null){
			   userService.findByLoggedInEmail(user.getLoggedInEmail()).setName(user.getName());
			   
			   BasicDBObject newDocument = new BasicDBObject();
			   newDocument.put("name", user.getName());
			   BasicDBObject searchQuery = new BasicDBObject().append("email", user.getLoggedInEmail());
			   collection.update(searchQuery, newDocument);
		   }
	   }	
		
	   if(!user.getLastname().equals("")){
		   if(userService.findByEmail(user.getLoggedInEmail())!=null){
			   userService.findByEmail(user.getLoggedInEmail()).setLastname(user.getLastname());
			   BasicDBObject newDocument = new BasicDBObject();
			   newDocument.put("lastname", user.getLastname());
			   BasicDBObject searchQuery = new BasicDBObject().append("email", user.getLoggedInEmail());
			   collection.update(searchQuery, newDocument);
		   }
	   }
	   
	   if(!user.getCity().equals("")){
		   if(userService.findByLoggedInEmail(user.getLoggedInEmail())!=null){
			   userService.findByLoggedInEmail(user.getLoggedInEmail()).setLastname(user.getCity());
			   BasicDBObject newDocument = new BasicDBObject();
			   newDocument.put("city", user.getCity());
			   BasicDBObject searchQuery = new BasicDBObject().append("email", user.getLoggedInEmail());
			   collection.update(searchQuery, newDocument);
		   }
	   }
	   
	   if(!user.getEmail().equals("")){ 
		   if(good){ 
			   if(userService.findByLoggedInEmail(user.getLoggedInEmail()) != null) { 
				   if(userService.findByEmail(user.getEmail()) == null){ 
					   userService.findByLoggedInEmail(user.getLoggedInEmail()).setEmail(user.getEmail());
					   System.out.println("Email updated.");	
					   
					   BasicDBObject newDocument = new BasicDBObject();
					   newDocument.put("email", user.getEmail());
					   BasicDBObject searchQuery = new BasicDBObject().append("email", user.getLoggedInEmail());
					   collection.update(searchQuery, newDocument);
					   
					   BasicDBObject newDocument2 = new BasicDBObject();
					   newDocument.put("loggedInEmail", user.getEmail());
					   BasicDBObject searchQuery2 = new BasicDBObject().append("loggedInEmail", user.getLoggedInEmail());
					   collection.update(searchQuery2, newDocument2);
				   }
			   }
		   }
	   }
   
	   BasicDBObject whereQuery = new BasicDBObject();
		whereQuery.put("email", user.getEmail());
		DBCursor cursor = collection.find(whereQuery);
		BasicDBObject obj = null;
		while(cursor.hasNext()) {
		    obj = (BasicDBObject)cursor.next();
		}
	   

	   
	   ObjectMapper mapper = new ObjectMapper();
	   
	   System.out.println(obj);
	   
	   String u = mapper.writeValueAsString(userService.findByEmail(user.getEmail()));
	   
	   return u;
			
	}
	
	@RequestMapping(path = "/find_my_friends/{email}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String find_my_friends(@PathVariable String email, HttpServletResponse response, HttpSession session)
			throws Exception {	
		ArrayList<User> friends = new ArrayList<User>();
		for(String s : userService.findByEmail(email).getFriends()){
			friends.add(userService.findByEmail(s));
		}
		ObjectMapper mapper = new ObjectMapper();
		   	   
	    String u = mapper.writeValueAsString(friends);
	    System.out.println(u);
	    return u;
	}
	
	@RequestMapping(path = "/find_friends/{email}", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value = HttpStatus.OK)
	public ArrayList<ArrayList<String>> find_friends(@RequestBody User user, @PathVariable String email, HttpServletResponse response, HttpSession session)
			throws Exception {
		ArrayList<ArrayList<String>>  results = new ArrayList<ArrayList<String>> ();
		ArrayList rek = new ArrayList<>();
		for(User us : userRepository.findAll()){	
			rek = new ArrayList<>();
			if(user.getName().toLowerCase().equals(us.getName().toLowerCase()) && user.getLastname().toLowerCase().equals(us.getLastname().toLowerCase())){
				if(!email.equals(us.getEmail())){
					if(userService.findByEmail(email).getListaPoslatihZahteva().contains(us.getEmail())){
						rek.add(us.getEmail());
						rek.add(us.getUsername());
						rek.add("poslat");
						rek.add(us.getName());
						rek.add(us.getLastname());
						results.add(rek);
					}else if(userService.findByEmail(email).getListaZahteva().contains(us.getEmail())){
						rek.add(us.getEmail());
						rek.add(us.getUsername());
						rek.add("primljen");
						rek.add(us.getName());
						rek.add(us.getLastname());
						results.add(rek);
					} else if (userService.findByEmail(email).getFriends().contains(us.getEmail())){
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
				if(!email.equals(us.getEmail())){
					if(userService.findByEmail(email).getListaPoslatihZahteva().contains(us.getEmail())){
						rek.add(us.getEmail());
						rek.add(us.getUsername());
						rek.add("poslat");
						rek.add(us.getName());
						rek.add(us.getLastname());
						results.add(rek);
					}
					else if(userService.findByEmail(email).getFriends().contains(us.getEmail())){
						rek.add(us.getEmail());
						rek.add(us.getUsername());
						rek.add("vec");
						rek.add(us.getName());
						rek.add(us.getLastname());
						results.add(rek);
					}else if(userService.findByEmail(email).getListaZahteva().contains(us.getEmail())){
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
	
	@RequestMapping(path = "/add_friend/{email_sender}/{email_reciever}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public void add_friend(HttpServletResponse response, @PathVariable String email_sender, @PathVariable String email_reciever, HttpSession session)
			throws Exception {

		System.out.println(email_sender + " - " + email_reciever);
		Mongo mongo = new Mongo("localhost", 27017);
	    DB db = mongo.getDB("test");

	    DBCollection collection = db.getCollection("users");
		
	    DBObject findQuery = new BasicDBObject("email", email_sender);
	    collection.update(findQuery, new BasicDBObject("$push",new BasicDBObject("listaPoslatihZahteva", email_reciever)));
	    
	    
	    DBObject findQuery2 = new BasicDBObject("email", email_reciever);
	    collection.update(findQuery2, new BasicDBObject("$push",new BasicDBObject("listaZahteva", email_sender)));
	    
	}
	
	@RequestMapping(path = "/pending_friend_requests/{email}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public ArrayList<String> pending_friend_requests(@PathVariable String email, HttpServletResponse response, HttpSession session)
			throws Exception {	
		
		return userService.findByEmail(email).getListaZahteva();
	}
	
	@RequestMapping(path = "/acceptFR/{email_sender}/{email_reciever}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public void acceptFR(HttpServletResponse response, @PathVariable String email_sender, @PathVariable String email_reciever, HttpSession session)
			throws Exception {
		MongoClient mongo = new MongoClient(new ServerAddress("localhost", 27017));
	    DB db = mongo.getDB("test");

	    DBCollection collection = db.getCollection("users");
	    
	    DBObject findQuery = new BasicDBObject("email", email_sender);
	    collection.update(findQuery, new BasicDBObject("$push", new BasicDBObject("friends", email_reciever)));
	   
	    
	    BasicDBObject match = new BasicDBObject("email", email_sender); 
	    BasicDBObject update = new BasicDBObject("listaZahteva", email_reciever);
	    collection.update(match, new BasicDBObject("$pull", update));
	    
	    
	    
	    DBObject findQuery2 = new BasicDBObject("email", email_reciever);
	    collection.update(findQuery2, new BasicDBObject("$push",new BasicDBObject("friends", email_sender)));
	    
	    
	    BasicDBObject match2 = new BasicDBObject("email", email_reciever); 
	    BasicDBObject update2 = new BasicDBObject("listaPoslatihZahteva", email_sender);
	    collection.update(match2, new BasicDBObject("$pull", update2));
	    
	}
	
	@RequestMapping(path = "/declineFR/{email_sender}/{email_reciever}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public void declineFR(HttpServletResponse response, @PathVariable String email_sender, @PathVariable String email_reciever, HttpSession session)
			throws Exception {
		
		Mongo mongo = new Mongo("localhost", 27017);
	    DB db = mongo.getDB("test");

	    DBCollection collection = db.getCollection("users");
		
	    DBObject findQuery = new BasicDBObject("email", email_sender);
	    collection.update(findQuery, new BasicDBObject("$pull",new BasicDBObject("listaZahteva", email_reciever)));
	    
	    DBObject findQuery2 = new BasicDBObject("email", email_reciever);
	    collection.update(findQuery2, new BasicDBObject("$pull",new BasicDBObject("listaPoslatihZahteva", email_sender)));
	    
	}
	
	@RequestMapping(path = "/removeFriend/{email_sender}/{email_reciever}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public void removeFriend(HttpServletResponse response, @PathVariable String email_sender, @PathVariable String email_reciever, HttpSession session)
			throws Exception {
		
		Mongo mongo = new Mongo("localhost", 27017);
	    DB db = mongo.getDB("test");

	    DBCollection collection = db.getCollection("users");
		
	    DBObject findQuery = new BasicDBObject("email", email_sender);
	    collection.update(findQuery, new BasicDBObject("$pull",new BasicDBObject("friends", email_reciever)));
	    
	    DBObject findQuery2 = new BasicDBObject("email", email_reciever);
	    collection.update(findQuery2, new BasicDBObject("$pull",new BasicDBObject("friends", email_sender)));
	    
		
	}
	
	@RequestMapping(path = "/cancelFR/{email_sender}/{email_reciever}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public void cancelFR(HttpServletResponse response, @PathVariable String email_sender, @PathVariable String email_reciever, HttpSession session)
			throws Exception {
		
		Mongo mongo = new Mongo("localhost", 27017);
	    DB db = mongo.getDB("test");

	    DBCollection collection = db.getCollection("users");
		
	    DBObject findQuery = new BasicDBObject("email", email_sender);
	    collection.update(findQuery, new BasicDBObject("$pull",new BasicDBObject("listaPoslatihZahteva", email_reciever)));
	    
	    DBObject findQuery2 = new BasicDBObject("email", email_reciever);
	    collection.update(findQuery2, new BasicDBObject("$pull",new BasicDBObject("listaZahteva", email_sender)));
	    
		
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
	
	@RequestMapping(path = "/sortByName/{email}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String sortByName(@PathVariable String email, HttpServletResponse response, HttpSession session)
			throws Exception {	
		ArrayList<User> friends = new ArrayList<User>();
		for(String s : userService.findByEmail(email).getFriends()){
			friends.add(userService.findByEmail(s));
		}
		
		Collections.sort(friends, new Comparator<User>() {
	        @Override
	        public int compare(User c1, User c2) {

	            return c1.getName().compareTo(c2.getName());
	        }
	       });
		
		ObjectMapper mapper = new ObjectMapper();
		   
		   
		   
		   String u = mapper.writeValueAsString(friends);
		   System.out.println(u);
		   return u;
	}
	
	@RequestMapping(path = "/sortByLastname/{email}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public String sortByLastname(@PathVariable String email, HttpServletResponse response, HttpSession session)
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
	
}
