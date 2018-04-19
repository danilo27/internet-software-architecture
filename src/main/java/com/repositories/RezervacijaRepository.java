package com.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.beans.User;
import com.beans.RezervacijaKarte;
//@Repository
public interface RezervacijaRepository extends MongoRepository<RezervacijaKarte, Integer> {

    public RezervacijaKarte findByIdRez(int id);
    public List<RezervacijaKarte> findAll();
}
