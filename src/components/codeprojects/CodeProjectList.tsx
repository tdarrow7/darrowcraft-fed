import { CodeProjectInterface, CodeProjectListInterface } from '@/models/codeProject'
import React, { useEffect, useState } from 'react'
import { CodeProjectItem } from './CodeProjectItem';

interface CodeProjectListProps {
  stackType: string
  codeProjectList: CodeProjectInterface[];
  index: number;
}

export const CodeProjectList = ({codeProjectList, stackType, index}: CodeProjectListProps) => {
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
    <div>
    <h3>{stackType}</h3>
      { filteredCodeProjectList &&
        filteredCodeProjectList.map((codeProject, index) => (
          <CodeProjectItem key={codeProject.id} codeProject={codeProject} index={index  }/>
        ))
      }
    </div>
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