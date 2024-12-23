package com.enginedevops.todolist.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="TODOLIST")

public class Todo {  
    @Id  
    @GeneratedValue(strategy = GenerationType.IDENTITY)  
    private Integer id;  

    private String title;  
    private boolean completed;  

     private String status; // New field added for status  

    // Getters and Setters  

    public Integer getId() {  
        return id;  
    }  

    public void setId(Integer id) {  
        this.id = id;  
    }  

    public String getTitle() {  
        return title;  
    }  

    public void setTitle(String title) {  
        this.title = title;  
    }  

    public boolean isCompleted() {  
        return completed;  
    }  

    public void setCompleted(boolean completed) {  
        this.completed = completed;  
    }  

    public String getStatus() {  
        return status;  
    }  

    public void setStatus(String status) {  
        this.status = status;  
    }  
}