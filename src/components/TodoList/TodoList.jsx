import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Todo from "../Todo/Todo";

const TodoList = () => {


const todo = useSelector(state=>state.todosReducer.todos)



    return (
        <div>
            {todo.map(item=><Todo title={item.title} info={item.info} completed={item.completed} key={item.id} id={item.id}/>)}
        </div>
    );
};

export default TodoList;