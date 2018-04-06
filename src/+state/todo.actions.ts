import { Action } from '@ngrx/store';
import { ITodo } from '../+state/todo.interfaces';

export const CREATE_TODO = "CREATE_TODO";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";

export class CreateTodo implements Action {
  readonly type = CREATE_TODO;
  constructor(public payload: ITodo){}
}

export class CreateTodoSuccess implements Action {
  readonly type = CREATE_TODO_SUCCESS;
  constructor(public payload: ITodo){}
}