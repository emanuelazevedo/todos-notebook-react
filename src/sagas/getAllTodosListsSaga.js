import { call, put, takeEvery } from 'redux-saga/effects'

import axios from 'axios'

const apiUrl = 'http://todos-notebook.test/api'

function getTodosListsAPI() {
    return axios.get(`${apiUrl}/list`)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.error(err)
        })
}

function* getTodosLists() {
    try {
        const todosLists = yield call(getTodosListsAPI);
        yield put({
            type: 'GET_TODOS_LISTS_SUCCESS',
            payload: todosLists
        })
    } catch(e) {
        yield put({
            type: 'GET_TODOS_LISTS_FAILED',
            message: e.message
        })
    }
}

function* getAllTodosListsSaga() {
    yield takeEvery('GET_TODOS_LIST_REQUESTED', getTodosLists);
}

export default getAllTodosListsSaga;