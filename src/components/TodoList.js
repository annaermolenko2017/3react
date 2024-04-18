import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleToggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;
        const newTodo = { text: inputValue, completed: false };
        setTodos([...todos, newTodo]);
        setInputValue('');
    };

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        onClick={() => handleToggleTodo(index)}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter your todo"
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default TodoList;