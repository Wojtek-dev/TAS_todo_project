import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent {

    @Input() todo: Todo;
  
    @Output()
    remove: EventEmitter<Todo> = new EventEmitter();
  
    @Output()
    toggleComplete: EventEmitter<Todo> = new EventEmitter();
  
    constructor() {
    }
  
    toggleTodoComplete(todo: Todo) {
      this.toggleComplete.emit(todo);
    }
  
    removeTodo(todo: Todo) {
      this.remove.emit(todo);
    }

}
