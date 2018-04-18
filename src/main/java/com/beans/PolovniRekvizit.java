package com.beans;

import java.util.ArrayList;

public class PolovniRekvizit {
	private String naziv;
	private String opis;
	private String slika;
	private double cena;
	private String username;
	private String datumIsteka;
	private ArrayList<Ponuda> ponude;
	
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
	
	
	
	public String getDatumIsteka() {
		return datumIsteka;
	}
	public void setDatumIsteka(String datumIsteka) {
		this.datumIsteka = datumIsteka;
	}
	public ArrayList<Ponuda> getPonude() {
		return ponude;
	}
	public void setPonude(ArrayList<Ponuda> ponude) {
		this.ponude = ponude;
	}
	
	
	public PolovniRekvizit(String naziv, String opis, String slika, double cena, String username, String datumIsteka,
			ArrayList<Ponuda> ponude) {
		super();
		this.naziv = naziv;
		this.opis = opis;
		this.slika = slika;
		this.cena = cena;
		this.username = username;
		this.datumIsteka = datumIsteka;
		this.ponude = ponude;
	}
	
	
	@Override
	public String toString() {
		return "PolovniRekvizit [naziv=" + naziv + ", opis=" + opis + ", slika=" + slika + ", cena=" + cena
				+ ", username=" + username + ", datumIsteka=" + datumIsteka + ", ponude=" + ponude + "]";
	}
	
	public PolovniRekvizit() {}
	
}
