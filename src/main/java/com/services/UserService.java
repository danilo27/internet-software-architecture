package com.services;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.beans.User;
import com.repositories.UserRepository;

@Service
public class UserService implements UserInterface{

    @Autowired
    private UserRepository userRepository;

	@Override
	public Collection<User> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User create(User user) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User update(User user) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(String id) {
		// TODO Auto-generated method stub
		
	}

    
}

