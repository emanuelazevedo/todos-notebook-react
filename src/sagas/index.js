import { all } from 'redux-saga/effects'
import getAllTodosListsSaga from './getAllTodosListsSaga'
import postNewTodosListSaga from './postTodosListsSaga'
import deleteTodosListSaga from './deleteTodosListSaga'

export default function* rootSaga() {
    yield all([
        getAllTodosListsSaga(),
        postNewTodosListSaga(),
        deleteTodosListSaga()
    ])
}