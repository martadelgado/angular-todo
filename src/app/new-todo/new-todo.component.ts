import {Component, Input, OnInit, Output} from '@angular/core';
import {TODOS} from '../mock-todos';
import {Todo} from '../todo';
import {Router} from '@angular/router';

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


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.todos.push(this.newTodo);
    this.submitted = true;
    // This resets the form with new id, is it the right way to do this?
    this.newTodo = new Todo(this.id, '', '', '', false);
    this.router.navigate(['todos']);
  }

  clearForm(form: any): void {
    form.resetForm();
  }
}
