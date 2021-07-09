import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

import { ToDo } from './to-do';
import { LoggerService } from './logger.service';
import { TODOS } from './mock-todos';

const STORAGE_KEY = 'local_todolist';

@Injectable({
    providedIn: 'root',
})
export class ToDoService {
    private todosUrl = 'api/todos';
    todos: ToDo[] = [];

    constructor(
        private http: HttpClient,
        private logger: LoggerService,
        @Inject(LOCAL_STORAGE) private storage: StorageService
    ) {}

    createTodo(content: string) {
        const newId = this.todosLength + 1;
        const newTodo: ToDo = {
            id: newId,
            content: content,
            completed: false,
        };
        const currentTodoList = this.todosFromStorage;
        currentTodoList.push(newTodo);
        this.setTodos(currentTodoList);
    }

    get todosFromStorage() {
        return this.storage.get(STORAGE_KEY) || [];
    }

    get todosLength() {
        const todos = this.storage.get(STORAGE_KEY) || 0;
        return todos.length;
    }

    setTodos(todos: ToDo[]) {
        this.storage.set(STORAGE_KEY, todos);
    }

    getTodos(): Observable<ToDo[]> {
        const todos = of(TODOS);
        return todos;
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            this.logger.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}
