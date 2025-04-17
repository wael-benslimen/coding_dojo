package com.fanpages.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fanpages.demo.models.Celebrity;

@Repository
public interface CelebrityRepository extends CrudRepository<Celebrity, Long> {
	
	public List<Celebrity> findAll();
	
	public Optional<Celebrity> findById(Long id);
	
	public List<Celebrity> findByNameContains(String name);
}
