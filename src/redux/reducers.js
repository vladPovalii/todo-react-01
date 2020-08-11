import { combineReducers } from 'redux'
import { ADD_TODO, DELETE_TODO, TOGGLE_TASK } from './actions'

function todoReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case DELETE_TODO:
            return state.filter(item => item.id !== action.payload)
        case TOGGLE_TASK:
            return state.map(item =>
                item.id === action.payload ? { ...item, completed: !item.completed } : item
            )
        default:
            return state
    }
}

const rootReducer = combineReducers({
    todoReducer
})

export default rootReducer