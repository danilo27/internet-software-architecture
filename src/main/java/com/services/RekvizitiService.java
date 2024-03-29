package com.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

import org.bson.Document;

import com.beans.Licitacija;
import com.beans.Notifikacija;
import com.beans.PolovniRekvizit;
import com.beans.Ponuda;
import com.beans.RezervacijaRekvizita;
import com.beans.User;
import com.beans.ZvanicniRekvizit;
import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Updates;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import static com.mongodb.client.model.Filters.eq;

public class RekvizitiService {
	
	private MongoDatabase baza;
	private LinkedList<String> rezervacijeRekvizita;
	private LinkedList<String> prihvaceniOglasi;
	private LinkedList<String> obustavljenePonude;
	
	@SuppressWarnings("resource")
	public RekvizitiService() {
		MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
		baza = mongoClient.getDatabase("test"); //IsaDB
		rezervacijeRekvizita = new LinkedList<String>();
		prihvaceniOglasi = new LinkedList<String>();
		obustavljenePonude = new LinkedList<String>();
	}
	
	
	public String getZvanicniRekviziti() {
		MongoCollection<Document> zvanicniRekviziti = baza.getCollection("zvanicniRekviziti");
		List<Document> zvanicniRekvizitiList = (List<Document>) zvanicniRekviziti.find().into(new ArrayList<Document>());
		Gson g = new GsonBuilder().create();
		String ret = "[";
		
		boolean dodaj = false;
		
		for(Document d : zvanicniRekvizitiList) {
			if(dodaj) {
				ret+=",";
			}
			dodaj = true;
			ZvanicniRekvizit r = g.fromJson(d.toJson(), ZvanicniRekvizit.class);
			ret+=g.toJson(r);
		}
		ret+="]";

		return ret;
	}
	
	public String getOglasi() {
		MongoCollection<Document> oglasi = baza.getCollection("oglasi");
		List<Document> oglasiList = (List<Document>) oglasi.find().into(new ArrayList<Document>());
		Gson g = new GsonBuilder().create();
		String ret = "[";
		
		boolean dodaj = false;
		
		for(Document d : oglasiList) {
			if(dodaj) {
				ret+=",";
			}
			dodaj = true;
			PolovniRekvizit r = g.fromJson(d.toJson(), PolovniRekvizit.class);
			ret+=g.toJson(r);
		}
		ret+="]";

		return ret;
	}
	
	public String getOglasiZaProveru() {
		MongoCollection<Document> oglasi = baza.getCollection("oglasiZaProveru");
		List<Document> oglasiList = (List<Document>) oglasi.find().into(new ArrayList<Document>());
		Gson g = new GsonBuilder().create();
		String ret = "[";
		
		boolean dodaj = false;
		
		for(Document d : oglasiList) {
			if(dodaj) {
				ret+=",";
			}
			dodaj = true;
			PolovniRekvizit r = g.fromJson(d.toJson(), PolovniRekvizit.class);
			ret+=g.toJson(r);
		}
		ret+="]";
		

		return ret;
	}
	
	public void rezervisiZvanicniRekvizit(RezervacijaRekvizita rezrek) throws Exception {
		
		if(rezervacijeRekvizita.contains(rezrek.getImeRekvizita())) {
			throw new Exception();
		}else {
			rezervacijeRekvizita.add(rezrek.getImeRekvizita());
		}
		Thread.sleep(3000);
		MongoCollection<Document> rezervisaniRekviziti = baza.getCollection("rezervisaniRekviziti");
		Gson g = new GsonBuilder().create();
		String rr = g.toJson(rezrek); 
		Document d = Document.parse(rr);
		rezervisaniRekviziti.insertOne(d);
	
		MongoCollection<Document> zvanicniRekviziti = baza.getCollection("zvanicniRekviziti");
		
		FindIterable<Document> dokRek = zvanicniRekviziti.find(eq("naziv",rezrek.getImeRekvizita()));
		
		ZvanicniRekvizit rekvizit = g.fromJson(dokRek.first().toJson(), ZvanicniRekvizit.class);
		
		if(rekvizit.isRezervisan()) {
			throw new Exception();
		}
		
		zvanicniRekviziti.findOneAndUpdate(eq("naziv",rezrek.getImeRekvizita()), Updates.set("rezervisan", true));
		
		rezervacijeRekvizita.remove(rezrek.getImeRekvizita());
	}

	public void posaljiOglasNaProveru(PolovniRekvizit oglas) {
		MongoCollection<Document> oglasiZaProveru = baza.getCollection("oglasiZaProveru");
		Gson g = new GsonBuilder().create();
		String o = g.toJson(oglas);
		Document d = Document.parse(o);
		oglasiZaProveru.insertOne(d);
	}
	
	@SuppressWarnings("unchecked")
	public void posaljiPonudu(Licitacija licitacija) throws Exception {
		if(obustavljenePonude.contains(licitacija.getOglas())) {
			throw new Exception();
		}
		
		MongoCollection<Document> oglasi = baza.getCollection("oglasi");
		Gson g = new GsonBuilder().create();
		Ponuda p = new Ponuda(licitacija.getUsername(),licitacija.getCena());

		FindIterable<Document> d = oglasi.find(eq("naziv",licitacija.getOglas()));
		
		if(d.first() == null) {
			throw new Exception();
		}
		
		PolovniRekvizit oglas = g.fromJson(d.first().toJson(), PolovniRekvizit.class);
		
		
		boolean izmenjeno = false;
		
		for(Ponuda po : oglas.getPonude()) {
			if(po.getUsername().equals(licitacija.getUsername())){
				izmenjeno = true;
				po.setCena(licitacija.getCena());
				break;
			}
		}
		
		if(!izmenjeno) {
			oglas.getPonude().add(p);
		}
		
		Collections.sort(oglas.getPonude());
		
		String jsono = g.toJson(oglas);
		
		Document promenjen = Document.parse(jsono);
		
		oglasi.findOneAndReplace(eq("naziv",licitacija.getOglas()), promenjen);

	}
	
	public void odaberiPonudu(PolovniRekvizit oglas) {
		if(!obustavljenePonude.contains(oglas.getNaziv())) {
		obustavljenePonude.add(oglas.getNaziv());
			
		MongoCollection<Document> oglasi = baza.getCollection("oglasi");
		
		Gson g = new GsonBuilder().create();
		
		oglasi.deleteOne(eq("naziv", oglas.getNaziv()));
		
		obustavljenePonude.remove(oglas.getNaziv());
		
		MongoCollection<Document> notifikacije = baza.getCollection("notifikacije");
		
		for(int i=0;i<oglas.getPonude().size();i++) {
			Notifikacija n = null;
			
			if(i==0) {
				n = new Notifikacija(oglas.getNaziv(),oglas.getPonude().get(i).getUsername(),"ponuda","Obavestavamo vas da je vasa ponuda na oglasu "+oglas.getNaziv()+" prihvacena");
			}else {
				n = new Notifikacija(oglas.getNaziv(),oglas.getPonude().get(i).getUsername(),"ponuda","Obavestavamo vas da je vasa ponuda na oglasu "+oglas.getNaziv()+" odbijena");
			}
			
			String njson = g.toJson(n);
			
			Document notifikacija = Document.parse(njson);
			
			notifikacije.insertOne(notifikacija);
		}		
		}
	}
	
	public void postaviRekvizit(ZvanicniRekvizit rekvizit) {
		MongoCollection<Document> zvanicniRekviziti = baza.getCollection("zvanicniRekviziti");
		Gson g = new GsonBuilder().create();
		String r = g.toJson(rekvizit); 
		Document d = Document.parse(r);
		zvanicniRekviziti.insertOne(d);
	}
	
	public void ukloniZvanicni(ZvanicniRekvizit rekvizit) {
		MongoCollection<Document> zvanicniRekviziti = baza.getCollection("zvanicniRekviziti");
		zvanicniRekviziti.deleteOne(eq("naziv",rekvizit.getNaziv()));
	}
	
	public void izmeniRekvizit(ZvanicniRekvizit rekvizit) {
		MongoCollection<Document> zvanicniRekviziti = baza.getCollection("zvanicniRekviziti");
		Gson g = new GsonBuilder().create();
		Document zamena = Document.parse(g.toJson(rekvizit));
		zvanicniRekviziti.replaceOne(eq("naziv",rekvizit.getNaziv()), zamena);
	}
	
	public String getAktivniOglasi(User user) {
		MongoCollection<Document> oglasi = baza.getCollection("oglasi");
		
		FindIterable<Document> oglasiList = oglasi.find(eq("username",user.getUsername()));
		
		Gson g = new GsonBuilder().create();
		String ret = "[";
		
		boolean dodaj = false;
		
		for(Document d : oglasiList) {
			if(dodaj) {
				ret+=",";
			}
			dodaj = true;
			PolovniRekvizit r = g.fromJson(d.toJson(), PolovniRekvizit.class);
			ret+=g.toJson(r);
		}
		
		ret+="]";
		
		return ret;
	}
	
	public String getNotifikacije(User user) {
		MongoCollection<Document> notifikacije = baza.getCollection("notifikacije");
		
		FindIterable<Document> oglasiList = notifikacije.find(eq("username",user.getUsername()));
		
		Gson g = new GsonBuilder().create();
		
		String ret = "[";
		
		boolean dodaj = false;
		
		for(Document d : oglasiList) {
			if(dodaj) {
				ret+=",";
			}
			dodaj = true;
			Notifikacija n = g.fromJson(d.toJson(), Notifikacija.class);
			ret+=g.toJson(n);
		}
		
		
		ret+="]";
		
		return ret;
	}
	
	public void prihvacenOglas(PolovniRekvizit oglas) throws Exception {
		if(prihvaceniOglasi.contains(oglas.getNaziv())) {
			throw new Exception();
		} else {
			prihvaceniOglasi.add(oglas.getNaziv());
		}
		Thread.sleep(3000);
		MongoCollection<Document> oglasiZaProveru = baza.getCollection("oglasiZaProveru");
		
		FindIterable<Document> docs = oglasiZaProveru.find(eq("naziv",oglas.getNaziv()));
		
		if(docs.first() == null) {
			throw new Exception();
		}
		
		oglasiZaProveru.deleteOne(eq("naziv",oglas.getNaziv()));
		
		Gson g = new GsonBuilder().create();
		MongoCollection<Document> oglasi = baza.getCollection("oglasi");
		Document d = Document.parse(g.toJson(oglas));
		oglasi.insertOne(d);
		
		Notifikacija n = new Notifikacija(oglas.getNaziv(),oglas.getUsername(),"oglas","Obavestavamo vas da je vas zahtev za postavljanje oglasa "+oglas.getNaziv()+" prihvacen");
		
		String njson = g.toJson(n);
		
		Document notifikacija = Document.parse(njson);
		
		MongoCollection<Document> notifikacije = baza.getCollection("notifikacije");
		
		notifikacije.insertOne(notifikacija);
		
		prihvaceniOglasi.remove(oglas.getNaziv());
	}
	
	public void odbijenOglas(PolovniRekvizit oglas) throws Exception {
		if(prihvaceniOglasi.contains(oglas.getNaziv())) {
			throw new Exception();
		} else {
			prihvaceniOglasi.add(oglas.getNaziv());
		}
		Thread.sleep(3000);
		MongoCollection<Document> oglasiZaProveru = baza.getCollection("oglasiZaProveru");
		
		FindIterable<Document> docs = oglasiZaProveru.find(eq("naziv",oglas.getNaziv()));
		
		if(docs.first() == null) {
			throw new Exception();
		}
		
		Gson g = new GsonBuilder().create();
		oglasiZaProveru.deleteOne(eq("naziv",oglas.getNaziv()));
		
		Notifikacija n = new Notifikacija(oglas.getNaziv(),oglas.getUsername(),"oglas","Obavestavamo vas da je vas zahtev za postavljanje oglasa "+oglas.getNaziv()+" odbijen");
		
		String njson = g.toJson(n);
		
		Document notifikacija = Document.parse(njson);
		
		MongoCollection<Document> notifikacije = baza.getCollection("notifikacije");
		
		notifikacije.insertOne(notifikacija);
		
		prihvaceniOglasi.remove(oglas.getNaziv());
	}
	
}
