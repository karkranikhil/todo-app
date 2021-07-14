import { TodoApi } from '../api/todoApi'

//Create
export const CREATE_TODO = 'CREATE_TODO' 
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS' 
export const CREATE_TODO_ERROR = 'CREATE_TODO_ERROR' 

//Read
export const GET_TODOS = 'GET_TODOS' 
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS' 
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR' 

//Update
export const UPDATE_TODO = 'UPDATE_TODO' 
export const UPDATE_TODO_SUCCESS = 'UPDATE_ODO_SUCCESS' 
export const UPDATE_TODO_ERROR = 'UPDATE_TODO_ERROR' 

//Remove
export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS' 
export const REMOVE_TODO_ERROR = 'REMOVE_TODO_ERROR' 


//Create
//The dispatch and getstate function is provided by the Redux-Thunk middleware, we can dispatch actions with it.
export function CreateTodo(todo){
    return (dispatch, getState) => {
        return TodoApi.createTodo(todo).then(res => {
            dispatch(CreateTodoSuccess(res.data))
        })
    }
}

export function CreateTodoSuccess(todo){
    return {
        type:CREATE_TODO_SUCCESS,
        todo
    }
}

//Read
export function GetTodos(){
    return (dispatch, getState) => {
        return TodoApi.getTodos().then(res => {
            dispatch(GetTodoSuccess(res.data))
        })
    }
}

export function GetTodoSuccess(todos){
    return {
        type:GET_TODOS_SUCCESS,
        todos
    }
}

//Remove
export function RemoveTodo(todo) {
    return (dispatch, getState) => {
        TodoApi.removeTodo(todo).then(res => {
            dispatch(RemoveTodoSuccess(todo))
        })
    }
}
export function RemoveTodoSuccess(todo) {
    return {
        type: REMOVE_TODO_SUCCESS,
        todo,
        _id: todo._id
    }
}

//update
export function UpdateTodo(todo){
    return (dispatch) => {
        return TodoApi.updateTodo(todo).then(res => {
            dispatch(UpdateTodoSuccess(res.data))
        })
    }
}

export function UpdateTodoSuccess(todo){
    return {
        type:UPDATE_TODO_SUCCESS,
        todo
    }
}