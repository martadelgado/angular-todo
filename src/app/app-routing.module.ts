import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './todos/todos.component';
import {NewTodoComponent} from './new-todo/new-todo.component';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';

const routes: Routes = [
  { path: '',  redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodosComponent },
  { path: 'new', component: NewTodoComponent },
  { path: 'detail/:id', component: TodoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
