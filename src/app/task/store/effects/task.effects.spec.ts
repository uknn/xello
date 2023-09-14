import { Action, ActionsSubject } from '@ngrx/store';
import { TasksEffects } from './task.effects';
import { TasksService } from '../../services/tasks.service';
import {Observable, of, throwError} from 'rxjs';
import { Task } from '../../models/task.model';
import { Status } from '../../models/status.enum';
import * as TaskActions from '../actions/task.actions';

it('loadTasks$ dispatches a success action', () => {
  const tasks: Task[] = [{
    id: 1,
    status: Status.inProgress,
    description: 'desc',
    title: 'title'
  }]
  const actions = new ActionsSubject();
  const effects = new TasksEffects(actions, newTaskService(tasks));

  const result: Action[] = [];
  effects.loadTasks$.subscribe((action) => {
    result.push(action);
  });

  const action = TaskActions.loadTasks();
  actions.next(action);

  expect(result).toEqual([
    TaskActions.loadTasksSuccess(
      { data: tasks }
    ),
  ]);
});

it('loadTasks$ dispatches an error action on failure', () => {
  const tasks: Task[] = [{
    id: 1,
    status: Status.inProgress,
    description: 'desc',
    title: 'title'
  }]
  const actions = new ActionsSubject();
  let service = newTaskService(tasks, true)

  const effects = new TasksEffects(actions, service);

  const result: Action[] = [];
  effects.loadTasks$.subscribe((action) => {
    result.push(action);
  });

  const action = TaskActions.loadTasks();
  actions.next(action);

  expect(result).toEqual([
    TaskActions.loadTasksError(
      { error: 'error'}
    ),
  ]);
});

function newTaskService(tasks: Task[], error = false): TasksService {
  if (!error) {
    return {
      loadTasks: () => {
        return of(tasks);
      },
      tasks: [],
      createTasks(task: Task): Observable<Task> {
        return of(tasks[0])
      },
      updateTasks(task: Task): Observable<Task | undefined> {
        return of(undefined)
      }
    };
  } else {
    return {
      loadTasks: () => {
        return throwError(() => new Error('error'));
      },
      tasks: [],
      createTasks(task: Task): Observable<Task> {
        return of(tasks[0])
      },
      updateTasks(task: Task): Observable<Task | undefined> {
        return of(undefined)
      }
    };
  }

}
