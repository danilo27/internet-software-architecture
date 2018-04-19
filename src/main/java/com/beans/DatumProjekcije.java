package com.beans;

import java.util.ArrayList;

public class DatumProjekcije {
	private String datum;
	private ArrayList<Termin> listaTermina;
	public String getDatum() {
		return datum;
	}
	public void setDatum(String datum) {
		this.datum = datum;
	}
	public ArrayList<Termin> getListaTermina() {
		return listaTermina;
	}
	public void setListaTermina(ArrayList<Termin> listaTermina) {
		this.listaTermina = listaTermina;
	}
	
	public DatumProjekcije(){}
	
	public DatumProjekcije(String datum, ArrayList<Termin> listaTermina) {
		super();
		this.datum = datum;
		this.listaTermina = listaTermina;
	}
}
