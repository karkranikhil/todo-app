import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';
import { RemoveTodo } from '../../redux/actions';

const TodoList = ({todos = [], onRemovePressed}) => (
    <div className="todo-wrapper">
        {todos.map(todo => <TodoItem todo={todo} onRemovePressed={onRemovePressed} key={todo.text}/>)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todosReducer
});
const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(RemoveTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
