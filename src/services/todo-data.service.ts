import { Injectable } from '@angular/core';
import { Todo } from "../shared/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  
  lastId: number = 0;

  todos: Todo[] = [];

  constructor() { }
  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    if(!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todo
  deleteTodoById(id: number) :TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  //Simultate GET /todos
  getAllTodos() : Todo[] {
    return this.todos;
  }

  //Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
