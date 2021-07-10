import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterType } from '../filter-type';

@Component({
    selector: 'app-to-do-actions',
    templateUrl: './to-do-actions.component.html',
    styleUrls: ['./to-do-actions.component.scss'],
})
export class ToDoActionsComponent implements OnInit {
    @Input()
    todosLeft: number = 0;

    @Output()
    clearCompleted = new EventEmitter<boolean>();

    @Output()
    filter = new EventEmitter<FilterType>();

    pickedFilter: FilterType = FilterType.ALL;

    constructor() {}

    ngOnInit(): void {}

    setFilterType(type: FilterType) {
        this.pickedFilter = type;
        this.filter.emit(type);
    }

    clear() {
        this.clearCompleted.emit(true);
    }
}
