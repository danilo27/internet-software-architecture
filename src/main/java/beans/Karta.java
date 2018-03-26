package beans;

public class Karta {
	private String namePozBio;
	private String nazivProjekcije;
	private String datumProjekcije;
	private String termin;
	private int brojSale;
	private int brojMesta;
	
	public Karta(String namePozBio, String nazivProjekcije, String datumProjekcije, String termin, int brojSale,
			int brojMesta) {
		super();
		this.namePozBio = namePozBio;
		this.nazivProjekcije = nazivProjekcije;
		this.datumProjekcije = datumProjekcije;
		this.termin = termin;
		this.brojSale = brojSale;
		this.brojMesta = brojMesta;
	}

	public String getNamePozBio() {
		return namePozBio;
	}

	public void setNamePozBio(String namePozBio) {
		this.namePozBio = namePozBio;
	}

	public String getNazivProjekcije() {
		return nazivProjekcije;
	}

	public void setNazivProjekcije(String nazivProjekcije) {
		this.nazivProjekcije = nazivProjekcije;
	}

	public String getDatumProjekcije() {
		return datumProjekcije;
	}

	public void setDatumProjekcije(String datumProjekcije) {
		this.datumProjekcije = datumProjekcije;
	}

	public String getTermin() {
		return termin;
	}

	public void setTermin(String termin) {
		this.termin = termin;
	}

	public int getBrojSale() {
		return brojSale;
	}

	public void setBrojSale(int brojSale) {
		this.brojSale = brojSale;
	}

	public int getBrojMesta() {
		return brojMesta;
	}

	public void setBrojMesta(int brojMesta) {
		this.brojMesta = brojMesta;
	}
	
	
}
