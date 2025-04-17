package com.joybundel.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.joybundel.demo.models.Baby;

@Repository
public interface BabyRepository extends CrudRepository<Baby, Long> {
	
	public List<Baby> findAll();
	
	public Optional<Baby> findById(Long id);
	
	public Optional<Baby> findByName(String name);
	
}
