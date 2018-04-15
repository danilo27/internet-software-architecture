package com.beans;

public class Notifikacija {
	private String naziv;
	private String username;
	private String tip;
	private String sadrzaj;
	public String getNaziv() {
		return naziv;
	}
	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getTip() {
		return tip;
	}
	public void setTip(String tip) {
		this.tip = tip;
	}
	public String getSadrzaj() {
		return sadrzaj;
	}
	public void setSadrzaj(String sadrzaj) {
		this.sadrzaj = sadrzaj;
	}
	public Notifikacija(String naziv, String username, String tip, String sadrzaj) {
		super();
		this.naziv = naziv;
		this.username = username;
		this.tip = tip;
		this.sadrzaj = sadrzaj;
	}
	
	public Notifikacija() { }
	@Override
	public String toString() {
		return "Notifikacija [naziv=" + naziv + ", username=" + username + ", tip=" + tip + ", sadrzaj=" + sadrzaj
				+ "]";
	}
	
	
	
	
}
