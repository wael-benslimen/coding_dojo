package com.fanpages.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.fanpages.demo.models.Celebrity;
import com.fanpages.demo.services.CelebrityService;
import com.fanpages.demo.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class CelebrityController {
	
	@Autowired
	CelebrityService celebrityS;
	
	@Autowired
	UserService userS;
	
	@GetMapping("/home")
	public String home(Model model, HttpSession session ) {
		if(session.getAttribute("userId")==null) {
			return "redirect:/logout";
		}
		model.addAttribute("user", userS.getById((long)session.getAttribute("userId")));
		model.addAttribute("allCelebs", celebrityS.getAll());
		return "home";
	}
	
	@GetMapping("/celebrities/search")
	public String searchHome(@RequestParam String quary, HttpSession session, Model model) {
		if(session.getAttribute("userId")==null) {
			return "redirect:/logout";
		}
		model.addAttribute("user", userS.getById((long)session.getAttribute("userId")));
		model.addAttribute("allCelebs", celebrityS.search(quary));
		return "home";
	}
	
	@GetMapping("/celebrities/new")
	public String viewCreate(@ModelAttribute Celebrity celebrity, HttpSession session) {
		if(session.getAttribute("userId")==null) {
			return "redirect:/logout";
		}
		return "create";
	}
	
	@PostMapping("/celebrities/new")
	public String handleCreate(@Valid @ModelAttribute Celebrity celebrity, BindingResult result, HttpSession session) {
		if(result.hasErrors()) {
			return "create";
		}
		celebrity.setCreator(userS.getById((long)session.getAttribute("userId")));
		celebrityS.create(celebrity);
		return "redirect:/home";
	}
	
	@GetMapping("/celebrities/{id}")
	public String viewDetails(Model model, HttpSession session, @PathVariable long id) {
		if(session.getAttribute("userId")==null) {
			return "redirect:/logout";
		}
		model.addAttribute("user",userS.getById((long)session.getAttribute("userId")));
		model.addAttribute("celeb", celebrityS.findById(id));
		return "details";
	}
	
	@GetMapping("/celebrities/follow/{id}")
	public String followCelebrity(HttpSession session, @PathVariable long id) {
		celebrityS.follow(id, (long)session.getAttribute("userId"));
		return "redirect:/home";
	}
	
	@GetMapping("/celebrities/{id}/edit")
	public String viewEdit(@ModelAttribute Celebrity celebrity, HttpSession session, Model model, @PathVariable long id) {
		if((long)session.getAttribute("userId") != (long)celebrityS.findById(id).getCreator().getId()) {
			return "redirect:/logout";
		}
		model.addAttribute("celebrity", celebrityS.findById(id));
		return "edit";
	}
	
	@PostMapping("/celebrities/{id}/edit")
	public String handleEdit(@Valid @ModelAttribute Celebrity celebrity, BindingResult result ,HttpSession session, Model model, @PathVariable long id) {
		if(result.hasErrors()) {
			celebrity.setId(id);
			celebrity.setCreator(userS.getById((long)session.getAttribute("userId")));
			celebrity.setFollowers(celebrityS.findById(id).getFollowers());
			return "edit";
		}
		celebrityS.edit(celebrity, userS.getById((long)session.getAttribute("userId")), id);
		return "redirect:/home";
	}
	
	@GetMapping("/celebrities/delete/{id}")
	public String delete(@PathVariable long id, HttpSession session ) {
		if((long)session.getAttribute("userId") != (long)celebrityS.findById(id).getCreator().getId()) {
			return "redirect:/logout";
		}
		celebrityS.delete(id);
		return "redirect:/home";
	}
}
