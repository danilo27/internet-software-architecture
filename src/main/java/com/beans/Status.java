package com.beans;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="statusi")
public class Status {
	private String naziv;
	private int brojPoseta;
	public int getBrojPoseta() {
		return brojPoseta;
	}
	public void setBrojPoseta(int brojPoseta) {
		this.brojPoseta = brojPoseta;
	}
	private int popust;
	Status(){}
	public String getNaziv() {
		return naziv;
	}
	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}
	public int getPopust() {
		return popust;
	}
	public void setPopust(int popust) {
		this.popust = popust;
	}
	public Status(String naziv, int brojPoseta, int popust) {
		super();
		this.naziv = naziv;
		this.brojPoseta = brojPoseta;
		this.popust = popust;
	}
	public String toString(){
		return "{ "+this.naziv+", " + this.brojPoseta + ", " + this.popust + " }";
	}
	
}
