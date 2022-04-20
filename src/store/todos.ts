import { takeEvery, call, put }from 'redux-saga/effects';
import { fetchUsers } from "../API/Users";
import { ITodo, TodosActionTypes } from "./reducers/Todos/type";

function* todosWorker(){
    const todos:Promise<ITodo[]> = yield call (fetchUsers)
    yield put({ type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: todos })
}

export function* todosWatcher(){
    yield takeEvery(TodosActionTypes.FETCH_TODOS, todosWorker)
}
