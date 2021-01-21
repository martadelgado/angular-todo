import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Todo} from './todo';
import {TODOS} from './mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];

  constructor() { }


  getTodo(id: number): Observable<Todo | undefined> {
    // Without undefined, gives ts error that I don't really understand
    return of(TODOS.find(todo => todo.id === id));
  }

  getTodos() {
    return of(TODOS);
  }

  addTodo(newTodo: Todo) {
    // I've changed this to add to the mock-todos, is that correct?
    return of(TODOS.push(newTodo));
  }
}
