import { createReducer, on } from '@ngrx/store';
import * as TaskActions from '../actions/task.actions';
import { Task } from '../../models/task.model';
export const usersFeatureKey = 'tasks';

export interface State {
  tasks: Task[] | null,
  loading : boolean,
  error: any
}

export const initialState: State = {
  tasks: null,
  loading : false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(TaskActions.loadTasks, (state) => ({...state,loading: false, error:null})),
  on(TaskActions.loadTasksSuccess, (state, { data }) => ({
    ...state,
    tasks: data,
    loading: true,
    error: null
  })),
  on(TaskActions.loadTasksError, (state,{error}) => ({...state,loading: false, error})),

  // CREATE
  on(TaskActions.createTask, (state,{ data }) => ({...state,loading: false})),
  on(TaskActions.createTaskSuccess, (state,{ data }) => {
    return ({...state, tasks: [...state.tasks || [], data] ,loading: false})
  }),
  on(TaskActions.createTaskError, (state,{ error }) => ({...state,loading: false, error})),

  // EDIT
  on(TaskActions.editTask, (state,{ data }) => ({...state,loading: false})),
  on(TaskActions.editTaskSuccess, (state,{ data }) => {
    return ({...state, tasks: state?.tasks?.map((t: Task) => {
      if(t.id === data.id) {
        return {...t, ...data};
      }
      return t;
      }) || state.tasks, loading: false})
  }),
  on(TaskActions.editTaskError, (state,{ error }) => ({...state,loading: false, error})),

  // DELETE
  // TODO DELETE
  on(TaskActions.deleteTask, (state,{ id }) => ({...state, task: deleteTask(id), loading: false })),
  on(TaskActions.deleteTaskSuccess, (state,{ id }) => ({...state,loading: false })),
  on(TaskActions.deleteTaskError, (state,{ error }) => ({...state,loading: false, error })),
);

function addTask(task: Task): void {

}

function deleteTask(id: number): void {

}
