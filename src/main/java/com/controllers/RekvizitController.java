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

import com.beans.Licitacija;
import com.beans.PolovniRekvizit;
import com.beans.RezervacijaRekvizita;
import com.beans.User;
import com.beans.ZvanicniRekvizit;
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
	public void rezervisiZvanicniRekvizit(@RequestBody RezervacijaRekvizita rezRek, HttpServletResponse response,HttpSession session) {
		rs.rezervisiZvanicniRekvizit(rezRek);
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
	public void posaljiPonudu(@RequestBody Licitacija licitacija, HttpServletResponse response,HttpSession session) {
		rs.posaljiPonudu(licitacija);
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
	public void prihvacenOglas(@RequestBody PolovniRekvizit oglas, HttpServletResponse response,HttpSession session) {
		rs.prihvacenOglas(oglas);
	}
	
	@RequestMapping(
			value = "/odbijenOglas",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(value=HttpStatus.OK)
	public void odbijenOglas(@RequestBody PolovniRekvizit oglas, HttpServletResponse response,HttpSession session) {
		rs.odbijenOglas(oglas);
	}
	
	
	
}