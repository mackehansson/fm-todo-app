import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { DragulaModule } from 'ng2-dragula';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoActionsComponent } from './to-do-actions/to-do-actions.component';

import { InMemoryDataService } from './in-memory-data.service';
import { ToDoInputComponent } from './to-do-input/to-do-input.component';
import { ToDoActionsMobileComponent } from './to-do-actions-mobile/to-do-actions-mobile.component';

@NgModule({
    declarations: [
        AppComponent,
        TitleComponent,
        ThemeToggleComponent,
        ToDoItemComponent,
        ToDoListComponent,
        ToDoActionsComponent,
        ToDoInputComponent,
        ToDoActionsMobileComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
            dataEncapsulation: false,
        }),
        FormsModule,
        NgxWebstorageModule.forRoot(),
        DragulaModule.forRoot(),
    ],
    providers: [{ provide: 'STORAGE_KEY', useValue: 'local_todolist' }],
    bootstrap: [AppComponent],
})
export class AppModule {}
