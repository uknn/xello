import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { TaskState } from '../../store/task.state'
import { Task } from '../../models/task.model'
import { Observable } from 'rxjs';
import * as TaskActions from '../../store/actions/task.actions';
import * as TaskSelectors from '../../store/selectors/tasks.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store<TaskState>) { }
  tasks$?: Observable<Task[] | null>;
  loading$?: Observable<boolean>;
  error$?: Observable<boolean>;
  ngOnInit(): void {
    this.store.dispatch(TaskActions.loadTasks());
    this.tasks$ = this.store.select(TaskSelectors.getTasks);
    this.loading$ = this.store.select(TaskSelectors.getLoading);
    this.error$ = this.store.select(TaskSelectors.getError);
  }

  createTask(task: Task) {
    if (task.id) {
      this.store.dispatch(TaskActions.editTask({data: task}));
    } else {
      this.store.dispatch(TaskActions.createTask({data: task}));
    }
  }

  editTask(): void {
    //TODO add outpu and dispatch
  }

  deleteTask(task: Task) {
    //TODO add the output
    console.info(task);
    this.store.dispatch(TaskActions.deleteTask({id: task.id || -1}));
  }
}

