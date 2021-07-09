import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
    selector: 'app-to-do-actions',
    templateUrl: './to-do-actions.component.html',
    styleUrls: ['./to-do-actions.component.scss'],
    providers: [ToDoService],
})
export class ToDoActionsComponent implements OnInit {
    todosLeft: number = 0;

    constructor(private todoService: ToDoService) {}

    ngOnInit(): void {
        this.getTodosLength();
    }

    getTodosLength(): void {
        this.todosLeft = 3;
    }
}
