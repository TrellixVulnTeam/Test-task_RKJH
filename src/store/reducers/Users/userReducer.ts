import { IUsersState, UsersAction, UsersActionTypes } from "./type";

const initialState: IUsersState = {
    users: [],
    loading: false,
    error: null,
}

export const userReducer = (state = initialState, action: UsersAction): IUsersState => {
    switch (action.type){
        case UsersActionTypes.FETCH_USERS:
            return { ...state, loading: true, users: [] }
        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return { ...state, loading: false, error: null, users: action.payload }
        case UsersActionTypes.FETCH_USERS_ERROR:
            return { ...state, loading: false, error: action.payload, users: [] }
    }
}
