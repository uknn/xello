import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Task} from '../../models/task.model';
import {getStatusEnumValue, Status} from '../../models/status.enum';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  dropdownValues: number[] = [];
  taskDependencies: Task[] = [];
  private _tasks: Task[] = [];

  @Output() createTaskEvent = new EventEmitter<Task>();
  @Input() set tasks(value: Task[]) {
    this._tasks = structuredClone(value);
    this.taskDependencies = this._tasks;
  }

  get tasks(): Task[] {
    return this._tasks;
  }

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl(Status.unassigned, Validators.required),
    id: new FormControl(),
    dueDate: new FormControl(undefined),
    tasks: new FormControl([])
  });

  ngOnInit(): void {
    this.dropdownValues = getStatusEnumValue();
  }

  createTask(): void {
    if (this.form.valid) {
       const task: Task = {
          title: this.form.value.title || undefined,
          status: this.form.value.status || Status.unassigned,
          description: this.form.value.description || undefined,
          id: this.form.value.id || undefined,
          dueDate: this.form.value.dueDate || undefined,
          tasks: this.form.value.tasks || []
        }
        this.createTaskEvent.emit(task)
        this.form.reset();
        this.form.patchValue({
          description: '',
          status: Status.unassigned,
          title: '',
          dueDate: undefined
        })
    }
   }
}
