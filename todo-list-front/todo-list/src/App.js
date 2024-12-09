import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import TodoList from './components/TodoList';  
import AddTodo from './components/AddTodo';  
import Header from './components/Header';
import styled from 'styled-components';  

const Container = styled.div`  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  justify-content: flex-start; /* چیدمان روشن در سمت بالای صفحه */  
  height: 100vh;  
  background-color: #f5f5f5;  
  padding-top: 80px; /* padding برای جلوگیری از پوشاندن محتوا به وسیله هدر */  
`;  

const App = () => {  
  const [todos, setTodos] = useState([]);  

  useEffect(() => {  
    fetchTodos();  
  }, []);  

  const fetchTodos = async () => {  
    try {  
      const response = await axios.get('http://34.42.107.218:32700/api/todos');
       
      console.log(response.data);  
      setTodos(response.data);  
    } catch (error) {  
      console.error('Error fetching todos:', error);  
    }  
  };  

  const addTodo = async (todoText) => {  
    try {  
      console.log("777777777777777",todoText)
      const response = await axios.post('http://34.42.107.218:32700/api/todos', { title: todoText }, {  
    headers: {  
        'Content-Type': 'application/json'  
    },
   body: JSON.stringify({ title: todoText }), // اطمینان حاصل کنید که اینجا درست است
           
  });
      console.log("55555555555",response,todoText,todos) 
      setTodos((todos) => [...todos, response.data]);
      console.log("6666666",todos,response.data) ; 
    } catch (error) {  
      console.error('Error adding todo:', error);  
    }  
  };  

  const editTodo = async (id, newText) => {  
        try {  
      const response = await axios.put(`http://34.42.107.218:32700/api/todos/${id}`, { title: newText });  
      setTodos(todos.map(todo => (todo.id === id ? response.data : todo))); 
      console.log("Edited ..... item .....",newText) 
    } catch (error) {  
      console.error('Error editing todo:', error);  
    }  
  };  

  const removeTodo = async (id) => {  
        try {  
      await axios.delete(`http://34.42.107.218:32700/api/todos/${id}`);  
      setTodos(todos.filter(todo => todo.id !== id));  
      console.log("remove Item ....",id)
    } catch (error) {  
      console.error('Error removing todo:', error);  
    } 
  };  

  return (  
    <Container> 
      <Header />  
      <h1>To-Do List</h1>  
      <AddTodo addTodo={addTodo} />  
      <TodoList todos={todos} editTodo={editTodo} removeTodo={removeTodo} />  
    </Container>  
  );  
};  

export default App;
