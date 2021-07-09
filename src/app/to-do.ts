export interface ToDos {
    toods: ToDo[];
}

export interface ToDo {
    id: number;
    content: string;
    completed: boolean;
}
