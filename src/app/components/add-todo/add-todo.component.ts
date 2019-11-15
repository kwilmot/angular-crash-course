import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  public title: string;

  constructor() {
  }

  ngOnInit() {
  }

  public onSubmit() {
    const newTodo: Todo = {
      title: this.title,
      completed: false
    };

    this.addTodo.emit(newTodo);
  }

}
