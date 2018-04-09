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

import com.beans.User;
import com.services.EmailService2;
import com.services.UserService;

@Controller
public class RegisterController {
	
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	private UserService userService;
	private EmailService2 emailService;
 
    @Autowired
    public RegisterController(BCryptPasswordEncoder bCryptPasswordEncoder, UserService userService, EmailService2 emailService) {
      
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
    	
    	if(userService.findByEmail(user.getEmail()) == null) {
				if(user.getPassword().equals(user.getPasswordRepeat())){
					userService.saveUser(
							new User("regular",
									 user.getPassword(),
									 user.getEmail(),
							         user.getName(),
							         user.getLastname(),
							         user.getCity(),
							         user.getPhoneNumber(),
							         new ArrayList<String>(Arrays.asList("mika","pera","djura")),
							         new ArrayList<String>(),
							         new HashMap<String, Integer>(),
							         new HashMap<String, Integer>(),
							         new ArrayList<String>(),
							         user.getUsername(),
							         new ArrayList<String>()
									));
					System.out.println("New user. Sending mail to " + user.getEmail());
					
					user.setEnabled(false);
				      
				    user.setConfirmationToken(UUID.randomUUID().toString());
				        
				    userService.saveUser(user);
						
					String appUrl = request.getScheme() + "://" + request.getServerName();
					
					//dodato kasnije zbog exception-a
					System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
					////////////////////////////////////
					
					SimpleMailMessage registrationEmail = new SimpleMailMessage();
					registrationEmail.setTo(user.getEmail());
					registrationEmail.setTo("tarmiricmiisa@gmail.com");
					registrationEmail.setSubject("Registration Confirmation");
					registrationEmail.setText("Activate your account by clicking the link below:\n"
							+ appUrl + "8080/login?token=" + user.getConfirmationToken());
					registrationEmail.setFrom("tarmiricmiisa@gmail.com");

					String[] to = { user.getEmail() };
					EmailService2.sendFromGMail("tarmiricmiisa","lozinkalozinka",to,"Activation Link","To confirm your e-mail address, please click the link below:\n"
							+ appUrl + ":8080/login?token=" + user.getConfirmationToken());
					

					System.out.println("Mail sent.");
					
				}
				
			} else {
				System.out.println("Error!");
				
			}
			
		    
			
			return "";
	}
	

	
}