import { CodeProjectInterface } from '@/models/codeProject'
import Link from 'next/link'
import React from 'react'

type Props = {
  codeProject: CodeProjectInterface
}

export const CodeProjectItem = ({codeProject}: Props) => {
  return (
    <div>
      <strong className='text-md font-extrabold'>{codeProject.name}</strong>
      <p><strong>Description</strong>: {codeProject.description}</p>
      <p><strong>Link</strong> <Link href={codeProject.link}>{codeProject.link}</Link></p>
      {codeProject.github && <p><strong>Github</strong>: <Link href={codeProject.github}>{codeProject.github}</Link></p>}
    </div>
  )
}
