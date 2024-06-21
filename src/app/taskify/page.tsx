

import TodoInput from "../components/taskify/toDoInput";
import ToDoList from "../components/taskify/toDoList";
import TodoProvider from "../contexts/toDoContext";


export default function TaskifyPage() {
    return (
        <TodoProvider>
            <main>
                <div className="bg-white dark:bg-black text-black dark:text-white h-dvh w-dvw">
                    <header className='full flex justify-center flex-col items-center pt-2'>
                        <span className='heading text-3xl'>Taskify</span>
                        <TodoInput/>
                    </header>
                    <div className='flex justify-between gap-2'>
                        <div className='w-1/2'>
                        <ToDoList isDone={false}></ToDoList>
                        </div>
                        <div className='w-1/2'>
                        <ToDoList isDone={true}></ToDoList>
                        </div>
                    </div>
                </div>
            </main>
        </TodoProvider>
    );
}