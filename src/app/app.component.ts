import { Component } from '@angular/core';
import { TodoDataService } from '../services/todo-data.service';
import { Todo } from 'src/shared/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [TodoDataService]
})
export class AppComponent {
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {}

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
