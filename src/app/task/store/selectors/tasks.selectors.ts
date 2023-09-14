import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTaskReducer from '../reducers/task.reducers';

export const getTasksState = createFeatureSelector<fromTaskReducer.State>('tasks');

export const loading = createSelector(
  getTasksState,
  (state: fromTaskReducer.State) => state.loading
);

export const getTasks = createSelector(
  getTasksState,
  (state: fromTaskReducer.State) => state.tasks || []
);

export const getLoading = createSelector(
  getTasksState,
  (state: fromTaskReducer.State) => state.loading
);

export const getError = createSelector(
  getTasksState,
  (state: fromTaskReducer.State) => state.error
);
