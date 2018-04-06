import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../+state/todo.interfaces';
import { selectAllTodos } from '../../+state/todo.reducer';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: ITodo[] = [];

  constructor(private store: Store<any>) { }

  ngOnInit() {

    this.store.select(selectAllTodos).subscribe(todoStore => {
      this.todos = todoStore;
    });

  }
  completeTodo(todo) {
    this.todos.splice(todo, 1);
  }

}