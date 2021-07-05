import React from 'react';
import './Todo.css';

const Todo = () => {

    const [newTodo, setNewTodo] = React.useState("");
    
    return (
        <div className="new-todo">
            <input 
                type="text" 
                className="new-todo-input" 
                placeholder="Please enter your TODO description" 
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}/>
            <div className="button-container">
                <button className="add-button"> Create Todo </button>
            </div>
        </div>
    );
}

export default Todo;