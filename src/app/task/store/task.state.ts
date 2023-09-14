import { Task } from "../models/task.model";

export interface TaskState {
  loading: boolean;
  loaded: boolean;
  taskList: Task[];
}

export const initializeState = (): TaskState => {
  return ({
    taskList: [],
    loading: false,
    loaded: true
  });
}
