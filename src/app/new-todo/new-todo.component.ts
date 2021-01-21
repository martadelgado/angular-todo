import {Component, Input, OnInit, Output} from '@angular/core';
import {TODOS} from '../mock-todos';
import {Todo} from '../todo';
import {Router} from '@angular/router';
import {Store, Select} from '@ngxs/store';
import {TodoAction} from '../../todo/todo.actions';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  todos = TODOS;
  submitted = false;
  id = this.todos.length + 1;
  borderColor = '#' +  Math.floor(Math.random() * 16777215).toString(16);
  // Is this the right way to do this? Is there another way?
  newTodo = new Todo(this.id, '', '', '', false, this.borderColor);

  constructor(private router: Router, private store: Store) { }

  ngOnInit(): void {
  }

  addTodo(todo: Todo): void {
    this.store.dispatch(new TodoAction.AddTodo(todo));
    this.submitted = true;
    this.router.navigate(['todos']);
  }

  clearForm(form: any): void {
    form.resetForm();
  }
}
