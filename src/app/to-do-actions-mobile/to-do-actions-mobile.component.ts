import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterType } from '../filter-type';

@Component({
    selector: 'app-to-do-actions-mobile',
    templateUrl: './to-do-actions-mobile.component.html',
    styleUrls: ['./to-do-actions-mobile.component.scss'],
})
export class ToDoActionsMobileComponent implements OnInit {
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
