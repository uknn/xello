import { createAction, props } from '@ngrx/store';

export const loadTasks = createAction(
  '[Tasks] loadTasks'
);

export const loadTasksSuccess = createAction(
  '[Tasks] loadTasks Success',
  props<{ data: any }>()
);

export const loadTasksError = createAction(
  '[Tasks] loadTasks Error',
  props<{ error: any }>()
);

export const createTask = createAction(
'[Tasks] createTask',
  props<{ data: any }>()
);

export const createTaskSuccess = createAction(
  '[Tasks] createTaskSuccess',
  props<{ data: any }>()
);


export const createTaskError = createAction(
  '[Tasks] createTaskError',
  props<{ error: any }>()
);

export const editTask = createAction(
  '[Tasks] editTask',
  props<{ data: any }>()
);

export const editTaskSuccess = createAction(
  '[Tasks] editTaskSuccess',
  props<{ data: any }>()
);


export const editTaskError = createAction(
  '[Tasks] editTaskError',
  props<{ error: any }>()
);

export const deleteTask = createAction(
'[Tasks] deleteTask',
  props<{ id: number }>()
);

export const deleteTaskSuccess = createAction(
  '[Tasks] deleteTaskSuccess',
  props<{ id: number }>()
);

export const deleteTaskError = createAction(
  '[Tasks] deleteTaskError',
  props<{ error: any }>()
);
