import React, { useState } from 'react'
import '../styles/Navbar.css'

import { useDispatch } from 'react-redux'

export const Navbar = () => {
    const [newTodoList, setNewTodoList] = useState('');
    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'NEW_TODOS_LIST_REQUEST',
            payload: newTodoList 
        });
        setNewTodoList('')
    }

    return (
        <nav className="navbar justify-content-between" >
            <span style={logoColor} className="my-2 mx-4">LOGO</span>
            <form className="form-inline my-2 mx-4 my-lg-0" onSubmit={onSubmit}>
                <input className="form-control mr-sm-2" type="search"placeholder="Search" aria-label="Search" 
                value={newTodoList} 
                onChange={ (e)=> setNewTodoList(e.target.value)} 
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add new list</button>
            </form>
        </nav>
    )
}
const logoColor = {
    color: 'white'
}