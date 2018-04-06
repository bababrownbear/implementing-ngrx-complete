
import * as todoActions from '../+state/todo.actions';
import { ITodo } from '../+state/todo.interfaces';
import { createEntityAdapter, EntityState, EntityAdapter } from "@ngrx/entity";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

export interface TodoState extends EntityState<ITodo> {
}

const todoAdapter = createEntityAdapter<ITodo>({
});

const todoInitialState: TodoState = todoAdapter.getInitialState({
});

export function todosReducer(state: TodoState = todoInitialState, action) {
  switch (action.type) {
    case todoActions.CREATE_TODO_SUCCESS:
      return todoAdapter.addOne(action.payload, state);
    default:
      return state;
  }
}

export const selectTodoState = createFeatureSelector<TodoState>("todos");

export const { selectAll: selectAllTodos } = todoAdapter.getSelectors(
  selectTodoState
);