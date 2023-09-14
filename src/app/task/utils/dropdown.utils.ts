import {Status} from '../models/status.enum';

export function getStatusString(value: number | undefined = undefined): string {
  if (value === Status.unassigned) {
    return 'Unassigned';
  } else if (value === Status.inProgress) {
    return 'In Progress';
  } else if (value === Status.completed) {
    return 'Completed';
  } else {
    return '';
  }
}
