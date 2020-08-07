import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../models/Todo';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }
  //set dynamic classes
  //class name is todo 
  //is completed class is in effect if it is completed
  setClasses(){
    let classes = {
      todo:true,
      'is-complete':this.todo.completed
    }
    return classes;
  }
  //on toggle
  onToggle(todo){
    //Toggle in Ui
    todo.completed = !todo.completed;
    //Toggle in Server
    this.todoService.toggleCompleted(todo).subscribe(todo=>
      console.log(todo));
  }
  

  //on delete method
  onDelete(todo){
    this.deleteTodo.emit(todo);
  }


}
