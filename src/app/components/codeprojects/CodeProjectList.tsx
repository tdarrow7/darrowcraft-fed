import { CodeProjectInterface, CodeProjectListInterface } from '@/models/codeProject'
import React, { useEffect, useState } from 'react'
import { CodeProjectItem } from './CodeProjectItem';

interface CodeProjectListProps {
  stackType: string
  codeProjectList: CodeProjectInterface[];
}

export const CodeProjectList = ({codeProjectList, stackType}: CodeProjectListProps) => {
// const [filteredCodeProjectList, setFilteredCodeProjectList] = useState<CodeProjectInterface[]>()
const filteredCodeProjectList = codeProjectList.filter((project) => (
  project.stacktype == stackType
));
// console.log('codeProjectList', codeProjectList);
// console.log(codeProjectList.filter((project) => {
//   project.stacktype == stackType
// }));






// useEffect(() => {

// })

// setFilteredCodeProjectList();


  // const [codeProjectList, codeProjectList] = useState(second)
  
  return (
    <>
    <h3>{stackType}</h3>
      { filteredCodeProjectList &&
        filteredCodeProjectList.map((codeProject) => (
          <CodeProjectItem key={codeProject.id} codeProject={codeProject}/>
        ))
      }
    </>
  )
}

// {newTodos.length > 0 ? 
//   newTodos.map((toDo) => (
//       <li key={toDo.id}>
//       <ToDoItem todo={toDo}></ToDoItem>
//       </li>
//     ))
//     : <li><strong className='text-3xl'>{isDone ? 'Completed' : 'Pending'} ToDo List is Empty</strong></li>
// }