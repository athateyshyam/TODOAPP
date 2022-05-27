package com.in28minutes.rest.webservices.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.in28minutes.rest.webservices.entity.Todo;

@Service
public class TodoHardcodedService {
	private static List<Todo> listTodos = new ArrayList<Todo>();

	private static int idCounter = 0;

	static {
		listTodos.add(new Todo(++idCounter, "Learn Java Programming", "in28minutes", new Date(), false));
		listTodos.add(new Todo(++idCounter, "Learn C++ Programming", "in28minutes", new Date(), false));
		listTodos.add(new Todo(++idCounter, "Learn JSP Programming", "in28minutes", new Date(), true));
		listTodos.add(new Todo(++idCounter, "Learn Angular Programming", "in28minutes", new Date(), false));
	}

	public List<Todo> findAll() {
		return listTodos;
	}

	public Todo save(Todo todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			listTodos.add(todo);
		}else {
			deleteById(todo.getId());
			listTodos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if (todo == null)
			return null;
		if (listTodos.remove(todo)) {
			return todo;
		}
		return null;
	}

	public Todo findById(long id) {
		for (Todo todo : listTodos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
}
