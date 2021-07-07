import {createStore, combineReducers} from 'redux';
import {todosReducer} from './components/Todo/reducers';

const reducers = {
    todosReducer,
};

const rootReducer = combineReducers(reducers);

export const configureStore= () => createStore(rootReducer);
