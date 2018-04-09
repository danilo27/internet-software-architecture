package com.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.beans.User;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.Mongo;
import com.repositories.UserRepository;
import com.services.EmailService;
import com.services.UserService;

@RestController
public class RegisterController {
	
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	private UserService userService;
	private EmailService emailService;
	@Autowired
	private UserRepository repository;
    @Autowired
    public RegisterController(BCryptPasswordEncoder bCryptPasswordEncoder, UserService userService, EmailService emailService) {
      
      this.bCryptPasswordEncoder = bCryptPasswordEncoder;
      this.userService = userService;
      this.emailService = emailService;
    }

    @RequestMapping(
			value = "/register",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public String processRegistrationForm( @RequestBody User user, HttpServletRequest request) {
		//CHECK IF EMAIL AND USERNAME ARE VALID	
    	System.out.println("registraition");
    	String ret = "";
    	if(user.getUsername().matches("[a-zA-Z0-9]*")){
    		
    	if(user.getEmail().matches("^[a-zA-Z0-9]+@[a-zA-Z0-9]+(.[a-zA-Z]{2,})$")){
    	
    	if(!user.getEmail().equals("") &&
    	   !user.getUsername().equals("") &&
    	   !user.getPassword().equals("") &&
    	   !user.getPasswordRepeat().equals("") &&
    	   !user.getName().equals("") &&
    	   !user.getLastname().equals("") &&
    	   !user.getCity().equals("") &&
    	   !Integer.toString(user.getPhoneNumber()).equals("")
    			
    			){
    	if(userService.findByEmail(user.getEmail()) == null) {
    		if(userService.findByUsername(user.getUsername())==null){
				if(user.getPassword().equals(user.getPasswordRepeat())){
					User novi =new User("regular",
							 user.getPassword(),
							 user.getEmail(),
					         user.getName(),
					         user.getLastname(),
					         user.getCity(),
					         user.getPhoneNumber(),
					         new ArrayList<String>(Arrays.asList("coda","el","thug")),
					         new ArrayList<String>(),
					         new HashMap<String, Integer>(),
					         new HashMap<String, Integer>(),
					         new ArrayList<String>(),
					         user.getUsername(),
					         new ArrayList<String>(),
					         new ArrayList<Integer>()	
							);
					//userService.saveUser(novi);
					System.out.println("New user. Sending mail to " + novi.getEmail());
					
				   
				   
					novi.setEnabled("false");
				    String token = UUID.randomUUID().toString();
				    //System.out.println("token je: "+token);
				    novi.setConfirmationToken(token);
				    //System.out.println("userov posel set-a: "+novi.getConfirmationToken());
				    repository.save(novi);
					System.out.println("posle save userServiceFindByEmailk vrati: " + userService.findByEmail(novi.getEmail()));
					String appUrl = request.getScheme() + "://" + request.getServerName();
					
					//dodato kasnije zbog exception-a
					System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
					////////////////////////////////////
					
					SimpleMailMessage registrationEmail = new SimpleMailMessage();
					registrationEmail.setTo(novi.getEmail());
					registrationEmail.setTo("tarmiricmiisa@gmail.com");
					registrationEmail.setSubject("Registration Confirmation");
					registrationEmail.setText("Activate your account by clicking the link below:\n"
							+ appUrl + "8080/login?token=" + novi.getConfirmationToken());
					registrationEmail.setFrom("tarmiricmiisa@gmail.com");

					String[] to = { novi.getEmail() };
					EmailService.sendFromGMail("tarmiricmiisa","lozinkalozinka",to,"Activation Link","To confirm your e-mail address, please click the link below:\n"
							+ appUrl + ":8080/login?token=" + novi.getConfirmationToken());
					

					System.out.println("Mail sent.");
					ret = "{\"poruka\":\"ok\"}";
				} else {
					ret = "{\"poruka\":\"lozinke\"}";
				}
			} else {
				ret ="{\"poruka\":\"username\"}";
			}
    		
			} else {
				ret ="{\"poruka\":\"email\"}";
			}
			
    	} else {
    		ret ="{\"poruka\":\"sve\"}";
    	}
			
	} else {
		ret = "{\"poruka\":\"email_invalid\"}";
	}
    	
    } else {
    	ret = "{\"poruka\":\"username_invalid\"}";
    }
    	System.out.println("poruka: " + ret);
    	return ret;
    }

	
}