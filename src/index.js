import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from "./store";

ReactDom.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>, 
    document.getElementById('root'),
);
