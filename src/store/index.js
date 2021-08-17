import {combineReducers, createStore} from "redux";
import {todosReducer} from "./todosReduser";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReduser=combineReducers({
    todosReducer
    }
)


export const store = createStore(rootReduser,composeWithDevTools())