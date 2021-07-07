import * as TodoActions from "./actions";

export const todosReducer = (state = [], action) => {
    
    const { type, payload } = action;

    switch(type) {
        // case TodoActions.CREATE_TODO_SUCCESS : {
        //     const { text } = payload;
        //     const newTodo = {
        //         text,
        //         isCompleted: false,
        //     };
        //     return state.concat(newTodo);
        // }
        // case TodoActions.REMOVE_TODO_SUCCESS : {
        //     const { text } = payload;
        //     return state.filter(todo => todo.text !== text);
        // }

        // Create
        case TodoActions.CREATE_TODO_SUCCESS: {
            return [
                ...state,
                action.todo
            ];
        }   

        //Read    
        case TodoActions.GET_TODOS_SUCCESS: {
            return action.todos || [];
        }
        //Remove    
        case TodoActions.REMOVE_TODO: {

            return state.map(s => todo(s, action))

        }
        case TodoActions.REMOVE_TODO_SUCCESS: {

            return state.filter(s => todo(s, action))

        }
        default:
            return state;
    }
}