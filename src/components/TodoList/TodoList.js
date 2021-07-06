import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../Todo/actions';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = ({todos = [], onRemovePressed}) => (
    <div className="todo-wrapper">
        {todos.map(todo => <TodoItem todo={todo} onRemovePressed={onRemovePressed}/>)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todosReducer
});
const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
