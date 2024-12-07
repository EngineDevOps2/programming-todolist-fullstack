import React from 'react';  

const TodoItem = ({ todo, editTodo, removeTodo }) => {  
    return (  
      // console.log("33333333",todo.text)
        <div>  
            <span>{todo.title}</span> {/* اطمینان از نمایش متن */}
            <button onClick={() => editTodo(todo.id, prompt("Enter new text:", todo.text))}>Edit</button>  
            <button onClick={() => removeTodo(todo.id)}>Remove</button>  
        </div>  
    );  
};  

export default TodoItem;