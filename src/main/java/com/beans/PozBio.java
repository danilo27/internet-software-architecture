package com.beans;

import java.util.ArrayList;

import org.springframework.data.mongodb.core.mapping.Document;
//@Document(collection="pozbios")
public class PozBio {
	private String type;
	private String name;
	private String adress;
	private String opis;
	private ArrayList<Sala> listaSala;
	private ArrayList<Projekcija> listaProjekcija;
	private double prosecnaOcena;
	private int brojOcena;
	private double latitude;
	private double longitude;
	private String adminName;
	
	

	public PozBio(String type, String name, String adress, String opis, ArrayList<Sala> listaSala,
			ArrayList<Projekcija> listaProjekcija, double prosecnaOcena, int brojOcena, double latitude,
			double longitude, String adminName) {
		super();
		this.type = type;
		this.name = name;
		this.adress = adress;
		this.opis = opis;
		this.listaSala = listaSala;
		this.listaProjekcija = listaProjekcija;
		this.prosecnaOcena = prosecnaOcena;
		this.brojOcena = brojOcena;
		this.latitude = latitude;
		this.longitude = longitude;
		this.adminName = adminName;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAdress() {
		return adress;
	}

	public void setAdress(String adress) {
		this.adress = adress;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public ArrayList<Sala> getListaSala() {
		return listaSala;
	}

	public void setListaSala(ArrayList<Sala> listaSala) {
		this.listaSala = listaSala;
	}

	public ArrayList<Projekcija> getListaProjekcija() {
		return listaProjekcija;
	}

	public void setListaProjekcija(ArrayList<Projekcija> listaProjekcija) {
		this.listaProjekcija = listaProjekcija;
	}

	public double getProsecnaOcena() {
		return prosecnaOcena;
	}

	public void setProsecnaOcena(double prosecnaOcena) {
		this.prosecnaOcena = prosecnaOcena;
	}

	public int getBrojOcena() {
		return brojOcena;
	}

	public void setBrojOcena(int brojOcena) {
		this.brojOcena = brojOcena;
	}
	
	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public PozBio() {}

	@Override
	public String toString() {
		return "PozBio [type=" + type + ", name=" + name + ", adress=" + adress + ", opis=" + opis + ", listaSala="
				+ listaSala + ", listaProjekcija=" + listaProjekcija + ", prosecnaOcena=" + prosecnaOcena
				+ ", brojOcena=" + brojOcena + ", latitude=" + latitude + ", longitude=" + longitude + ", adminName="
				+ adminName + "]";
	}

	
	
	
	
}
