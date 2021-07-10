import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToDo } from '../to-do';
import { ToDoService } from '../to-do.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
    @Input()
    list: ToDo[] = [];

    constructor() {}

    ngOnInit() {}
}
