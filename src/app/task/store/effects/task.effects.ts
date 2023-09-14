import { Injectable } from '@angular/core';
import * as TaskActions from '../actions/task.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {TasksService} from '../../services/tasks.service';

@Injectable()
export class TasksEffects {
  constructor(private actions$: Actions, private tasksService: TasksService) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      map((action: any) => action.payload),
      mergeMap(() => {
        return this.tasksService.loadTasks().pipe(
          map(data => TaskActions.loadTasksSuccess({ data })),
          catchError(error => of(TaskActions.loadTasksError({ error: error.message })))
        );
      })
    )
  )

  createTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.createTask),
      mergeMap((action: any) => {
        return this.tasksService.createTasks(action.data).pipe(
          map(data => TaskActions.createTaskSuccess({ data })),
          catchError(error => of(TaskActions.createTaskError({ error })))
        );
      })
    )
  )

  editTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.editTask),
      mergeMap((action: any) => {
        return this.tasksService.updateTasks(action.data).pipe(
          map(data => TaskActions.editTaskSuccess({ data })),
          catchError(error => of(TaskActions.editTaskError({ error })))
        );
      })
    )
  )
}
