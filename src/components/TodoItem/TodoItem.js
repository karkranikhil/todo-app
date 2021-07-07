import React from 'react';
import './TodoItem.css';

const TodoItem = ({todo, onRemovePressed}) => (
    <div className="todo-item">
        <p>{todo.text}</p>
        <div className="button-container">
            <button className="mark-completed-button"> Mark as Completed </button>
            <button className="remove-button" onClick={() => onRemovePressed(todo.text)}> Delete </button>
        </div>
    </div>
)

export default TodoItem;