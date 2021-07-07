import {HttpClient} from './httpClient' 

// This is the API. The backend root URL can be set from here.

const API = 'http://localhost:5000'

//Setting the todos URI

const TODO_API = `${API}/todos`

// The CRUD Operations of the Todo Resource.


//Create
const createTodo = todo => {
    return HttpClient.post(TODO_API, todo)
}

//Read
const getTodos = () => {
    return HttpClient.get(TODO_API)
}

//Update
const updateTodo = todo => {
    return HttpClient.put(`${API}/todo/${todo.id}`, todo)
}

//Delete
const removeTodo = todo => {
    return HttpClient.delete(`${API}/todo/${todo._id}`)
}


//Encapsulating in a JSON object

const TodoApi = {createTodo, getTodos, updateTodo, removeTodo}

export {TodoApi}