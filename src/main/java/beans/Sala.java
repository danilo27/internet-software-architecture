package beans;

import java.util.ArrayList;

public class Sala {
	private int brojSale;
	private int brojRedova;
	private int brojKolona;
	private ArrayList<ArrayList<Integer>> listaMesta;
	public Sala(int brojSale, int brojRedova, int brojKolona, ArrayList<ArrayList<Integer>> listaMesta) {
		super();
		this.brojSale = brojSale;
		this.brojRedova = brojRedova;
		this.brojKolona = brojKolona;
		this.listaMesta = listaMesta;
	}
	public int getBrojSale() {
		return brojSale;
	}
	public void setBrojSale(int brojSale) {
		this.brojSale = brojSale;
	}
	public int getBrojRedova() {
		return brojRedova;
	}
	public void setBrojRedova(int brojRedova) {
		this.brojRedova = brojRedova;
	}
	public int getBrojKolona() {
		return brojKolona;
	}
	public void setBrojKolona(int brojKolona) {
		this.brojKolona = brojKolona;
	}
	public ArrayList<ArrayList<Integer>> getListaMesta() {
		return listaMesta;
	}
	public void setListaMesta(ArrayList<ArrayList<Integer>> listaMesta) {
		this.listaMesta = listaMesta;
	}
	
}
