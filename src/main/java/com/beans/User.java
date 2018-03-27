package com.beans;

import java.util.ArrayList;
import java.util.HashMap;

public class User {
	private String type;
	private String username;
	private String pass;
	private String email;
	private String name;
	private String lastname;
	private String city;
	private int phoneNumber;
	private ArrayList<String> listaPrijatelja;
	private ArrayList<String> listaZahteva;
	private HashMap<String,Integer> listaOcenaPozBio;
	private HashMap<String,Integer> listaOcenaProjekcija;
	
	public User(String type, String username, String pass, String email, String name, String lastname, String city,
			int phoneNumber, ArrayList<String> listaPrijatelja, ArrayList<String> listaZahteva,
			HashMap<String, Integer> listaOcenaPozBio, HashMap<String, Integer> listaOcenaProjekcija) {
		super();
		this.type = type;
		this.username = username;
		this.pass = pass;
		this.email = email;
		this.name = name;
		this.lastname = lastname;
		this.city = city;
		this.phoneNumber = phoneNumber;
		this.listaPrijatelja = listaPrijatelja;
		this.listaZahteva = listaZahteva;
		this.listaOcenaPozBio = listaOcenaPozBio;
		this.listaOcenaProjekcija = listaOcenaProjekcija;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(int phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public ArrayList<String> getListaPrijatelja() {
		return listaPrijatelja;
	}

	public void setListaPrijatelja(ArrayList<String> listaPrijatelja) {
		this.listaPrijatelja = listaPrijatelja;
	}

	public ArrayList<String> getListaZahteva() {
		return listaZahteva;
	}

	public void setListaZahteva(ArrayList<String> listaZahteva) {
		this.listaZahteva = listaZahteva;
	}

	public HashMap<String, Integer> getListaOcenaPozBio() {
		return listaOcenaPozBio;
	}

	public void setListaOcenaPozBio(HashMap<String, Integer> listaOcenaPozBio) {
		this.listaOcenaPozBio = listaOcenaPozBio;
	}

	public HashMap<String, Integer> getListaOcenaProjekcija() {
		return listaOcenaProjekcija;
	}

	public void setListaOcenaProjekcija(HashMap<String, Integer> listaOcenaProjekcija) {
		this.listaOcenaProjekcija = listaOcenaProjekcija;
	}
	
	
	
}
