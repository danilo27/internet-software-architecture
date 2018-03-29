package com.beans;

public class RezervacijaRekvizita {
	private String imeRekvizita;
	private String imeKorisnika;
	public String getImeRekvizita() {
		return imeRekvizita;
	}
	public void setImeRekvizita(String imeRekvizita) {
		this.imeRekvizita = imeRekvizita;
	}
	public String getImeKorisnika() {
		return imeKorisnika;
	}
	public void setImeKorisnika(String imeKorisnika) {
		this.imeKorisnika = imeKorisnika;
	}
	public RezervacijaRekvizita(String imeRekvizita, String imeKorisnika) {
		super();
		this.imeRekvizita = imeRekvizita;
		this.imeKorisnika = imeKorisnika;
	}
	
	public RezervacijaRekvizita() {
		
	}
	
}
