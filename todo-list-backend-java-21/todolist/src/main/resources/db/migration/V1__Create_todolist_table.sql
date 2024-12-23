-- V1__Create_todolist_table.sql 
CREATE TABLE todolist (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);