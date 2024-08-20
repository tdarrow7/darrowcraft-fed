import { CodeProjectInterface, CodeProjectListInterface } from '@/models/codeProject'
import React, { useEffect, useState } from 'react'
import { CodeProjectItem } from './CodeProjectItem';

interface CodeProjectListProps {
  stackType: string
  codeProjectList: CodeProjectInterface[];
  index: number;
}

export const CodeProjectList = ({codeProjectList, stackType, index}: CodeProjectListProps) => {
const filteredCodeProjectList = codeProjectList.filter((project) => (
  project.stacktype == stackType
));
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