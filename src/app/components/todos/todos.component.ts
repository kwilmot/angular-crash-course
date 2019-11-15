import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todos';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: Todo[];

  constructor(private _todoService: TodoService) {
  }

  ngOnInit() {
    this._todoService.getTodos().subscribe((responseData: Todo[]) => {
      this.todos = responseData;
    });
  }

  public deleteTodo(todo: Todo) {
    this._todoService.deleteTodo(todo).subscribe(() => {
      this.todos = this.todos.filter(filterVal => filterVal.id !== todo.id);
    });
  }

  public addTodo(todo: Todo) {
    this._todoService.addTodo(todo).subscribe((responseData) => {
      this.todos = [...this.todos, responseData];
    });
  }

}
