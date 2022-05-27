package com.in28minutes.rest.webservices.entity;

public class HelloWorldBean {
	String message;

	public HelloWorldBean() {
		super();
		// TODO Auto-generated constructor stub
	}

	public HelloWorldBean(String message) {
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
