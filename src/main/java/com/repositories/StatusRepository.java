package com.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.beans.Status;
@Repository
public interface StatusRepository extends MongoRepository<Status, String> {
	 public Status findByNaziv(String naziv);
	 public List<Status> findAll();
}
