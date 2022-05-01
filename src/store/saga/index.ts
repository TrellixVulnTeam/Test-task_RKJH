import { all } from 'redux-saga/effects'
import { usersWatcher } from "../users";
import { todosWatcher } from "../todos";

export default function* rootSaga() {
    yield all([
        usersWatcher(),
        todosWatcher(),
    ])
}
