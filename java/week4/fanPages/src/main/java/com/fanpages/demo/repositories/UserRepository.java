package com.fanpages.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fanpages.demo.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	
	public List<User> findAll();
	
	public Optional<User> findByEmail(String email);
	
	public Optional<User> findById(Long id);
	
}


