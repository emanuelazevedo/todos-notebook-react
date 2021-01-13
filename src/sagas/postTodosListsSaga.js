import { call, put, takeEvery } from 'redux-saga/effects'

import axios from 'axios'

const apiUrl = 'http://todos-notebook.test/api'

function postTodosListsAPI(newTodoList) {
    return axios.post(`${apiUrl}/list`,
        {
            title: newTodoList
        })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.error(err)
        })
}

function* postTodosLists(newTodoList) {
    const postData = newTodoList.payload
    try {
        const newTodosList = yield call(postTodosListsAPI, postData);
        yield put({
            type: 'ADD_TODOS_LIST',
            payload: newTodosList
        })
    } catch(e) {
        yield put({
            type: 'ADD_TODOS_LIST_FAILED',
            message: e.message
        })
    }
}

function* postNewTodosListSaga() {
    console.log('1');
    yield takeEvery('NEW_TODOS_LIST_REQUEST', postTodosLists)
}

export default postNewTodosListSaga