package com.beans;

public class ZvanicniRekvizit {
	private String naziv;
	private String opis;
	private String slika;
	private double cena;
	
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
	public ZvanicniRekvizit(String naziv, String opis, String slika, double cena) {
		super();
		this.naziv = naziv;
		this.opis = opis;
		this.slika = slika;
		this.cena = cena;
	}
	
	public ZvanicniRekvizit() { }
	@Override
	public String toString() {
		return "ZvanicniRekvizit [naziv=" + naziv + ", opis=" + opis + ", slika=" + slika + ", cena=" + cena + "]";
	}
	
	

}
