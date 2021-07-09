import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
    selector: 'app-to-do-input',
    templateUrl: './to-do-input.component.html',
    styleUrls: ['./to-do-input.component.scss'],
})
export class ToDoInputComponent implements OnInit {
    todoContent: string = '';
    todoComplete: boolean = false;

    constructor(private todoService: ToDoService) {}

    ngOnInit(): void {}

    onEnter() {
        this.todoService.createTodo(this.todoContent);
    }
}
