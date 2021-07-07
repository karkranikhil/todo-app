import React from 'react';
import { connect } from 'react-redux';
import './Todo.css';
import { createTodo } from './actions';

const Todo = ({todoList, onCreatePressed}) => {

    const [newText, setNewText] = React.useState("");
    
    return (
        <div className="new-todo">
            <input 
                type="text" 
                className="new-todo-input" 
                placeholder="Please enter your TODO description" 
                value={newText}
                onChange={e => setNewText(e.target.value)}/>
            <div className="button-container">
                <button 
                    onClick={()=> {
                        const isDuplicate = todoList.some(todo => todo.text === newText)
                        if (!isDuplicate){
                            onCreatePressed(newText);
                            setNewText('');
                        }
                    }}
                    className="add-button"> Create Todo 
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    todoList: state.todosReducer
});
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Todo);;