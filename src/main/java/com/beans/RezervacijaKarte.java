package com.beans;

import java.util.ArrayList;

import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="rezervacije")
public class RezervacijaKarte {
	private String narucilac;
	private String pozbio;
	private String projekcija;
	private String datum;
	private String termin;
	private String sala;
	private ArrayList<String> selected_seats;
	
	public double getFiksnaCena() {
		return fiksnaCena;
	}
	public void setFiksnaCena(double fiksnaCena) {
		this.fiksnaCena = fiksnaCena;
	}
	private double fiksnaCena;
	private int idRez;
	private double ukcena;
	public double getUkcena() {
		return ukcena;
	}
	public void setUkcena(double ukcena) {
		this.ukcena = ukcena;
	}
	public RezervacijaKarte(String pozbio, String projekcija, String datum, String termin, String sala,
			ArrayList<String> selected_seats, 
			ArrayList<String> invited_friends, String narucilac, 
			int idRez, double ukcena,
			double fiksnaCena
			
			) {
		super();
		this.pozbio = pozbio;
		this.projekcija = projekcija;
		this.datum = datum;
		this.termin = termin;
		this.sala = sala;
		this.selected_seats = selected_seats;
		this.invited_friends = invited_friends;
		this.narucilac = narucilac;
		this.idRez = idRez;
		this.ukcena = ukcena;
		this.fiksnaCena = fiksnaCena;
		this.potvrdjeni = new ArrayList<String>();
	}
	public RezervacijaKarte(){}
	public int getIdRez() {
		return idRez;
	}
	public void setIdRez(int idRez) {
		this.idRez = idRez;
	}
	public String getNarucilac() {
		return narucilac;
	}
	public void setNarucilac(String narucilac) {
		this.narucilac = narucilac;
	}

	public String getPozbio() {
		return pozbio;
	}
	public void setPozbio(String pozbio) {
		this.pozbio = pozbio;
	}
	public String getProjekcija() {
		return projekcija;
	}
	public void setProjekcija(String projekcija) {
		this.projekcija = projekcija;
	}
	public String getDatum() {
		return datum;
	}
	public void setDatum(String datum) {
		this.datum = datum;
	}
	public String getTermin() {
		return termin;
	}
	public void setTermin(String termin) {
		this.termin = termin;
	}
	public String getSala() {
		return sala;
	}
	public void setSala(String sala) {
		this.sala = sala;
	}
	public ArrayList<String> getSelected_seats() {
		return selected_seats;
	}
	public void setSelected_seats(ArrayList<String> selected_seats) {
		this.selected_seats = selected_seats;
	}
	public ArrayList<String> getInvited_friends() {
		return invited_friends;
	}
	public void setInvited_friends(ArrayList<String> invited_friends) {
		this.invited_friends = invited_friends;
	}
	private ArrayList<String> invited_friends;
	private ArrayList<String> potvrdjeni;

	public ArrayList<String> getPotvrdjeni() {
		return potvrdjeni;
	}
	public void setPotvrdjeni(ArrayList<String> potvrdjeni) {
		this.potvrdjeni = potvrdjeni;
	}
	public String toString(){
		return Integer.toString(idRez);
	}
}
