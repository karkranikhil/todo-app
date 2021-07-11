import {HttpClient} from './httpClient';

// This is the API. The backend root URL can be set from here.
console.log(process.env.REACT_APP_PROD_URL);
const  port = process.env.PORT || 5000;
const API = process.env.REACT_APP_PROD_URL || 'https://todo-app-v9tsq.ondigitalocean.app' || `http://localhost:${port}`

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
    return HttpClient.put(`${API}/todo/${todo._id}`, todo)
}

//Delete
const removeTodo = todo => {
    return HttpClient.delete(`${API}/todo/${todo._id}`)
}


//Encapsulating in a JSON object

const TodoApi = {createTodo, getTodos, updateTodo, removeTodo}

export {TodoApi}