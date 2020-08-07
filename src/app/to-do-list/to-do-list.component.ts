import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/Todo';
import {TodoService} from '../services/todo.service'

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'] 
})
export class ToDoListComponent implements OnInit {
  //Todos is an array//Todo is an model
  todos: Todo[];
  //constructor will have the services
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getToDos().subscribe(todos=>{
      this.todos = todos;
    });
    
  }
  deleteTodo(todo: Todo){
    //deletes from ui first
    this.todos = this.todos.filter(t=> t.id !== todo.id);
    //delets from Server
    this.todoService.deleteTodo(todo).subscribe();
  }
  //method to add todo 
  addTodo(todo: Todo){
    //make post request to server
    this.todoService.addTodo(todo).subscribe(todo=>{
      this.todos.push(todo);  
    });

  }

}
