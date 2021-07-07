import { TodoApi } from '../api/todoApi'

//Create
export const CREATE_TODO = 'CREATE_TODO' 
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS' 
export const CREATE_TODO_ERROR = 'CREATE_TODO_ERROR' 

//Read
export const GET_TODOS = 'GET_TODOS' 
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS' 
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR' 

//Remove
export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS' 
export const REMOVE_TODO_ERROR = 'REMOVE_TODO_ERROR' 

// export const createTodo = text => ({
//     type: CREATE_TODO,
//     payload: { text },
// })

// export const removeTodo = text => ({
//     type: REMOVE_TODO,
//     payload: { text },
// })

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
