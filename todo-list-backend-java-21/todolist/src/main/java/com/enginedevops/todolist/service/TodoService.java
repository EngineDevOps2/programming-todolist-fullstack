package com.enginedevops.todolist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enginedevops.todolist.model.Todo;
import com.enginedevops.todolist.repository.TodoRepository;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Todo createTodo(Todo todo) {  
        if (todo.getTitle() == null || todo.getTitle().isEmpty()) {  
            throw new IllegalArgumentException("Title cannot be null or empty");  
        }  
        return todoRepository.save(todo);  
    }  

    public Todo updateTodo(Long id, Todo todoDetails) {  
        Todo todo = todoRepository.findById(id);
        if (todo == null) {
            throw new RuntimeException("Todo not found with id: " + id);
        }
        if (todoDetails.getTitle() == null || todoDetails.getTitle().isEmpty()) {  
            throw new IllegalArgumentException("Title cannot be null or empty");  
        }

 todo.setTitle(todoDetails.getTitle());  
        todo.setCompleted(todoDetails.isCompleted());  
        return todoRepository.save(todo);  
    } 
    
    public void deleteTodo(Long id) {  
        if (todoRepository.findById(id) == null) {  
            throw new RuntimeException("Todo not found with id: " + id);  
        }  
        todoRepository.delete(id);  
    }  
}
