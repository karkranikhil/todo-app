import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from "./store";
import * as TodoActions from './redux/actions'

const store = configureStore()
store.dispatch(TodoActions.GetTodos())

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'),
);
