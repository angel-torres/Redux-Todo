import { ADD_ITEM } from '../actions';

const intitialState = {
    todo: []
}

const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
        return {
            ...state, 
            todo: [...state.todo, action.payload.item]
        }
        default: 
        return state;
    }
}

export default reducer;
