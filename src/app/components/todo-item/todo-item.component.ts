import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/Todos';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private _todoService: TodoService) {
  }

  ngOnInit() {
  }

  public toggleComplete(todo) {
    todo.completed = !todo.completed;
    this._todoService.toggleCompleted(todo).subscribe();
  }

  public onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
