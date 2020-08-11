export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TASK = 'TOGGLE_TASK'

export function addTodoAction(payload) {
    return { type: ADD_TODO, payload }
}

export function deleteTodoAction(payload) {
    return { type: DELETE_TODO, payload }
}

export function toggleTaskAction(payload) {
    return { type: TOGGLE_TASK, payload }
}