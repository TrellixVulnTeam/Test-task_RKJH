export interface ITodo{
    id: number;
    title: string;
}

export interface ITodosState {
    todos: ITodo[],
    loading: boolean;
    error: string | null;
}

export enum TodosActionTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
}

interface FetchTodos {
    type: TodosActionTypes.FETCH_TODOS,
}

interface FetchTodosSuccess {
    type: TodosActionTypes.FETCH_TODOS_SUCCESS,
    payload: ITodo[]
}

interface FetchTodosError {
    type: TodosActionTypes.FETCH_TODOS_ERROR,
    payload: string;
}

export type TodosAction = FetchTodos | FetchTodosSuccess | FetchTodosError;
