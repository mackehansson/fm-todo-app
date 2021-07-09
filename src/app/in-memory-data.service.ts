import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ToDo } from './to-do';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const todos = [
            {
                id: 1,
                content: 'Complete online JavaScript course',
                completed: true,
            },
            {
                id: 2,
                content: 'Jog around the park 3x',
                completed: false,
            },
            {
                id: 3,
                content: '10 minutes meditation',
                completed: false,
            },
            {
                id: 4,
                content: 'Read for 1 hour',
                completed: false,
            },
            {
                id: 5,
                content: 'Pick up groceries',
                completed: false,
            },
            {
                id: 6,
                content: 'Complete Todo App on Frontend Mentor',
                completed: false,
            },
        ];
        return { todos };
    }

    genId(todos: ToDo[]): number {
        return todos.length > 0
            ? Math.max(...todos.map((todo) => todo.id)) + 1
            : 11;
    }
}
