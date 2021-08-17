import React, {useState} from 'react';
import './TodosCreator.css'
import {useDispatch, useSelector} from "react-redux";
import {ADD_TODOS} from "../../store/todosReduser";

const TodoCreator = () => {

    const [todo,setTodo] = useState({
        id:"",
        title:'',
        info:'',
        completed:null
    })

    const dispatch = useDispatch()

   const createTodo = () => {
        const newTodo = {
            id:Date.now(),
            title: todo.title,
            info: todo.info,
            completed:false
        }
        dispatch({type:ADD_TODOS,payload:newTodo})

       setTodo({
           id:"",
           title:'',
           info:'',
           completed:null
       })
   }

    return (
        <div className="TodosCreator">
            <input
                type="text"
                placeholder="Title"
                value={todo.title}
                onChange={e=>setTodo({
                    ...todo,title: e.target.value
                })}
            />
            <input
                type="text"
                placeholder="Info"
                value={todo.info}
                onChange={e=>setTodo({
                    ...todo,info: e.target.value
                })}
            />
            <br/>
            <button onClick={()=>createTodo()}>Create</button>
        </div>
    );
};

export default TodoCreator;