import { ADD_ITEM, TOGGLE_ITEM } from '../actions';

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
        console.log(state)
        return {
            ...state,
            todoItems: state.todoItems.map( (item, index) => 
                action.payload.index === index ? {...item, completed: !item.completed } : item
            )
        }
        default: 
        return state;
    }
}

export default reducer;


// function reducer(state = initialState, action) {
//     console.log('reducer', action);
//     switch (action.type) {
//       case UPDATE_TITLE:
//         console.log('update_title', action);
//         return {
//           ...state,
//           title: action.payload
//         };
//       case ADD_FRIEND:
//         console.log('add_friend', action);
//         const newFriend = {
//           name: action.payload,
//           besties: false
//         };
//         return {
//           ...state,
//           friends: [...state.friends, newFriend]
//         };
//       case TOGGLE_FRIEND:
//         return {
//           ...state,
//           friends: state.friends.map((friend, index) =>
//             action.payload === index
//               ? { ...friend, besties: !friend.besties }
//               : friend
//           )
//         };
//       default:
//         return state;
//     }
//   }
  