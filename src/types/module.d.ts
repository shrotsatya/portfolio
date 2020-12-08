type backgroundSize = "auto"|"cover"|"contain";

export interface project{
    key:number,
    image: {
        url: string,
        width:string,
        title: string,
        height:string
        backgroundSize?: backgroundSize
        website?:string
    },
    title: string,
    content: string,
    github?: string
}