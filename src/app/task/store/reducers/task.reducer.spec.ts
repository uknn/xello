import * as TaskActions from './../actions/task.actions';
import * as fromTask from './task.reducers';
import { Task } from "../../models/task.model";
describe('Task reducer', () => {
  it('[Tasks] loadTasks Success', () => {

    const tasks: Task[] = [];
    const action = TaskActions.loadTasksSuccess(
      { data: tasks }
    );

    const expectedState: fromTask.State = {
      ...fromTask.initialState,
      tasks,
      loading: true,
      error: null
    };

    const result = fromTask.reducer(fromTask.initialState, action);
    // assert
    expect(result).toEqual(expectedState);
  });
});
