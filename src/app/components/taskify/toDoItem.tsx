import React, { useContext, useEffect, useRef, useState } from 'react'
import { ITodo, TodoContextType, TodoContext } from '../../contexts/toDoContext'
import { AiFillEdit} from 'react-icons/ai';
import {PiTrash} from 'react-icons/pi'
import { IoIosCheckmark } from "react-icons/io";


type Props = {
    todo: ITodo;
}


const ToDoItem = ({todo}: Props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(todo.title)
    const { completeTodo, updateTodo, deleteTodo } = useContext(TodoContext) as TodoContextType;

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const handleEdit = (e: any) => {
        e.preventDefault();
        const newTodo: ITodo = {
            ...todo,
            title: title,

        }
        updateTodo(newTodo);
        setEdit(false)
    }

    const handleCompleteTodo = (id: number) => {
        completeTodo(id);
    }
    
    const handleDeleteTodo = (id: number) => {
        deleteTodo(id);
    }

  return (
    <form className={`todos-single text-stone-900 p-4 rounded-md flex justify-between align-center w-full ${todo.isDone ? 'bg-green-600 hover:bg-green-400' : 'bg-sky-600 hover:bg-sky-400'}`} onSubmit={(e) => handleEdit(e)}>
        {
            edit ? (
                <input type='text' className='rounded-md p-2 mr-4 w-full' value={title} onChange={(e) => {
                    setTitle(e.target.value);
                }}/>
            ) : (
                <span className={`p-2 mr-4 w-full ${todo.isDone ? 'line-through': ''}`}>{todo.title}</span>
            )
        }
        <div className={`flex items-center justify-normal space-x-0.5 ${edit ? 'opacity-75 pointer-events-none' : ''}`}>
            <span className={`icon flex items-center text-2xl hover:text-stone-700`} onClick={() => {
                if(!edit && !todo.isDone)
                    setEdit(!edit)

            }}>
                <AiFillEdit/>
            </span>
            <span className='icon flex items-center text-2xl hover:text-stone-700' onClick={(e) => handleDeleteTodo(todo.id)}>
                <PiTrash/>
            </span>
            <span className='icon flex items-center text-2xl hover:text-stone-700' onClick={(e) => handleCompleteTodo(todo.id)}>
                <IoIosCheckmark />
            </span>
        </div>
    </form>
  )
}

export default ToDoItem