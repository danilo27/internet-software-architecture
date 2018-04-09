package com.controllers;

import javax.servlet.http.HttpServletResponse;

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
import com.services.UserService;

@Controller
public class LoginActController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/login",method = RequestMethod.GET, produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public String redirect(ModelAndView modelAndView, @RequestParam("token") String token){
	
			User user = userService.findByConfirmationToken(token);
				
			if (user == null) { // No token found in DB
				modelAndView.addObject("nepostojeci token");
				return "forward:/index";
			} else { // Token found
				modelAndView.addObject("confirmationToken", user.getConfirmationToken());
				
				user.setEnabled(true);
				System.out.println("User enabled.");
				//login?**
			    return "forward:/"; //preserves root
			}
				
	}
}
