import { ITodosState,TodosAction, TodosActionTypes } from "./type";

const initialState: ITodosState = {
    todos: [],
    loading: false,
    error: null,
}

export const todosReducer = (state = initialState, action: TodosAction): ITodosState => {
    switch (action.type){
        case TodosActionTypes.FETCH_TODOS:
            return { ...state, loading: true, todos: [] }
        case TodosActionTypes.FETCH_TODOS_SUCCESS:
            return { ...state, loading: false, error: null, todos: action.payload }
        case TodosActionTypes.FETCH_TODOS_ERROR:
            return { ...state, loading: false, error: action.payload, todos: [] }
    }
}
