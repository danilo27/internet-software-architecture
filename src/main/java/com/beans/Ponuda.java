package com.beans;

public class Ponuda implements Comparable{
	private String username;
	private double cena;
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
	@Override
	public String toString() {
		return "Ponuda [username=" + username + ", cena=" + cena + "]";
	}
	public Ponuda(String username, double cena) {
		super();
		this.username = username;
		this.cena = cena;
	}
	
	public Ponuda() { }

	@Override
	public int compareTo(Object another) {
		if (this.getCena()>((Ponuda)another).getCena()){
            return -1;
        }else{
            return 1;
        }
	}
}


