import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import * as fromTaskReducer from './task.reducers';


export interface State {
  tasks : fromTaskReducer.State
}

export const reducers: ActionReducerMap<State> = {
  tasks: fromTaskReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = [];
