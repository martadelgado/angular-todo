import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {TODOS} from '../mock-todos';
import {Store, Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {TodoState} from '../../todo/todo.state';
import {TodoAction} from '../../todo/todo.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos = TODOS;
  checkedTodo!: Todo;

  @Select(TodoState.getTodos) todos$!: Observable<Todo[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new TodoAction.FetchAllTodos());
  }

  selectedTodo(todo: Todo): void {
    this.checkedTodo = todo;
  }

  addBorder(): { 'border-left': string } {
    // This color changes with every interaction and I'm not sure why
    return {
      'border-left': '4px solid #' + Math.floor(Math.random() * 16777215).toString(16)
    };
  }

}
