import { combineReducers } from 'redux'
import todosData from './todosListsReducer'


const rootReducer = combineReducers({
    todosData,
});

export default rootReducer;