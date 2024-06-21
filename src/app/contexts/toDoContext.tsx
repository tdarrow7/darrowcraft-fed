'use client'

import React from "react";
import { ReactNode, createContext, useState, FC } from "react";

export interface ITodo {
    id: number;
    title: string;
    isDone: boolean
}

export type TodoContextType = {
    todos: ITodo[];
    createTodo: (title: string) => void;
    completeTodo: (id: number) => void;
    updateTodo: (newTodo: ITodo) => void;
    deleteTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [todos, setTodos] = useState<ITodo[]>([
      {
        id: 1,
        title: 'post 1',
        isDone: false,
      },
      {
        id: 2,
        title: 'post 2',
        isDone: true,
      },
    ]);

    const createTodo = (title: string) => {
        const newTodo: ITodo = {
          id: Date.now(), // not really unique - but fine for this example
          title: title,
          isDone: false,
        }
        console.log(newTodo);
        
        setTodos([...todos, newTodo])
      }
      
      const updateTodo = (newTodo: ITodo) => {
        todos.filter((todo: ITodo) => {
          if (todo.id === newTodo.id) {
            todo.title = newTodo.title
            setTodos([...todos])
          }
        })
      }

      const completeTodo = (id: number) => {
        console.log(todos);
        todos.filter((todo: ITodo) => {
          if (todo.id === id) {
            todo.isDone = !todo.isDone;
            setTodos([...todos])
          }
        })
        console.log(todos);
        
      }

      const deleteTodo = (id: number) => {
        const newTodos = todos.filter((todo: ITodo) => (todo.id !== id))
        setTodos([...newTodos]);
      }
      

    return <TodoContext.Provider value={{todos, createTodo, completeTodo, updateTodo, deleteTodo}}>{children}</TodoContext.Provider>
}

export default TodoProvider;

// export interface iTo
// export type TodoContextType = {
//     todos: ITodo;
//     saveTodo: (todo: ITodo) => void;
//     updateTodo: (id: number) => void;
// }