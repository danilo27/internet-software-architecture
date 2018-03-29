package com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.beans.User;

@RestController
public class WelcomeController {
	@GetMapping("/hello")
	public String sayHello(){
		System.out.println("dosao dovde");
		return "{\"message\":\"hey\"}";
	}
}


