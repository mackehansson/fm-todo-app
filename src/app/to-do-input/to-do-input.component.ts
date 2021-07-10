import {
    Component,
    OnInit,
    Injector,
    Output,
    EventEmitter,
} from '@angular/core';
import { ToDo } from '../to-do';

@Component({
    selector: 'app-to-do-input',
    templateUrl: './to-do-input.component.html',
    styleUrls: ['./to-do-input.component.scss'],
})
export class ToDoInputComponent implements OnInit {
    @Output()
    newTodo = new EventEmitter<{
        content: string;
        completed: boolean;
    }>();

    todoContent: string = '';
    todoComplete: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    onEnter() {
        this.newTodo.emit({
            content: this.todoContent,
            completed: this.todoComplete,
        });
        this.todoContent = '';
        this.todoComplete = false;
    }
}
