import { combineReducers } from 'redux'
import { ADD_TODO } from './actions'

function todoReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        default:
            return state
    }
}

const rootReducer = combineReducers({
    todoReducer
})

export default rootReducer