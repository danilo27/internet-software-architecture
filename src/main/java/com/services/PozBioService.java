package com.services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beans.PozBio;
import com.beans.User;
import com.repositories.PozBioRepository;
import com.repositories.UserRepository;

@Service
public class PozBioService {
	private PozBioRepository pozBioRepository;
    
    @Autowired
    public PozBioService(PozBioRepository pozBioRepository) { 
      this.pozBioRepository = pozBioRepository;
    }
	
	public PozBio findByName(String name) {
		return pozBioRepository.findByName(name);
	}
	
	public Collection<PozBio> findAll() {
		return pozBioRepository.findAll();
	}
	
	public Collection<PozBio> findByType(String type){
		return pozBioRepository.findByType(type);
	}
}
