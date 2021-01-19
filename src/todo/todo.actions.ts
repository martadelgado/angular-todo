import {Todo as TodoModel} from '../app/models/Todo';

// tslint:disable-next-line:no-namespace
export namespace TodoAction {
  export class AddTodo {
    static readonly type = '[Todo] Add';

    constructor(public newTodo: TodoModel) {
    }
  }

  export class FetchAllTodos {
    static readonly type = '[Todo] Fetch All';
  }
}
