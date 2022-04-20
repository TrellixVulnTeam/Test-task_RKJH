import { takeEvery, call, put }from 'redux-saga/effects';
import { fetchUsers } from "../API/Users";
import { IUser, UsersActionTypes } from "./reducers/Users/type";

function* usersWorker(){
    const users:Promise<IUser[]> = yield call (fetchUsers)
    yield put({ type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: users })
}

export function* usersWatcher(){
    yield takeEvery(UsersActionTypes.FETCH_USERS, usersWorker)
}
