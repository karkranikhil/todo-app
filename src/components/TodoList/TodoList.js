import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = ({todos}) => (
    <div className="todo-wrapper">
        {todos.map(todo => <TodoItem todo={todo} />)}
    </div>
)

export default TodoList;
