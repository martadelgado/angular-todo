import {Component, Input, OnInit, Output} from '@angular/core';
import {TODOS} from '../mock-todos';
import {Todo} from '../todo';
import {Router} from '@angular/router';
import {Store, Select} from '@ngxs/store';
import {TodoAction} from '../../todo/todo.actions';
import {Observable} from 'rxjs';
import {TodoState} from '../../todo/todo.state';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  todos = TODOS;
  submitted = false;
  id = this.todos.length + 1;
  // Is this the right way to do this? Is there another way?
  newTodo = new Todo(this.id, '', '', '', false);

  constructor(private router: Router, private store: Store) { }

  ngOnInit(): void {
  }

  addTodo(todo: Todo): void {
    this.store.dispatch(new TodoAction.AddTodo(todo));
    this.submitted = true;
    this.router.navigate(['todos']);
    // state is showing object with new todo but TODOS doesnt update
    console.log(this.store.snapshot());
  }
  clearForm(form: any): void {
    form.resetForm();
  }
}
