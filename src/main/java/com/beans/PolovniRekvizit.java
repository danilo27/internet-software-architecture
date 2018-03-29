package com.beans;

import java.util.Date;

public class PolovniRekvizit {
	private String naziv;
	private String opis;
	private String slika;
	private double cena;
	private String username;
	private Date datumIsteka;
	
	public String getNaziv() {
		return naziv;
	}
	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}
	public String getOpis() {
		return opis;
	}
	public void setOpis(String opis) {
		this.opis = opis;
	}
	public String getSlika() {
		return slika;
	}
	public void setSlika(String slika) {
		this.slika = slika;
	}
	public double getCena() {
		return cena;
	}
	public void setCena(double cena) {
		this.cena = cena;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Date getDatumIsteka() {
		return datumIsteka;
	}
	public void setDatumIsteka(Date datumIsteka) {
		this.datumIsteka = datumIsteka;
	}
	public PolovniRekvizit(String naziv, String opis, String slika, double cena, String username, Date datumIsteka) {
		super();
		this.naziv = naziv;
		this.opis = opis;
		this.slika = slika;
		this.cena = cena;
		this.username = username;
		this.datumIsteka = datumIsteka;
	}
	
}
