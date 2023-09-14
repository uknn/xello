import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = []


  constructor() {
    this.tasks.push(
      { title: 'title1', description: 'desc', id: 1, status: 0, dueDate: new Date(), tasks: []},
      { title: 'title2', description: 'desc', id: 2, status: 1, dueDate: new Date(),
        tasks: [1]
      });
  }

  public loadTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  public createTasks(task: Task): Observable<Task> {
    const taskWithId = { ...task, id: Math.floor(Math.random() * 100) }
    this.tasks = [...this.tasks, taskWithId]
    return of(taskWithId);
  }

  public updateTasks(task: Task): Observable<Task | undefined> {
    let exist = this.tasks.findIndex((t: Task) => t.id === task.id);
    if (exist !== -1) {
      this.tasks = [...this.tasks.slice(0, exist), task, ...this.tasks.slice(exist)]
    } else {
      throw new Error()
    }
    //this.tasks = [...updatedTasks];
    return of(this.tasks?.filter((t: Task) => t.id === task.id)[0]);
  }
}
