import { Status } from './status.enum';

export interface Task {
  title: string | undefined;
  description: string | undefined;
  status: Status | undefined;
  id: number | undefined;
  dueDate?: Date;
  tasks: number[];
}
