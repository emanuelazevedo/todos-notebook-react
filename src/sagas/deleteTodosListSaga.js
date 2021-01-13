import { call, put, takeEvery } from 'redux-saga/effects'

import axios from 'axios'

const apiUrl = 'http://todos-notebook.test/api'

function deleteTodosListAPI(todos_list_id) {
    console.log('id', todos_list_id);
    return axios.delete(`${apiUrl}/list/${todos_list_id}`)
        .then(res => {
            console.log('delete axios',res)
        })
        .catch(err => {
            console.error(err)
        })
}

function* deleteTodosList(todos_list_id) {
    const id = todos_list_id.payload;
    try {
        const deleteTodoList = yield call(deleteTodosListAPI, id)
        yield put({
            type: 'DELETE_TODOS_LIST',
        })
    } catch(e) {
        yield put({
            type: 'DELETE_TODOS_LISTS_FAILED',
            message: e.message
        })
    }
}

function* deleteTodosListSaga() {
    yield takeEvery('DELETE_TODOS_LIST_REQUEST', deleteTodosList)
}

export default deleteTodosListSaga