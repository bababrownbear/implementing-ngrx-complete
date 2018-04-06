import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as todoActions from '../+state/todo.actions';
import { ITodo } from '../+state/todo.interfaces';
import { selectAllTodos } from '../+state/todo.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todo: string;
  
  constructor(private store: Store<any>) { }

  ngOnInit() {

  }

  addTodoItem() {
    const test: ITodo = { id: Math.random().toString() ,createdBy: "test", todo: this.todo }
    this.store.dispatch(new todoActions.CreateTodo(test));

  }

}