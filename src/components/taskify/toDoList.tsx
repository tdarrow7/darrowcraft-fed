'use client';

import React, { useContext, Dispatch, SetStateAction } from 'react';
import { ITodo, TodoContextType, TodoContext } from '@/contexts/toDoContext'
import ToDoItem from './toDoItem';

interface TodoListProps {
    isDone: boolean;
}

const ToDoList = ({isDone}: TodoListProps) => {
  const { todos } = useContext(TodoContext) as TodoContextType;

  const newTodos = todos.filter((todo) => todo.isDone === isDone)
  return (
    <div className={`min-h-56 ${isDone ? 'bg-green-950 rounded-l-md' : 'bg-sky-950 rounded-r-md'}`}>
      <ul className={`todos p-4 mt-4 w-full max-w-7xl grid grid-cols-${newTodos.length > 0 ? '3 gap-4' : '1'} container px-4`}>
        {newTodos.length > 0 ? 
          newTodos.map((toDo) => (
              <li key={toDo.id}>
              <ToDoItem todo={toDo}></ToDoItem>
              </li>
            ))
            : <li><strong className='text-3xl'>{isDone ? 'Completed' : 'Pending'} ToDo List is Empty</strong></li>
        }
      </ul>
    </div>
  )
}

export default ToDoList