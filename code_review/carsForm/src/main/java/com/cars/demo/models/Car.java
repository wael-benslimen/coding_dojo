package com.cars.demo.models;

public class Car {
	public String maker;
	public String model;
	public int year;
	public String color;
	public Car(String maker, String model, int year, String color) {
		this.maker = maker;
		this.model = model;
		this.year = year;
		this.color = color;
	}
	public String getMaker() {
		return maker;
	}
	public void setMaker(String maker) {
		this.maker = maker;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	@Override
	public String toString() {
		return "Car [maker=" + maker + ", model=" + model + ", year=" + year + ", color=" + color + "]";
	}
	
	
}
