package com.beans;

public class ZvanicniRekvizit {
	private String naziv;
	private String opis;
	private String slika;
	private double cena;
	private boolean rezervisan;
	
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
	public boolean isRezervisan() {
		return rezervisan;
	}
	public void setRezervisan(boolean rezervisan) {
		this.rezervisan = rezervisan;
	}
	
	
	public ZvanicniRekvizit(String naziv, String opis, String slika, double cena, boolean rezervisan) {
		super();
		this.naziv = naziv;
		this.opis = opis;
		this.slika = slika;
		this.cena = cena;
		this.rezervisan = rezervisan;
	}
	public ZvanicniRekvizit() { }
	@Override
	public String toString() {
		return "ZvanicniRekvizit [naziv=" + naziv + ", opis=" + opis + ", slika=" + slika + ", cena=" + cena
				+ ", rezervisan=" + rezervisan + "]";
	}
	
	
	

}
