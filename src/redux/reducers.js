import { combineReducers } from 'redux'
import { ADD_TODO, DELETE_TODO, TOGGLE_TASK, EDIT_TASK } from './actions'

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
        case EDIT_TASK:
            return state.map(item =>
                item.id === action.payload.id && action.payload.newName !== ''
                    ? { ...item, name: action.payload.newName, date: action.payload.formatDateEdit }
                    : item
            )
        default:
            return state
    }
}

const rootReducer = combineReducers({
    todoReducer
})

export default rootReducer