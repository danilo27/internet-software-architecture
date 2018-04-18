package com.beans;

public class Licitacija {
	private String username;
	private double cena;
	private String oglas;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public double getCena() {
		return cena;
	}
	public void setCena(double cena) {
		this.cena = cena;
	}
	public String getOglas() {
		return oglas;
	}
	public void setOglas(String oglas) {
		this.oglas = oglas;
	}
	public Licitacija(String username, double cena, String oglas) {
		super();
		this.username = username;
		this.cena = cena;
		this.oglas = oglas;
	}
	@Override
	public String toString() {
		return "Licitacija [username=" + username + ", cena=" + cena + ", oglas=" + oglas + "]";
	}
	
	public Licitacija() { }
	
}
