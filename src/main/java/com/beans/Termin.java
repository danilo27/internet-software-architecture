package com.beans;

import java.util.ArrayList;

public class Termin {
	public String termin;
	public int sala;
	public double cena;
	private ArrayList<String> zauzetost;
	Termin(){}

	public String getTermin() {
		return termin;
	}

	public void setTermin(String termin) {
		this.termin = termin;
	}

	public int getSala() {
		return sala;
	}

	public void setSala(int sala) {
		this.sala = sala;
	}

	public double getCena() {
		return cena;
	}

	public void setCena(double cena) {
		this.cena = cena;
	}

	public Termin(String termin, int sala, double cena) {
		super();
		this.termin = termin;
		this.sala = sala;
		this.cena = cena;
		this.zauzetost = new ArrayList<String>();
	}

	public ArrayList<String> getZauzetost() {
		return zauzetost;
	}

	public void setZauzetost(ArrayList<String> zauzetost) {
		this.zauzetost = zauzetost;
	}
}
