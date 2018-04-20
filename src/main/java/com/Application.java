package com;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.beans.PozBio;
import com.beans.Projekcija;
import com.beans.Sala;
import com.beans.Status;
import com.beans.User;
import com.beans.Termin;
import com.beans.DatumProjekcije;
import com.repositories.PozBioRepository;
import com.repositories.RezervacijaRepository;
import com.repositories.StatusRepository;
import com.repositories.UserRepository;
import com.services.StorageService;

@SpringBootApplication
public class Application implements CommandLineRunner{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PozBioRepository pozBioRepository;
	
	@Autowired
	private RezervacijaRepository rezervacijaRepository;
	
	@Autowired
	private StatusRepository statusRepository;
	
	@Resource
	StorageService storageService;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		userRepository.deleteAll();
		pozBioRepository.deleteAll();
		rezervacijaRepository.deleteAll();
		statusRepository.deleteAll();
		
		userRepository.save(new User("fanAdmin", "ae", "ae", "ae", "ae", "ae",
				4323, new ArrayList<String>(Arrays.asList("a","b","c")), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "ae", new ArrayList<String>(), new ArrayList<Integer>(),"true"				));
		
		userRepository.save(new User("regular", "de", "de", "de", "de", "de",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "de", new ArrayList<String>(), new ArrayList<Integer>()	,"true"					));
		
		userRepository.save(new User("regular", "pas", "danilo@danilo", "Danilo", "Bujisa", "Novi Sad",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "coda", new ArrayList<String>(), new ArrayList<Integer>(),"true"						));
		
		userRepository.save(new User("regular", "pas", "rose@rose", "Rose", "N", "Ohio",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "thug", new ArrayList<String>(), new ArrayList<Integer>()	,"true"		 ));
		
		userRepository.save(new User("regular", "pas", "tony@tony", "Tony", "F", "Miami",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "el", new ArrayList<String>(), new ArrayList<Integer>()	,"true"		 ));
		
		userRepository.save(new User("sysAdmin", "a", "a", "a", "a", "a",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "a", new ArrayList<String>(), new ArrayList<Integer>()	,"true"	 ));
		
		userRepository.save(new User("venueAdmin", "b", "b", "b", "b", "b",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "b", new ArrayList<String>(), new ArrayList<Integer>()	,"true"		 ));
		
		userRepository.save(new User("fanAdmin", "c", "c", "c", "c", "c",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "c", new ArrayList<String>(), new ArrayList<Integer>()	,"true"		 ));
		
		userRepository.save(new User("regular", "pas", "testacc1isa@gmail.com", "Ime1", "Prezime1", "a",
		2131,  new ArrayList<String>(Arrays.asList("acc2","acc3")), new ArrayList<String>(),
		new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
		new ArrayList<String>(), "acc1", new ArrayList<String>(), new ArrayList<Integer>()	,"true"	 ));

		userRepository.save(new User("regular", "pas", "testacc2isa@gmail.com", "Ime2", "Prezime2", "a",
				2131,  new ArrayList<String>(Arrays.asList("acc1","acc3")), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "acc2", new ArrayList<String>(), new ArrayList<Integer>()	,"true"	 ));

		userRepository.save(new User("regular", "pas", "testacc3isa@gmail.com", "Ime3", "Prezime3", "a",
				2131, new ArrayList<String>(Arrays.asList("acc1","acc2")), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "acc3", new ArrayList<String>(), new ArrayList<Integer>()	,"true"	 ));
		
		storageService.deleteAll();
		storageService.init();
		
		
		//pozorista
		
		pozBioRepository.save(
				new PozBio("poz", 
						"Pozoriste B",
						"Adresa 1",
						"opis", 
				new ArrayList<Sala>(Arrays.asList(new Sala(1, 10, 12, new ArrayList<ArrayList<Integer>>()),
						new Sala(2, 12, 10, new ArrayList<ArrayList<Integer>>()),
						new Sala(3, 5, 15, new ArrayList<ArrayList<Integer>>())
						
						)),
				new ArrayList<Projekcija>(Arrays.asList(
						new Projekcija("Na Drini cuprija", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("16/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350)   )) ),
										   
										   new DatumProjekcije("25/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350)   )) ),
										   
										  new DatumProjekcije("30/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350)   )) )
										   
												
												))),
						new Projekcija("Cica Gorio", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("16/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300),
												   new Termin("18:00", 2, 300),
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350),
												   new Termin("22:00", 3, 350))) )))),
						new Projekcija("Led", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("16/04/2018", 
												   new ArrayList<Termin>(
													   Arrays.asList(
													   new Termin("15:00", 1, 300), 
													   new Termin("18:00", 2, 300), 
													   new Termin("20:00", 2, 350), 
													   new Termin("22:00", 2, 350), 
													   new Termin("22:00", 3, 350))) ))))
						)),
				4.3, 20, "Acapulco"
				));
		
		pozBioRepository.save(new PozBio("poz", "Pozoriste A", "Adresa 1", "opis", 
				new ArrayList<Sala>(Arrays.asList(new Sala(1, 10, 12, new ArrayList<ArrayList<Integer>>()),
						new Sala(2, 12, 10, new ArrayList<ArrayList<Integer>>()),
						new Sala(3, 5, 15, new ArrayList<ArrayList<Integer>>())
						
						)),
				new ArrayList<Projekcija>(Arrays.asList(
						new Projekcija("Ana Karenjina", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("16/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350))) ),
										   new 
										   DatumProjekcije("25/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350))) ) ,
										   new 
										   DatumProjekcije("30/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350))) ) 
										   
												)  )),
						new Projekcija("Proces", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("18/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("11:43", 1, 300),
												   new Termin("18:00", 2, 300),
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350),
												   new Termin("22:00", 3, 350))) )))),
						new Projekcija("Sumnjivo lice", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("16/04/2018", 
												   new ArrayList<Termin>(
													   Arrays.asList(
													   new Termin("15:00", 1, 300), 
													   new Termin("18:00", 2, 300), 
													   new Termin("20:00", 2, 350), 
													   new Termin("22:00", 2, 350), 
													   new Termin("22:00", 3, 350))) ))))
						)),
				4.3, 20, "Beograd"
				));
		
		pozBioRepository.save(new PozBio("poz", "Pozoriste C", "Adresa 1", "opis", 
				new ArrayList<Sala>(Arrays.asList(new Sala(1, 10, 12, new ArrayList<ArrayList<Integer>>()),
						new Sala(2, 12, 10, new ArrayList<ArrayList<Integer>>()),
						new Sala(3, 5, 15, new ArrayList<ArrayList<Integer>>())
						
						)),
				new ArrayList<Projekcija>(Arrays.asList(
						new Projekcija("Sumnjivo lice", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("15/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350))) ),
										   new 
										   DatumProjekcije("16/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350))) ),
										   new 
										   DatumProjekcije("17/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350))) )
										   
												))),
						new Projekcija("Na Drini cuprija", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("16/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300),
												   new Termin("18:00", 2, 300),
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350),
												   new Termin("22:00", 3, 350))) )))),
						new Projekcija("Proces", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("16/04/2018", 
												   new ArrayList<Termin>(
													   Arrays.asList(
													   new Termin("15:00", 1, 300), 
													   new Termin("18:00", 2, 300), 
													   new Termin("20:00", 2, 350), 
													   new Termin("22:00", 2, 350), 
													   new Termin("22:00", 3, 350))) ))))
						)),
				4.3, 20, "Cikago"
				));
		
		//bioskopi
		
		pozBioRepository.save(new PozBio("bio", "Bioskop B", "Adresa 1", "opis", 
				new ArrayList<Sala>(Arrays.asList(new Sala(1, 10, 12, new ArrayList<ArrayList<Integer>>()),
						new Sala(2, 12, 10, new ArrayList<ArrayList<Integer>>()),
						new Sala(3, 5, 15, new ArrayList<ArrayList<Integer>>())
						
						)),
				new ArrayList<Projekcija>(Arrays.asList(
						new Projekcija("Mad Max", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("25/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350))) ),
										   new 
										   DatumProjekcije("27/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350))) ),
										   new 
										   DatumProjekcije("29/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350))) )
										   
												))),
						new Projekcija("LOTR", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("25/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300),
												   new Termin("18:00", 2, 300),
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350),
												   new Termin("22:00", 3, 350))) ),
										   new 
										   DatumProjekcije("27/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300),
												   new Termin("18:00", 2, 300),
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350),
												   new Termin("22:00", 3, 350))) ),
										   new 
										   DatumProjekcije("29/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300),
												   new Termin("18:00", 2, 300),
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350),
												   new Termin("22:00", 3, 350))) )
										   
												
												))),
						new Projekcija("Deadpool", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("25/04/2018", 
												   new ArrayList<Termin>(
													   Arrays.asList(
													   new Termin("15:00", 1, 300), 
													   new Termin("18:00", 2, 300), 
													   new Termin("20:00", 2, 350), 
													   new Termin("22:00", 2, 350), 
													   new Termin("22:00", 3, 350))) ),
										   new 
										   DatumProjekcije("27/04/2018", 
												   new ArrayList<Termin>(
													   Arrays.asList(
													   new Termin("15:00", 1, 300), 
													   new Termin("18:00", 2, 300), 
													   new Termin("20:00", 2, 350), 
													   new Termin("22:00", 2, 350), 
													   new Termin("22:00", 3, 350))) ),
										   new 
										   DatumProjekcije("29/04/2018", 
												   new ArrayList<Termin>(
													   Arrays.asList(
													   new Termin("15:00", 1, 300), 
													   new Termin("18:00", 2, 300), 
													   new Termin("20:00", 2, 350), 
													   new Termin("22:00", 2, 350), 
													   new Termin("22:00", 3, 350))) )
										   
										   
												)))
						)),
				4.3, 20, "Acapulco"
				));
		
		pozBioRepository.save(new PozBio("bio", "Bioskop A", "Adresa 1", "opis", 
				new ArrayList<Sala>(Arrays.asList(new Sala(1, 10, 12, new ArrayList<ArrayList<Integer>>()),
						new Sala(2, 12, 10, new ArrayList<ArrayList<Integer>>()),
						new Sala(3, 5, 15, new ArrayList<ArrayList<Integer>>())
						
						)),
				new ArrayList<Projekcija>(Arrays.asList(
						new Projekcija("Logan", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("25/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350))) ),
										   new 
										   DatumProjekcije("27/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350))) ),
										   new 
										   DatumProjekcije("29/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350))) )
										   
												))),
						new Projekcija("X-Men", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("25/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300),
												   new Termin("18:00", 2, 300),
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350),
												   new Termin("22:00", 3, 350))) )))),
						new Projekcija("Rise of the planet of apes", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("25/04/2018", 
												   new ArrayList<Termin>(
													   Arrays.asList(
													   new Termin("15:00", 1, 300), 
													   new Termin("18:00", 2, 300), 
													   new Termin("20:00", 2, 350), 
													   new Termin("22:00", 2, 350), 
													   new Termin("22:00", 3, 350))) ))))
						)),
				4.3, 20, "Beograd"
				));
		
		pozBioRepository.save(new PozBio("bio", "Bioskop C", "Adresa 1", "opis", 
				new ArrayList<Sala>(Arrays.asList(new Sala(1, 10, 12, new ArrayList<ArrayList<Integer>>()),
						new Sala(2, 12, 10, new ArrayList<ArrayList<Integer>>()),
						new Sala(3, 5, 15, new ArrayList<ArrayList<Integer>>())
						
						)),
				new ArrayList<Projekcija>(Arrays.asList(
						new Projekcija("Dawn of the planet of apes", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("19/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("21:51", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350))) ),
										   
										   new 
										   DatumProjekcije("17/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350))) ),
										   new 
										   DatumProjekcije("18/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300), 
												   new Termin("18:00", 2, 300), 
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350), 
												   new Termin("22:00", 3, 350))) )
												))),
						new Projekcija("Guardians", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("16/04/2018", new ArrayList<Termin>(Arrays.asList(
												   new Termin("15:00", 1, 300),
												   new Termin("18:00", 2, 300),
												   new Termin("20:00", 2, 350),
												   new Termin("22:00", 2, 350),
												   new Termin("22:00", 3, 350))) )))),
						new Projekcija("Kingsman", 
								new ArrayList<String>(Arrays.asList("Glumac 1", "Glumac 2", "Glumac 3" )),
								"Komedija", "Reditelj1", "120", "putanja", 4.2, "opis",
								new ArrayList<Integer>(Arrays.asList(1,2,3)),
								new ArrayList<DatumProjekcije>(
										Arrays.asList(new 
										   DatumProjekcije("16/04/2018", 
												   new ArrayList<Termin>(
													   Arrays.asList(
													   new Termin("15:00", 1, 300), 
													   new Termin("18:00", 2, 300), 
													   new Termin("20:00", 2, 350), 
													   new Termin("22:00", 2, 350), 
													   new Termin("22:00", 3, 350))) ))))
						)),
				4.3, 20, "Cikago"
				));
		
		
		statusRepository.save(new Status("NEW", 0, 0));
		statusRepository.save(new Status("BRONZE", 0, 10));
		statusRepository.save(new Status("SILVER", 1, 20));
		statusRepository.save(new Status("GOLD", 2, 30));
	}
	
	
	
	

}