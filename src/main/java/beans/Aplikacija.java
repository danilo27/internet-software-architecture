package beans;
import java.util.ArrayList;

import org.springframework.stereotype.Component;

@Component 
public class Aplikacija {
	private ArrayList<PozBio> listaPozorista;
	private ArrayList<PozBio> listaBioskopa;
	private ArrayList<String> listaUsera;
	
	public Aplikacija(ArrayList<PozBio> listaPozorista, ArrayList<PozBio> listaBioskopa, ArrayList<String> listaUsera) {
		super();
		this.listaPozorista = listaPozorista;
		this.listaBioskopa = listaBioskopa;
		this.listaUsera = listaUsera;
	}

	public ArrayList<PozBio> getListaPozorista() {
		return listaPozorista;
	}

	public void setListaPozorista(ArrayList<PozBio> listaPozorista) {
		this.listaPozorista = listaPozorista;
	}

	public ArrayList<PozBio> getListaBioskopa() {
		return listaBioskopa;
	}

	public void setListaBioskopa(ArrayList<PozBio> listaBioskopa) {
		this.listaBioskopa = listaBioskopa;
	}

	public ArrayList<String> getListaUsera() {
		return listaUsera;
	}

	public void setListaUsera(ArrayList<String> listaUsera) {
		this.listaUsera = listaUsera;
	}
	
	
}
