export interface CodeProjectInterface {
    name: string
    url: string
    link: string
    description: string
    languages: string
    dateadded: Date
    github?: string
    stacktype: string
    id: number
}

export interface CodeProjectListInterface {
    stacktype: string
    codeProjectList: CodeProjectInterface[]
}