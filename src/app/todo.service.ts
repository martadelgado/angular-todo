import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Todo} from './todo';
import {TODOS} from './mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }


  getTodo(id: number): Observable<Todo | undefined> {
    // Without undefined, gives ts error that I don't really understand
    return of(TODOS.find(todo => todo.id === id));
  }
}
