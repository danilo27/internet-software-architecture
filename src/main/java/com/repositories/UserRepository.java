package com.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.beans.User;
@Repository
public interface UserRepository extends MongoRepository<User, String> {

    public User findByEmail(String email);
    public List<User> findByLastname(String lastname);
    public User findByConfirmationToken(String confirmationToken);

}