export const ADD_TODOS = "ADD_TODOS"
export const REMOVE_TODOS="REMOVE_TODOS"
export const COMPLETED_TODOS = 'COMPLETED_TODOS'
export const ADD_MANY_TODOS = "ADD_MANY_TODOS"






const defaultState={
    todos:[]
}

 export const todosReducer = (state=defaultState,action)=>{
    switch (action.type){
        case ADD_TODOS:
            return {...state, todos: [...state.todos, action.payload]}
        case REMOVE_TODOS:
            return {...state, todos: [...state.todos.filter(item=>item.id!==action.payload)]}
        case COMPLETED_TODOS:
            return {...state, todos: [...state.todos.map(item=>item.id===action.payload
                    ?   { ...item, completed: true }

                    : item
                )] }
        case ADD_MANY_TODOS:
            return {...state, ...action.payload}
        default:
            return state
    }
}
