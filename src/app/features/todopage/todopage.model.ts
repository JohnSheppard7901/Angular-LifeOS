export interface Todo {
    id: number,
    title: string,
    description?: string,
    deadline?: Date,
    done: boolean
}