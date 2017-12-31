import { Component } from '@angular/core';
import { Model, ToDoItem } from './model'

@Component({
  //selector: 'app-root',
  selector: "todo-app",
  templateUrl: './app.component.html' //,
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app works!';
  model = new Model();
  getName() {
    return this.model.user;
  }

  getToDoItems(){
    return this.model.items.filter(item => !item.done);
  }

  addItem(newItem){
    this.model.items.push(new ToDoItem(newItem, false));
  }
}
