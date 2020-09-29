import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent{
  tasks = ['CS-1502 Operating System','CS-1508 Computer Networks','CS-1509 Software Engineering','CS-1567 Scripting Language Lab'];
  addTask(newTask: string) {
  if (newTask) {
  this.tasks.push(newTask);
  }
  }
 }