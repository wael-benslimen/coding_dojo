package com.cars.demo.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.cars.demo.models.Car;

import jakarta.servlet.http.HttpSession;

@Controller
public class CarsController {
	
	ArrayList<Car> allCars =new ArrayList<>();
	
	@GetMapping("/")
	public String index() {
		return "carForm";
	}
	
	@PostMapping("/processCar")
	public String handleSubmit(@RequestParam String maker, @RequestParam String model, @RequestParam int year, @RequestParam String color, HttpSession session, RedirectAttributes redirectatt) {
		Car car = new Car(maker, model, year, color);
		System.out.println("******************");
		System.out.println(car.toString());
		if(year<2022) {
			redirectatt.addFlashAttribute("yearError","year needs to be less than 2022");
			return "redirect:/";
		}
		session.setAttribute("car", car);
		session.setAttribute("carMaker", maker);
		session.setAttribute("carModel", model);
		session.setAttribute("carYear", year);
		session.setAttribute("carColor", color);
		redirectatt.addFlashAttribute("success"," car created succesfuly");
		return "redirect:/result";
	}
	
	@GetMapping("/result")
	public String showOne() {
		return "show";
	}
}
