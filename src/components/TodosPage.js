import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {TodosList} from './TodosList'

export const TodosPage = () => {
    const todosLists = useSelector(state => state.todosData.todosData)
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch({
            type: 'GET_TODOS_LIST_REQUESTED'
        })
    }, [dispatch])

    const todos = todosLists.map((todos, index) =>
        <TodosList key={index} title={todos.title} todolist_id={todos.todolist_id} />
    )
    
    return (
        <div className="row">
            {todos}
        </div>
    )
}
