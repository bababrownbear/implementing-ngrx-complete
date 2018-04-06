import { Injectable } from '@angular/core';
import { ofAction } from 'ngrx-actions';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as todoActions from '../+state/todo.actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class TodoEffects {
  constructor(private store: Store<any>,
  // private todoService: TodoService,
  private update$: Actions){}

  @Effect()
  createEvent$ = this.update$.pipe(
    ofAction(todoActions.CreateTodo),
    switchMap(todo => {
      return Observable.of(todo.payload);
      // call service create event;
      // return this.todoService.CreateTodo(event.payload);
    }),
    map(response => {
      // if successful
      return new todoActions.CreateTodoSuccess(response);
    })
  );

}