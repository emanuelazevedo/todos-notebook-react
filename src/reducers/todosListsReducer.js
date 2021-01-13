const initialState = {
    todosData: []
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        /* GET ALL TODOS LISTS */
        case 'GET_TODOS_LIST_REQUESTED':
            console.log(state)
            return state
        
        case 'GET_TODOS_LISTS_SUCCESS':
            return {
                ...state,
                todosData: action.payload
            }
        case 'GET_TODOS_LISTS_FAILED':
            console.error(action.message)

        /* NEW TODO LIST */     
        case 'NEW_TODOS_LIST_REQUEST':
            console.log('hello', action.payload)
            return state;
        
        case 'ADD_TODOS_LIST':
            return {
                ...state,
                todosData: [...state.todosData, action.payload]
            }
        case 'ADD_TODOS_LIST_FAILED':
                console.error(action.message)
        
        /* DELETE TODO LIST */
        case 'DELETE_TODOS_LIST_REQUEST':
            console.log('delete reducer', action.playload);
            return state;

        case 'DELETE_TODOS_LIST':
            console.log('need to remove from state here')
        
        case 'DELETE_TODOS_LISTS_FAILED':
            console.error(action.message)

        default:
            return state;
    }

}
export default rootReducer