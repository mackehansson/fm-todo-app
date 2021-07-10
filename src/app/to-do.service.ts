import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';

import { ToDo } from './to-do';
import { LoggerService } from './logger.service';
import { TODOS } from './mock-todos';

@Injectable({
    providedIn: 'root',
})
export class ToDoService {
    private todosUrl = 'api/todos';

    todos: ToDo[] = [];
    private todosSubject = new Subject<ToDo[]>();

    activeLength: number = 0;
    private activeLengthSubject = new Subject<number>();

    testVar: string = 'First';
    private subject = new Subject<any>();

    constructor(
        private http: HttpClient,
        private logger: LoggerService,
        private storage: LocalStorageService
    ) {}

    // Returns the todos
    getTodos() {
        return this.todosSubject.asObservable();
    }

    // New Todo
    newTodo(todo: ToDo) {
        this.todos.push(todo);
    }

    // Return the active length
    getActiveLength() {
        return this.activeLengthSubject.asObservable();
    }

    setTestVar(msg: string): void {
        this.testVar = msg;
        this.subject.next(this.testVar);
    }

    onChangeTestVar(): Observable<any> {
        return this.subject.asObservable();
    }

    createTodo(content: string) {
        // const newId = this.todosLength + 1;
        // const newTodo: ToDo = {
        //     id: newId,
        //     content: content,
        //     completed: false,
        // };
        // const currentTodoList = this.todosFromStorage;
        // currentTodoList.push(newTodo);
        // this.setTodos(currentTodoList);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            this.logger.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}
