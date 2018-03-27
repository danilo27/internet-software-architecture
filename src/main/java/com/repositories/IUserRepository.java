package com.repositories;

import java.util.Collection;
import java.util.List;

import com.beans.User;



public interface IUserRepository {
	public User findByName(String name);
    public List<User> findByLastname(String lastname);
}
