package com.beans;

import java.util.ArrayList;
import java.util.HashMap;

public class User {
	private String type;
	private String password;
	private String passwordRepeat;
	private String email;
	private String name;
	private String lastname;
	private String city;
	private int phoneNumber;
	private ArrayList<String> friends;
	private ArrayList<String> listaZahteva;
	private ArrayList<String> listaIstorijaPoseta;
	private HashMap<String,Integer> listaOcenaPozBio;
	private HashMap<String,Integer> listaOcenaProjekcija;
	private boolean enabled;
	private String confirmationToken;
	
	public User(String type, String pass, String email, String name, String lastname, String city,
			int phoneNumber, ArrayList<String> listaPrijatelja, ArrayList<String> listaZahteva,
			HashMap<String, Integer> listaOcenaPozBio, HashMap<String, Integer> listaOcenaProjekcija, 
			ArrayList<String> listaIstorijaPoseta
			) {
		super();
		this.type = type;
		this.password = pass;
		this.email = email;
		this.name = name;
		this.lastname = lastname;
		this.city = city;
		this.phoneNumber = phoneNumber;
		this.friends = listaPrijatelja;
		this.listaZahteva = listaZahteva;
		this.listaIstorijaPoseta = listaIstorijaPoseta;
		this.listaOcenaPozBio = listaOcenaPozBio;
		this.listaOcenaProjekcija = listaOcenaProjekcija;
		this.enabled = false;
	}
	
	public ArrayList<String> getListaIstorijaPoseta() {
		return listaIstorijaPoseta;
	}

	public void setListaIstorijaPoseta(ArrayList<String> listaIstorijaPoseta) {
		this.listaIstorijaPoseta = listaIstorijaPoseta;
	}

	public String getConfirmationToken() {
		return confirmationToken;
	}

	public void setConfirmationToken(String confirmationToken) {
		this.confirmationToken = confirmationToken;
	}
	
	public boolean isEnabled() {
		return enabled;
	}


	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}


	public User(String email, String pass){
		this.email=email;
		this.password=pass;
	}
	public User(){}
	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String pass) {
		this.password = pass;
	}

	public String getPasswordRepeat() {
		return password;
	}

	public void setPasswordRepeat(String pass) {
		this.password = pass;
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

	public ArrayList<String> getFriends() {
		return friends;
	}

	public void setFriends(ArrayList<String> listaPrijatelja) {
		this.friends = listaPrijatelja;
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
	
	public String toString(){
		return email;
	} 
	
}
