import { fetchCodeProjects } from '@/actions/codeProjects'
import React, { Fragment, useState } from 'react'
import { CodeProjectList } from './CodeProjectList';
import { CodeProjectInterface } from '@/models/codeProject';


export const CodeProjectContainer = async () => {
    const codeProjects = await fetchCodeProjects();
    const stackTypes = [
        'Frontend',
        'Backend',
        'Full-Stack'
    ];


    return (

        <>
            { stackTypes &&
                stackTypes.map((stackType, index) => (
                    <CodeProjectList key={stackType} codeProjectList={codeProjects} stackType={stackType} index={index}></CodeProjectList>
                ))
            }
        </>
  )
}
