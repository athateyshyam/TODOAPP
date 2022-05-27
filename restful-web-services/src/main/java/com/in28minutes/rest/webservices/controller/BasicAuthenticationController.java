package com.in28minutes.rest.webservices.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.rest.webservices.entity.AuthenticationBean;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
public class BasicAuthenticationController {
	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorldBean() {
		// throw new RuntimeException("Exception Occured");
		return new AuthenticationBean("You are authenticated user.");
	}
}
