import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import './TodoItem.css';

import { UpdateTodo } from '../../redux/actions';
const TodoItem = ({todo, onRemovePressed}) => {
    const dispatch = useDispatch()
    const [isEdit, setIsEdit] = useState(null)
    const [updatedText, setUpdatedText]= useState(todo?.text)
    const editUpdateHandler = () =>{
        if(isEdit){
            dispatch(UpdateTodo({...todo, "text":updatedText}))
        } else {
            setIsEdit(true)
        }
    }
    return (
    <div className="todo-item">
        {isEdit ? <input 
                type="text" 
                className="new-todo-input new-todo-inputedit" 
                placeholder="Task title" 
                value={updatedText}
                onChange={e => setUpdatedText(e.target.value)}/> :<p>{todo.text}</p>}
        <div className="button-container">
            {/* <button className="mark-completed-button"> Mark as Completed </button> */}
            <p>{new Date(todo.createdOn).toLocaleDateString()}</p>
            <button className="button update-button" onClick={() => editUpdateHandler()}> {isEdit ? "update" : "Edit"} </button>
            <button className="button remove-button" onClick={() => onRemovePressed(todo)}> Delete </button>
        </div>
    </div>
)}

export default TodoItem;