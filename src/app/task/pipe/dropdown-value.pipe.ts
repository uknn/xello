import { Pipe, PipeTransform } from '@angular/core';
import {getStatusString} from '../utils/dropdown.utils';

@Pipe({
  name: 'dropdownValue'
})
export class DropdownValuePipe implements PipeTransform {

  transform(value: number): string {
    return getStatusString(value || 0);
  }

}
