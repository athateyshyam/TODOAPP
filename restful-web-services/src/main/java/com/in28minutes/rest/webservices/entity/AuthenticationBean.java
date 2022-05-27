package com.in28minutes.rest.webservices.entity;

public class AuthenticationBean {
	String message;

	public AuthenticationBean() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AuthenticationBean(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}

}
