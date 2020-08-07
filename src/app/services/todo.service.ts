import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../models/Todo';
import { Observable } from 'rxjs';

//Const for http header
const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
//Injectable allows us to inject in component
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';
  constructor(private http: HttpClient) { }

  //method to get Todo
  //returns observable
  //GET request to url
  getToDos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  //Toggle Completed Method
  //using put request
  toggleCompleted(todo:Todo):Observable<any>{
    //get the id of todo if we want to update
    //the url will contain the id of the todo
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

// Delete todo method
  deleteTodo(todo: Todo):Observable<Todo>{
    //get ihe id of the todo to delete
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);

}
//add todo
  addTodo(todo: Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl,todo,httpOptions);
}


}
