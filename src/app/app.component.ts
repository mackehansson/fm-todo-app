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

    filter: FilterType = FilterType.ALL;
    allItems: ToDo[] = [
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

    userPrefersDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;

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

        this.allItems.unshift(newToDo);
    }

    onClearCompleted(state: boolean) {
        this.allItems = this.allItems.filter((item) => !item.completed);
    }

    onFilter(type: FilterType) {
        this.filter = type;
    }

    get items() {
        if (this.filter === FilterType.ALL) {
            return this.allItems;
        }

        return this.allItems.filter((item) =>
            this.filter === FilterType.COMPLETED
                ? item.completed
                : !item.completed
        );
    }

    get todosActiveLeft() {
        const newList = this.items.filter((t) => !t.completed);
        return newList.length;
    }
}
