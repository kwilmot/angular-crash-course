import { Injectable } from '@angular/core';
import { Todo } from '../models/Todos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {
  }

  public addTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.baseUrl, todo);
  }

  public getTodos(): Observable<Todo[]> {
    const limit = 5;
    return this.httpClient.get<Todo[]>(this.baseUrl, { params: { _limit: `${limit}` } });
  }

  public deleteTodo(todo: Todo): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${todo.id}`);
  }

  public toggleCompleted(todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(`${this.baseUrl}/${todo.id}`, todo);
  }
}
