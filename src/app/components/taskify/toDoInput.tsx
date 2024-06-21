'use client';

import React, { useRef, useContext, BaseSyntheticEvent, useState } from 'react'
import { TodoContext, TodoContextType } from '../../contexts/toDoContext';

const TodoInput = () => {
  const [value, setvalue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { createTodo } = useContext(TodoContext) as TodoContextType;

  const handleAdd = (e:any) => {
    e.preventDefault();
    createTodo(value);
    setvalue('');
  }

  return (
    <form onSubmit={(e: BaseSyntheticEvent) => {
      handleAdd(e);
      inputRef.current?.blur();
    } }>
        <input type='text' placeholder='Enter a task' className={`input-box bg-slate-300 focus:bg-slate-50 appearanctoe-none text-black max-w-72 w-96 p-2 rounded-l-md mt-2`} ref={inputRef} value={value} onChange={(e) => setvalue(e.target.value)}/>
        <button className=' bg-blue-700 hover:bg-green-500 p-2 rounded-r-md'>Go</button>
    </form>
  )
}

export default TodoInput