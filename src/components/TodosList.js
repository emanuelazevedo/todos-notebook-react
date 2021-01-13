import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import '../styles/TodosBox.css'

export const TodosList = ({title, todolist_id}) => {

    const [boxStyle, setBoxStyle] = useState(null);

    const dispatch = useDispatch();


    const changeStyleOnHover = () => {
        setBoxStyle(hoverStyle);
    }

    const resetStyle = () => {
        setBoxStyle(null);
    }

    const deleteTodosList = id => {
        dispatch({
            type: 'DELETE_TODOS_LIST_REQUEST',
            payload: id
        })
    }
    
    return (
        <div className="col-md-2 mx-3 my-4 todos-box align-self-center"
            onMouseEnter = {changeStyleOnHover}
            onMouseLeave = {resetStyle}
            style={boxStyle}
        >
            <div className="text-center ">
                {title}
            </div>
            { boxStyle != null ? <div className="mt-5 todos-box-button align-self-center" align="center">
                <button 
                    className="btn btn-light"
                    onClick={() => deleteTodosList(todolist_id)}
                >
                    Delete this list
                </button>

            </div> : null}
        </div>
    )
}

const hoverStyle = {
    opacity: 0.5,
}
