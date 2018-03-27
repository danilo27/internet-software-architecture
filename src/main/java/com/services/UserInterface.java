package com.services;

import java.util.Collection;

import org.springframework.stereotype.Service;

import com.beans.User;

@Service	
public interface UserInterface {
	Collection<User> findAll();

	User create(User user) throws Exception;

	User update(User user) throws Exception;

	void delete(String id);
}
