import React, {useEffect, useState} from 'react';
import './Todo.css'
import {useDispatch, useSelector} from "react-redux";
import {COMPLETED_TODOS, REMOVE_TODOS} from "../../store/todosReduser";


const Todo = ({title,info,completed,id}) => {

const [text,setText] = useState(false)

    useEffect(()=>{ setText(completed) },[completed])

    const dispatch = useDispatch()

    const removeTodo = (id) => {
        console.log(id)
      dispatch({type:REMOVE_TODOS,payload:id})
    }

    const completedTodo = (id) => {
        dispatch({type:COMPLETED_TODOS, payload:id})
    }

    return (
        <div className="Todo">
            {
                text ===false
                    ? <>
                        <h5>{title}</h5>
                        <p>{info}</p>
                    </>
                    : <>
                        <h5><del>{title}</del></h5>
                        <p><del>{info}</del></p>
                    </>

            }

            <p>{completed.toString()}</p>
           <span>
                <button onClick={()=>completedTodo(id)}>Completed</button>
                <button onClick={()=>removeTodo(id)}>Delete</button>
           </span>
        </div>
    );
};

export default Todo;