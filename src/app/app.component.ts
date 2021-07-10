import { Component } from '@angular/core';
import { FilterType } from './filter-type';
import { TODOS } from './mock-todos';
import { ToDo } from './to-do';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    todos: ToDo[] = TODOS;

    userPrefersDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;

    userPrefersLight =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches;

    ngOnInit(): void {
        document.addEventListener('DOMContentLoaded', (event) => {
            if (this.userPrefersDark) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
            }
        });
    }

    onNewTodo(todo: { content: string; completed: boolean }) {
        const newToDo: ToDo = {
            id: this.todos.length + 1,
            content: todo.content,
            completed: todo.completed,
        };

        this.todos.unshift(newToDo);
    }

    onClearCompleted(state: boolean) {
        const newList = this.todos.map((item) => {
            return {
                ...item,
                completed: false,
            };
        });
        this.todos = newList;
    }

    onFilter(type: FilterType) {
        if (type === FilterType.COMPLETED) {
            this.todos = this.todos.filter((t) => t.completed);
        } else if (type === FilterType.ALL) {
            this.todos = TODOS;
        } else if (type === FilterType.ACTIVE) {
            this.todos = this.todos.filter((t) => !t.completed);
        }
    }

    get todosActiveLeft() {
        const newList = this.todos.filter((t) => !t.completed);
        return newList.length;
    }
}
