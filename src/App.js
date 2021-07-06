import { hot } from 'react-hot-loader';
import React from 'react';
import "./App.css";
import TodoList from './components/TodoList/TodoList'
import Todo from './components/Todo/Todo';

const App = () => (
    <div className="App"> 
        <h1>TODO Application </h1>
        <Todo />
        <TodoList />
    </div>
);

export default hot(module)(App);
