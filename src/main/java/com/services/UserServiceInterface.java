package com.services;

import java.util.Collection;

import org.springframework.stereotype.Service;

import com.beans.User;

@Service	
public interface UserServiceInterface {
	Collection<User> findAll();

	User create(User user) throws Exception;

	User update(User user) throws Exception;

	void delete(String id);
	
	public User findByEmail(String email);
	
	public User findByUsername(String username);
	
	public User findByConfirmationToken(String confirmationToken);
	
	public void saveUser(User user);
	
	public User findByLoggedInEmail(String loggedInEmail);
}
