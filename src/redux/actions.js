export const ADD_TODO = 'ADD_TODO'

export function addTodoAction(payload) {
    return { type: ADD_TODO, payload }
}