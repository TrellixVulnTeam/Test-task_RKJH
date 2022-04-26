import { takeEvery, call, put }from 'redux-saga/effects';
import { ITodo, TodosActionTypes } from "./reducers/Todos/type";
import { fetchTodos } from "../API/fetchTodos";

function* todosWorker(){
    const todos:Promise<ITodo[]> = yield call (fetchTodos)
    yield put({ type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: todos })
}

export function* todosWatcher(){
    yield takeEvery(TodosActionTypes.FETCH_TODOS, todosWorker)
}
