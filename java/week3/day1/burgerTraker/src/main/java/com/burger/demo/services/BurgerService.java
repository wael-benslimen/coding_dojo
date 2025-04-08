package com.burger.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.burger.demo.models.Burger;
import com.burger.demo.repositories.BurgerRepository;

@Service
public class BurgerService {

	@Autowired
	BurgerRepository burgerRepo;
	
	public Burger create(Burger b) {
		return burgerRepo.save(b);
	}
	
	public List<Burger> getAll() {
		return burgerRepo.findAll();	}
}
