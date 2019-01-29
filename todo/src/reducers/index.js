import { ADD_ITEM, TOGGLE_ITEM, DELETE_ITEMS } from '../actions';

const intitialState = {
    todoItems: []
}

const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
        return {
            ...state, 
            todoItems: [...state.todoItems, action.payload]
        }
        case TOGGLE_ITEM:
        return {
            ...state,
            todoItems: state.todoItems.map( (item, index) => 
                action.payload.index === index ? {...item, completed: !item.completed } : item
            )
        }
        case DELETE_ITEMS:
        return {
            ...state,
            todoItems: state.todoItems.filter( item => item.completed === false)
        }
        default: 
        return state;
    }
}

export default reducer;
