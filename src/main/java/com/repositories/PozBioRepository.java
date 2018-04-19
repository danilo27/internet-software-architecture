package com.repositories;

import java.util.List;

import com.beans.PozBio;
import com.beans.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

public interface PozBioRepository extends MongoRepository<PozBio, String>{
	public List<PozBio> findAll();
	public List<PozBio> findByType(String type);
    public PozBio findByName(String name);
}
