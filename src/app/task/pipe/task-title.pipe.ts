import { Pipe, PipeTransform } from '@angular/core';
import {getStatusString} from '../utils/dropdown.utils';
import {Task} from '../models/task.model';

@Pipe({
  name: 'taskTitlePipe'
})
export class TaskTitlePipe implements PipeTransform {

  transform(tasks: Task[] | null, id: number): string | undefined {
    return tasks?.find((t: Task) => t.id === id)?.title;
  }

}
