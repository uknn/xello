import { Pipe, PipeTransform } from '@angular/core';
import {getStatusString} from '../utils/dropdown.utils';
import {Task} from '../models/task.model';

@Pipe({
  name: 'taskDependenciesValue'
})
export class TaskDependencyValuesPipe implements PipeTransform {

  transform(tasks: Task[] | null, idToExclude: number): number[] {
    const value =  (tasks?.filter((t: Task) => {
        return t.id !== idToExclude;
    }) || []).map((fT: Task) => {
      return fT.id!
    }) || [];
    return value;
  }

}
