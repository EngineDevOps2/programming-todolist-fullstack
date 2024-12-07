import React from 'react';  
import TodoItem from './TodoItem';  

const TodoList = ({ todos, editTodo, removeTodo }) => {  
    return (  
        <div>  
            {todos.map((todo) => (  
                <TodoItem key={todo.id} todo={todo} editTodo={editTodo} removeTodo={removeTodo} />  
            ))}  
        </div>  
    );  
};  

export default TodoList;
