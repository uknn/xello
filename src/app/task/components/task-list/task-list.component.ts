import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Task} from '../../models/task.model'
import {getStatusEnumValue, Status} from '../../models/status.enum';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  constructor() { }
  _tasks: Task[] | null = null;
  @Input() set tasks(value: Task[] | null) {
    this._tasks = structuredClone(value);
    if (this._tasks) {
      this.rows = [...this._tasks]
    }
  }

  get tasks(): Task[] | null{
    return this._tasks;
  }

  @Output() editTaskEvent = new EventEmitter<Task>();

  rows: Task[] = [];
  isEditable: {[key: number]: boolean} = {};
  StatusEnum = Status;
  dropdownValues: number[] = []
  ngOnInit() {
    this.dropdownValues = getStatusEnumValue();
  }

  save(row: Task, rowIndex: number): void {
    this.isEditable[rowIndex] = !this.isEditable[rowIndex]
    console.log("Row saved: "+ rowIndex);
    //TODO output to parent + action
  }

  delete(row: Task, rowIndex: number): void {
    this.isEditable[rowIndex]=!this.isEditable[rowIndex]
    console.log("Row deleted: "+ rowIndex);
    //TODO output to parent + action
  }

  toggleEditable(rowIndex: number): void {
    this.isEditable[rowIndex] = !this.isEditable[rowIndex];
  }

  filter(event: KeyboardEvent): void {
    const token = (event?.target as HTMLInputElement).value?.toLowerCase();
    if(this.tasks) {
      this.tasks = this.tasks.filter((r: Task) => {
        //TODO filter something
        return r;
      })
    }
  }
}

