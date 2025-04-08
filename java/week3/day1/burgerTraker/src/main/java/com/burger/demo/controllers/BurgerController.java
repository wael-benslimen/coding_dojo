package com.burger.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.burger.demo.models.Burger;
import com.burger.demo.services.BurgerService;

import jakarta.validation.Valid;


@Controller
public class BurgerController {
	
	@Autowired
	BurgerService bService;
	
	@GetMapping("/")
	public String index(@ModelAttribute Burger burgrer, Model model) {
		model.addAttribute("allBurgers",bService.getAll());
		return "index";
	}
	
	@PostMapping("/burger/new")	
	public String treatCreat(@Valid @ModelAttribute Burger burger, BindingResult result) {
		if(result.hasErrors()) {
			return "index";
		}
		bService.create(burger);
		return "redirect:/";
	}
}
