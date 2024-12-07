import React, { useState } from 'react';  
import styled from 'styled-components';  

const StyledButton = styled.button`  
  background-color: #0000FF;  
  color: white;  
  border: none;  
  padding: 10px 20px;  
  cursor: pointer;  

  &:hover {  
    background-color: #45a049;  
  }  
`;  
// const TodoListContainer = styled.div`  
//   width: 100%;  
//   max-width: 600px;  
//   margin-top: 20px;  
// `;  

// const TodoItemStyled = styled.div`  
//   background-color: white;  
//   border-radius: 5px;  
//   box-shadow: 0 2px 5px rgba(0,0,0,0.1);  
//   display: flex;  
//   justify-content: space-between;  
//   align-items: center;  
//   padding: 10px;  
//   margin: 5px 0;  

//   &:hover {  
//     box-shadow: 0 4px 10px rgba(0,0,0,0.2);  
//   }  
// `;  

// const StyledButton = styled.button`  
//   background-color: #0079d3;  // رنگ اصلی برای عمل‌ها  
//   color: white;  
//   border: none;  
//   padding: 5px 10px;  
//   border-radius: 3px;  
//   cursor: pointer;  

//   &:hover {  
//     background-color: #005f98; // رنگ تیره‌تر برای hover  
//   }  
// `;  
const AddTodo = ({ addTodo }) => {  
  const [inputValue, setInputValue] = useState('');  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    if (inputValue) {  
      console.log("Adding todo:", inputValue); // لاگ برای بررسی مقدار  
//      console.log(addTodo(inputValue));   
      addTodo(inputValue);
      setInputValue('');  
    } else {  
      console.log("Input is empty."); // لاگ در صورت خالی بودن ورودی  
    }  
  };  

  return (  
    <form onSubmit={handleSubmit}>  
      <input  
        value={inputValue}  
        onChange={(e) => setInputValue(e.target.value)}  
        placeholder="Enter a new todo"  
      />  
      <StyledButton type="submit">Add Todo</StyledButton>  
    </form>  
  );  
};   

export default AddTodo;
