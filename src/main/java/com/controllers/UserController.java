package com.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.beans.Aplikacija;
import com.beans.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.repositories.UserRepository;



@RestController
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
//	@Autowired
//	private Aplikacija aplikacija;
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());


	@RequestMapping(
			value = "/login",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public String guestLogin(
			@RequestBody User user, HttpServletResponse response,HttpSession session) throws Exception {	
		if(userRepository.findByEmail(user.getEmail()) != null) {
			ObjectMapper mapper = new ObjectMapper();
			String u = mapper.writeValueAsString(userRepository.findByEmail(user.getEmail()));
			return u;
		} else {
			System.out.println("User ne postoji!");
			return null;
		}
	}
	

}
