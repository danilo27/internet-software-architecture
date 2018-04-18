package com.beans;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="users")
public class User {
	private String utype;
	private String username;
	private String password;
	private String passwordRepeat;
	private String email;
	private String name;
	private String lastname;
	private String city;
	private int phoneNumber;
	private ArrayList<String> friends;
	private ArrayList<String> listaZahteva;
	private ArrayList<String> listaPoslatihZahteva;
	private ArrayList<String> listaProjekcija;
	
	public ArrayList<String> getListaProjekcija() {
		return listaProjekcija;
	}

	public void setListaProjekcija(ArrayList<String> listaProjekcija) {
		this.listaProjekcija = listaProjekcija;
	}

	public ArrayList<String> getListaPoslatihZahteva() {
		return listaPoslatihZahteva;
	}

	public void setListaPoslatihZahteva(ArrayList<String> listaPoslatihZahteva) {
		this.listaPoslatihZahteva = listaPoslatihZahteva;
	}

	private ArrayList<String> listaIstorijaPoseta;
	private HashMap<String,Integer> listaOcenaPozBio;
	private HashMap<String,Integer> listaOcenaProjekcija;
	private boolean enabled;
	private String confirmationToken;
	private String loggedInEmail;
	
	public String getLoggedInEmail() {
		return loggedInEmail;
	}

	public void setLoggedInEmail(String loggedInEmail) {
		this.loggedInEmail = loggedInEmail;
	}

	public User(String type, String pass, String email, String name, String lastname, String city,
			int phoneNumber, ArrayList<String> listaPrijatelja, ArrayList<String> listaZahteva,
			HashMap<String, Integer> listaOcenaPozBio, HashMap<String, Integer> listaOcenaProjekcija, 
			ArrayList<String> listaIstorijaPoseta, String username, ArrayList<String> listaPoslatihZahteva,
			ArrayList<String> listaProjekcija
			) {
		super();
		this.utype = type;
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
		this.loggedInEmail = email;
		this.username = username;
		this.listaPoslatihZahteva = listaPoslatihZahteva;
		this.listaProjekcija = listaProjekcija;
	}
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
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
	
	public String getUtype() {
		return utype;
	}

	public void setUtype(String type) {
		this.utype = type;
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
	
	public String ispisi() {
		return "User [utype=" + utype + ", username=" + username + ", password=" + password + ", passwordRepeat="
				+ passwordRepeat + ", email=" + email + ", name=" + name + ", lastname=" + lastname + ", city=" + city
				+ ", phoneNumber=" + phoneNumber + ", friends=" + friends + ", listaZahteva=" + listaZahteva
				+ ", listaPoslatihZahteva=" + listaPoslatihZahteva + ", listaProjekcija=" + listaProjekcija
				+ ", listaIstorijaPoseta=" + listaIstorijaPoseta + ", listaOcenaPozBio=" + listaOcenaPozBio
				+ ", listaOcenaProjekcija=" + listaOcenaProjekcija + ", enabled=" + enabled + ", confirmationToken="
				+ confirmationToken + ", loggedInEmail=" + loggedInEmail + "]";
	} 
	
}
