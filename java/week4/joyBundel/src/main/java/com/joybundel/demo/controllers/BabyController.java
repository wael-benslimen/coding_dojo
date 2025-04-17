package com.joybundel.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.joybundel.demo.models.Baby;
import com.joybundel.demo.models.User;
import com.joybundel.demo.services.BabyService;
import com.joybundel.demo.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class BabyController {
	
	@Autowired
	BabyService babyS;
	
	@Autowired
	UserService userS;
	
	@GetMapping("/home")
	public String viewHome(HttpSession session, Model model) {
		if(session.getAttribute("userId")==null) {
			return "redirect:/logout";
		}
		model.addAttribute("user",userS.getById((long)session.getAttribute("userId")));
		model.addAttribute("allNames", babyS.getAll());
		return "home";
	}
	
	@GetMapping("/baby/upvote/{id}")
	public String upvote(@PathVariable long id, HttpSession session) {
		if(session.getAttribute("userId")==null) {
			return "redirect:/logout";
		}
		User conUser = userS.getById((long)session.getAttribute("userId"));
		Baby name = babyS.getById(id);
		List<User> upvoters = name.getUpvotes();
		upvoters.add(conUser);
		name.setUpvotes(upvoters);
		babyS.update(name);
		
		return "redirect:/home";
		
	}
	
	@GetMapping("/names/new")
	public String viewCreate(@ModelAttribute Baby baby, HttpSession session ) {
		if(session.getAttribute("userId")==null) {
			return "redirect:/logout";
		}
		return "create";
	}
	
	
	
	@PostMapping("/names/create")
	public String handleCreate(@Valid @ModelAttribute Baby baby, BindingResult result, HttpSession session) {
		baby.setCreator(userS.getById((long)session.getAttribute("userId")));
		babyS.uniqueCreate(baby, result);
		if(result.hasErrors()) {
			return "create";
		}
		return "redirect:/home";
	}
	
	@GetMapping("/names/{id}")
	public String viewDetails(HttpSession session, Model model, @PathVariable long id) {
		if(session.getAttribute("userId")==null) {
			return "redirect:/logout";
		}
		model.addAttribute("name", babyS.getById(id));
		model.addAttribute("user", userS.getById((long)session.getAttribute("userId")));
		return "details";
	}
	
	@GetMapping("/names/{id}/edit")
	public String viewEdit(@ModelAttribute Baby baby, HttpSession session, Model model, @PathVariable long id) {
		if((long)session.getAttribute("userId") != babyS.getById(id).getCreator().getId() ) {
			return "redirect:/home";
		}
		model.addAttribute("baby",babyS.getById(id));
		return "edit";
	}
	
	@PostMapping("/names/{id}/edit")
	public String handleEdit(@Valid @ModelAttribute Baby baby, BindingResult result ,HttpSession session, Model model, @PathVariable long id ) {
		
		if(result.hasErrors()) {
			baby.setId(id);
			baby.setCreator(userS.getById((long)session.getAttribute("userId")));
			baby.setUpvotes(babyS.getById(id).getUpvotes());
			return "edit";
		}
		baby.setId(id);
		baby.setCreator(userS.getById((long)session.getAttribute("userId")));
		baby.setUpvotes(babyS.getById(id).getUpvotes());
		babyS.update(baby);
		return "redirect:/home";
	}
	
	@GetMapping("/names/delete/{id}")
	public String  handleDelete(@PathVariable long id) {
		Baby baby = babyS.getById(id);
		baby.setUpvotes(null);
		baby.setCreator(null);
		babyS.delete(id);
		return "redirect:/home";
	}
}
