package com.beans;

import java.util.ArrayList;

import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="zauzetostSala")
public class ZauzetostSale {
	public ZauzetostSale(String datum, String termin, ArrayList<String> listaMesta) {
		super();
		this.datum = datum;
		this.termin = termin;
		this.listaMesta = listaMesta;
	}
	public ZauzetostSale(){}
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
	public ArrayList<String> getListaMesta() {
		return listaMesta;
	}
	public void setListaMesta(ArrayList<String> listaMesta) {
		this.listaMesta = listaMesta;
	}
	private String datum = "";
	private String termin = "";
	private ArrayList<String> listaMesta = new ArrayList<String>();
}
