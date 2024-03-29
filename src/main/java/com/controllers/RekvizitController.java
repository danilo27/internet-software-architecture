package com.controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.catalina.connector.Response;
import org.bson.Document;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.beans.Licitacija;
import com.beans.PolovniRekvizit;
import com.beans.PozBio;
import com.beans.RezervacijaRekvizita;
import com.beans.User;
import com.beans.ZvanicniRekvizit;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.services.RekvizitiService;

@RestController
public class RekvizitController {
	
	RekvizitiService rs = new RekvizitiService();
	
	@GetMapping("/getZvanicniRekviziti")
	public String getRekviziti() {
		return rs.getZvanicniRekviziti();
	}
	
	@GetMapping("/getPolovniRekviziti")
	public String getPolovniRekviziti() {
		return rs.getOglasi();
	}
	
	@GetMapping("/getOglasiZaProveru")
	public String getOglasiZaProveru() {
		return rs.getOglasiZaProveru();
	}
	
	@RequestMapping(
			value = "/rezervisiZvanicniRekvizit",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public void rezervisiZvanicniRekvizit(@RequestBody RezervacijaRekvizita rezRek, HttpServletResponse response,HttpSession session) throws IOException {
		try {
			rs.rezervisiZvanicniRekvizit(rezRek);
		}catch(Exception e) {
			response.sendError(Response.SC_FORBIDDEN);
		}
	}
	
	
	@RequestMapping(
			value = "/posaljiOglasNaProveru",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public void posaljiOglasNaProveru(@RequestBody PolovniRekvizit oglas, HttpServletResponse response,HttpSession session) {
		rs.posaljiOglasNaProveru(oglas);
	}
	
	@RequestMapping(
			value = "/posaljiPonudu",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public void posaljiPonudu(@RequestBody Licitacija licitacija, HttpServletResponse response,HttpSession session) throws IOException {
		try {
			rs.posaljiPonudu(licitacija);
		}catch(Exception e) {
			response.sendError(Response.SC_FORBIDDEN);
		}
	}
	
	@RequestMapping(
			value = "/odaberiPonudu",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public void odaberiPonudu(@RequestBody PolovniRekvizit oglas, HttpServletResponse response,HttpSession session) {
		rs.odaberiPonudu(oglas);
	}
	
	@RequestMapping(
			value = "/postaviRekvizit",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public void postaviRekvizit(@RequestBody ZvanicniRekvizit rekvizit, HttpServletResponse response,HttpSession session) {
		System.out.println(rekvizit.toString());
		rs.postaviRekvizit(rekvizit);
	}
	
	@RequestMapping(
			value = "/ukloniZvanicni",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public void ukloniZvanicni(@RequestBody ZvanicniRekvizit rekvizit,HttpServletResponse response,HttpSession session) {
		rs.ukloniZvanicni(rekvizit);
	}
	
	@RequestMapping(
			value = "/izmeniRekvizit",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public void izmeniRekvizit(@RequestBody ZvanicniRekvizit rekvizit, HttpServletResponse response,HttpSession session) {
		rs.izmeniRekvizit(rekvizit);
	}
	
	
	@RequestMapping(
			value = "/getAktivniOglasi",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public String getAktivniOglasi(@RequestBody User user, HttpServletResponse response,HttpSession session) {
		return rs.getAktivniOglasi(user);
	}
	
	@RequestMapping(
			value = "/getNotifikacije",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public String getNotifikacije(@RequestBody User user, HttpServletResponse response,HttpSession session) {
		return rs.getNotifikacije(user);
	}
	
	@RequestMapping(
			value = "/prihvacenOglas",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public void prihvacenOglas(@RequestBody PolovniRekvizit oglas, HttpServletResponse response,HttpSession session) throws IOException {
		try {
			rs.prihvacenOglas(oglas);
		}catch(Exception e) {
			response.sendError(Response.SC_FORBIDDEN);
		}
	}
	
	@RequestMapping(
			value = "/odbijenOglas",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public void odbijenOglas(@RequestBody PolovniRekvizit oglas, HttpServletResponse response,HttpSession session) throws IOException {
		try {
			rs.odbijenOglas(oglas);
		}catch(Exception e) {
			response.sendError(Response.SC_FORBIDDEN);
		}
	}
	
	@GetMapping("/getCinemas")
	public String getCinemas() {
		MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
		MongoDatabase baza = mongoClient.getDatabase("test");
		MongoCollection<Document> pozbios = baza.getCollection("pozbios");
		List<Document> pozbioslist = (List<Document>) pozbios.find().into(new ArrayList<Document>());
		
		Gson g = new GsonBuilder().create();
		
		String ret = "[";
		
		boolean dodaj = false;
		
		for(Document d : pozbioslist) {
			if(dodaj) {
				ret+=",";
			}
			dodaj = true;
			PozBio r = g.fromJson(d.toJson(), PozBio.class);
			ret+=g.toJson(r);
		}
		ret+="]";

		mongoClient.close();
		
		return ret;
		
	}
	
}