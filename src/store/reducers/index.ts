import { combineReducers } from "redux";
import { userReducer } from "./Users/userReducer";
import { todosReducer } from "./Todos/todosReducer";

export const rootReducers = combineReducers({
    users: userReducer,
    todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducers>

