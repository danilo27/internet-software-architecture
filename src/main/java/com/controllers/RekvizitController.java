package com.controllers;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.beans.PolovniRekvizit;
import com.beans.RezervacijaRekvizita;
import com.beans.User;

@RestController
public class RekvizitController {
	
	@GetMapping("/getZvanicniRekviziti")
	public String getRekviziti() {
		return "[" + 
				"  {\"naziv\": \"Star Wars solja\", \"opis\": \"solja za kafu\",\"slika\": \"none\",\"cena\": 290.30}," + 
				"  {\"naziv\": \"Lord of The Rings privezak\", \"opis\": \"privezak za kljuceve\",\"slika\": \"none\",\"cena\": 800.30}," + 
				"  {\"naziv\": \"Harry Potter carobni stap\", \"opis\": \"carobni stap iz filma\",\"slika\": \"none\",\"cena\": 2410.30}]";
	}
	
	@GetMapping("/getPolovniRekviziti")
	public String getPolovniRekviziti() {
		return "[{\"naziv\": \"Star Wars solja\", \"opis\": \"solja za kafu\",\"slika\": \"none\",\"cena\": 290.30,\"username\":\"vlada\",\"datumIsteka\":\"29-04-2018\"}]";
	}
	
	@RequestMapping(
			value = "/rezervisiZvanicniRekvizit",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public void rezervisiZvanicniRekvizit(@RequestBody RezervacijaRekvizita rezRek, HttpServletResponse response,HttpSession session) {
		System.out.println(rezRek.getImeKorisnika() + rezRek.getImeRekvizita());
	}
	
	
	@RequestMapping(
			value = "/posaljiOglasNaProveru",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public void posaljiOglasNaProveru(@RequestBody PolovniRekvizit oglas, HttpServletResponse response,HttpSession session) {
		System.out.println("iz servera: ");
		System.out.println(oglas.toString());
	}
	
	@RequestMapping(
			value = "/getAktivniOglasi",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public String getAktivniOglasi(@RequestBody User user, HttpServletResponse response,HttpSession session) {
		if(user.getUsername().equals("vlada")) {
			return "[{\"naziv\": \"Vladin oglas\", \"opis\": \"solja za kafu\",\"slika\": \"none\",\"cena\": 290.30,\"username\":\"vlada\",\"datumIsteka\":\"29-04-2018\"}]";
			
		}else {
			return "[{\"naziv\": \"Ne vladin oglas\", \"opis\": \"solja za kafu\",\"slika\": \"none\",\"cena\": 290.30,\"username\":\"vlada\",\"datumIsteka\":\"29-04-2018\"}]";
			
		}
	}
	
	
}
