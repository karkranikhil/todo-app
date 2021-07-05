import React from 'react';
import './TodoItem.css';

const TodoItem = ({todo}) => (
    <div className="todo-item">
        <p>{todo.text}</p>
        <div className="button-container">
            <button className="mark-completed-button"> Mark as Completed </button>
            <button className="remove-button"> Delete </button>
        </div>
    </div>
)

export default TodoItem;