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

import com.beans.User;
import com.repositories.UserRepository;
import com.services.StorageService;

@SpringBootApplication
public class Application implements CommandLineRunner{

	@Autowired
	private UserRepository repository;
	
	@Resource
	StorageService storageService;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

//initial
		repository.deleteAll();
//
//		repository.save(new User("danilo", "danilo"));
//		repository.save(new User("admin", "admin"));
		
		repository.save(new User("regular", "ae", "ae", "ae", "ae", "ae",
				4323, new ArrayList<String>(Arrays.asList("a","b","c")), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "ae", new ArrayList<String>(), new ArrayList<String>()				));
		
		repository.save(new User("regular", "de", "de", "de", "de", "de",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "de", new ArrayList<String>(), new ArrayList<String>()					));
		
		repository.save(new User("regular", "pas", "danilo@danilo", "Danilo", "Bujisa", "Novi Sad",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "coda", new ArrayList<String>(), new ArrayList<String>()					));
		
		repository.save(new User("regular", "pas", "rose@rose", "Rose", "N", "Ohio",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "thug", new ArrayList<String>(), new ArrayList<String>()		 ));
		
		repository.save(new User("regular", "pas", "tony@tony", "Tony", "F", "Miami",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "el", new ArrayList<String>(), new ArrayList<String>()		 ));
		
		repository.save(new User("admin", "a", "a", "a", "a", "a",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "a", new ArrayList<String>(), new ArrayList<String>()	 ));
		
		repository.save(new User("regular", "b", "b", "b", "b", "b",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "b", new ArrayList<String>(), new ArrayList<String>()		 ));
		
		repository.save(new User("regular", "c", "c", "c", "c", "c",
				2131, new ArrayList<String>(), new ArrayList<String>(),
				new HashMap<String, Integer>(), new HashMap<String, Integer>(), 
				new ArrayList<String>(), "c", new ArrayList<String>(), new ArrayList<String>()		 ));
		
		
		
		storageService.deleteAll();
		storageService.init();
		

	}

}