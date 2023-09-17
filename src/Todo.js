import React, { useState } from 'react';

const Todo = () => {

    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addTodo = () => {
        setTodoList([...todoList, todo]);
        setTodo('');
    }

    const deleteTodo = (index) => {
        const newTodoList = todoList.filter((todo, i) => i !== index);
        setTodoList(newTodoList);
    }

    return (
        <div className="todo">
            <h1>Todo List</h1>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todoList.map((todo, index) => (
                    <li key={index}>{todo} <button onClick={() => deleteTodo(index)}>Delete</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;