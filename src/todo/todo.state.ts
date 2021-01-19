import { State, Action, Selector, StateContext } from '@ngxs/store';
import {TodoAction} from './todo.actions';
import {TodoService} from '../app/todo.service';
import {tap} from 'rxjs/operators';
import {Todo} from '../app/models/Todo';
import {Injectable} from '@angular/core';
import {patch} from '@ngxs/store/operators';

export interface TodoStateModel {
  items: Todo[];
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    items: []
  }
})
@Injectable()
export class TodoState {

  constructor(private todoService: TodoService) {
  }

  @Selector()
  public static getState(state: TodoStateModel) {
    return state;
  }
  @Selector()
  public static getTodos(state: TodoStateModel) {
    return state.items;
  }
  @Selector()
  public static addTodo(state: TodoStateModel) {
    // this is wrong probably
    return state.items;
  }

  @Action(TodoAction.FetchAllTodos)
  public fetchAll(ctx: StateContext<TodoStateModel>) {
    return this.todoService.getTodos().pipe(
        tap(todos => {ctx.patchState({items: todos});
        })
      );
  }

  @Action(TodoAction.AddTodo)
  public addTodo(ctx: StateContext<TodoStateModel>, {newTodo}: TodoAction.AddTodo) {
    // do i need to have pipe and tap here? works the same if i delete that
    return this.todoService.addTodo(newTodo).pipe(
      tap(todoResult => {
        const state = ctx.getState();
        ctx.setState(
          patch({
            items: [...state.items, newTodo]
          })
        );
      })
    );
  }
}
