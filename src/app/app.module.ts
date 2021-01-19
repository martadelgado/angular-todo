import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {FormsModule} from '@angular/forms';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import {TodoState} from '../todo/todo.state';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDetailComponent,
    NewTodoComponent
  ],
    imports: [
        BrowserModule,
        NgxsModule.forRoot([TodoState]),
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
