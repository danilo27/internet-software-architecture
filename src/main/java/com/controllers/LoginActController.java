package com.controllers;

import javax.servlet.http.HttpServletResponse;

import org.bson.Document;
import org.bson.conversions.Bson;
import org.h2.engine.Database;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.beans.User;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.repositories.UserRepository;
import com.services.UserService;

@Controller
public class LoginActController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/login",method = RequestMethod.GET, produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public String redirect(ModelAndView modelAndView, @RequestParam("token") String token){
		if(token.equals("potvrdiPozivnicu")){
			 return "forward:/";
		}else{
			User user = userService.findByConfirmationToken(token);
			System.out.println("pre:"+userService.findAll());
				
			if (user == null) { // No token found in DB

				return "forward:/index";
			} else { // Token found
				
				
				//user.setEnabled(true);
				//repository.save(user);
//		

				MongoClient client = new MongoClient("localhost", 27017);
				MongoDatabase database = client.getDatabase("test");
//
//			     DBCollection collection = db.getCollection("users");
//				
//				 BasicDBObject newDocument = new BasicDBObject();
//			     newDocument.append("enabled", "true");
//			     BasicDBObject setQuery = new BasicDBObject();
//			     setQuery.append("$set", newDocument);
//			     BasicDBObject searchQuery = new BasicDBObject().append("username", user.getUsername());
//			     collection.update(searchQuery, newDocument);
				
				MongoCollection<Document> collection = database.getCollection("users");
				Bson filter = new Document("email", user.getEmail());   
				Bson newValue = new Document("enabled", "true");      
				Bson updateOperationDocument = new Document("$set", newValue);
				collection.updateOne(filter, updateOperationDocument);
				
			 	System.out.println("posle:"+userService.findAll());
			     
				System.out.println("User enabled.");
				//login?**
			    return "forward:/"; //preserves root
			}
		
			
		}
				
	}
}
