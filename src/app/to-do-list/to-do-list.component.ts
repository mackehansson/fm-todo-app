import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';
import { ToDoService } from '../to-do.service';

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
    todos: ToDo[] = [];

    constructor(private todoService: ToDoService) {}

    ngOnInit() {
        this.todoService.getTodos().subscribe((res) => (this.todos = res));
    }
}
