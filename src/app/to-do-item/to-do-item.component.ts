import { Component, Input, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { ToDo } from '../to-do';

@Component({
    selector: 'app-to-do-item',
    templateUrl: './to-do-item.component.html',
    styleUrls: ['./to-do-item.component.scss'],
    providers: [LoggerService],
})
export class ToDoItemComponent implements OnInit {
    @Input()
    todo!: ToDo;

    @Input()
    readonlyComponent?: boolean;

    constructor(private logger: LoggerService) {}

    ngOnInit(): void {}

    handleComplete(event: any): void {
        this.logger.log(event);
    }
}
