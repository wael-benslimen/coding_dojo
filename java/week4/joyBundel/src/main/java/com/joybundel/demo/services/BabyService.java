package com.joybundel.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.joybundel.demo.models.Baby;
import com.joybundel.demo.repositories.BabyRepository;

@Service
public class BabyService {
	
	@Autowired
	BabyRepository babyRepo;
	
	public Baby create(Baby baby) {
		return babyRepo.save(baby);
	}
	
	public List<Baby> getAll(){
		return babyRepo.findAll();
	}
	
	public boolean getByName(String name) {
		return babyRepo.findByName(name).isEmpty() ? true : false;
	}
	
	public Baby uniqueCreate(Baby baby, BindingResult result) {
		if(!getByName(baby.getName())) {
			result.rejectValue("name","uniqueness","name already exists");
		}
		
		if(result.hasErrors()) {
			 return null;
		 }
		
		return babyRepo.save(baby);
	}
	
	public Baby getById(Long id) {
		return babyRepo.findById(id).isEmpty()? null : babyRepo.findById(id).get();
	}
	
	public Baby update(Baby baby) {
		return babyRepo.save(baby);
	}
	
	
	public void delete(long id) {
		babyRepo.deleteById(id);
	}
}
