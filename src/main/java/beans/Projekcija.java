package beans;

import java.util.ArrayList;

public class Projekcija {
	private String nazivProjekcije;
	private ArrayList<String> listaGlumaca;
	private String zanr;
	private String imeReditelja;
	private String trajnje;
	private String putanjaSlike;
	private double prosecnaOcena;
	private String opis;
	private ArrayList<Integer> listaSala;
	private ArrayList<String> listaTermina;
	public Projekcija(String nazivProjekcije, ArrayList<String> listaGlumaca, String zanr, String imeReditelja,
			String trajnje, String putanjaSlike, double prosecnaOcena, String opis, ArrayList<Integer> listaSala,
			ArrayList<String> listaTermina) {
		super();
		this.nazivProjekcije = nazivProjekcije;
		this.listaGlumaca = listaGlumaca;
		this.zanr = zanr;
		this.imeReditelja = imeReditelja;
		this.trajnje = trajnje;
		this.putanjaSlike = putanjaSlike;
		this.prosecnaOcena = prosecnaOcena;
		this.opis = opis;
		this.listaSala = listaSala;
		this.listaTermina = listaTermina;
	}
	public String getNazivProjekcije() {
		return nazivProjekcije;
	}
	public void setNazivProjekcije(String nazivProjekcije) {
		this.nazivProjekcije = nazivProjekcije;
	}
	public ArrayList<String> getListaGlumaca() {
		return listaGlumaca;
	}
	public void setListaGlumaca(ArrayList<String> listaGlumaca) {
		this.listaGlumaca = listaGlumaca;
	}
	public String getZanr() {
		return zanr;
	}
	public void setZanr(String zanr) {
		this.zanr = zanr;
	}
	public String getImeReditelja() {
		return imeReditelja;
	}
	public void setImeReditelja(String imeReditelja) {
		this.imeReditelja = imeReditelja;
	}
	public String getTrajnje() {
		return trajnje;
	}
	public void setTrajnje(String trajnje) {
		this.trajnje = trajnje;
	}
	public String getPutanjaSlike() {
		return putanjaSlike;
	}
	public void setPutanjaSlike(String putanjaSlike) {
		this.putanjaSlike = putanjaSlike;
	}
	public double getProsecnaOcena() {
		return prosecnaOcena;
	}
	public void setProsecnaOcena(double prosecnaOcena) {
		this.prosecnaOcena = prosecnaOcena;
	}
	public String getOpis() {
		return opis;
	}
	public void setOpis(String opis) {
		this.opis = opis;
	}
	public ArrayList<Integer> getListaSala() {
		return listaSala;
	}
	public void setListaSala(ArrayList<Integer> listaSala) {
		this.listaSala = listaSala;
	}
	public ArrayList<String> getListaTermina() {
		return listaTermina;
	}
	public void setListaTermina(ArrayList<String> listaTermina) {
		this.listaTermina = listaTermina;
	}
	
}
