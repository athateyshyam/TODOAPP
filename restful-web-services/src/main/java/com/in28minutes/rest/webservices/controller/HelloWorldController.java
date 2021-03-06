package com.in28minutes.rest.webservices.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.rest.webservices.entity.HelloWorldBean;
@CrossOrigin(origins = "http://localhost:8081")
@RestController
public class HelloWorldController {
	@GetMapping(path="/hello-world")
	public String helloWorld() {
		return "HelloWorld";
	}

	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		// throw new RuntimeException("Exception Occured");
		return new HelloWorldBean("Welcome to planet Mars");
	}
	@GetMapping(path="/hello-world-bean/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		 return new HelloWorldBean(String.format("Hello World, %s",name));
	 }
}
