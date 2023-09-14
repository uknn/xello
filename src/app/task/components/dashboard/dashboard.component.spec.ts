import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DashboardComponent} from './dashboard.component';
import {Store, StoreModule} from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import * as actions from '../../store/actions/task.actions';
import {CreateTaskComponent} from '../create-task/create-task.component';
import {TaskListComponent} from '../task-list/task-list.component';
import {DropdownValuePipe} from '../../pipe/dropdown-value.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {Task} from '../../models/task.model';
import {Status} from '../../models/status.enum';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import * as TaskSelectors from '../../store/selectors/tasks.selectors';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: Store<fromRoot.State>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({
        ...fromRoot.reducers
      }),
      ReactiveFormsModule],
      declarations: [DashboardComponent,
        CreateTaskComponent,
        TaskListComponent,
        DropdownValuePipe]
    });
    store = TestBed.get(Store);

    jest.spyOn(store, 'dispatch');

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to load data on init', () => {
    const action = actions.loadTasks();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  describe('createTask', () => {
    it('should dispatch an action to load editTask', () => {
      const task: Task = {
        title: 'title',
        status: Status.inProgress,
        description: 'description',
        id: 1,
        tasks: []
      }
      const action = actions.editTask({ data: task });
      component.createTask(task);
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should dispatch an action to load createTask', () => {
      const task: Task = {
        title: 'title',
        status: Status.inProgress,
        description: 'description',
        id: undefined,
        tasks: []
      }
      const action = actions.createTask({ data: task });
      component.createTask(task);
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  })

});

describe('DashboardComponent selector', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: MockStore;
  const initialState = {
    tasks: null,
    loading: true,
    error: null
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [DashboardComponent,
        CreateTaskComponent,
        TaskListComponent,
        DropdownValuePipe],
      providers: [provideMockStore({initialState,
        selectors: [{
          selector: TaskSelectors.getTasks,
          value: [{ id: 1, status: Status.inProgress, description: 'desc', title: 'title'}]
        }, {
          selector: TaskSelectors.getLoading,
          value: true
        },
          {
            selector: TaskSelectors.getError,
            value: false
          }]})]
    });
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set tasks$', () => {
    component.tasks$?.subscribe((v: Task[] | null) => {
      expect(v).toEqual([{
        id: 1,
        status: 1,
        description: 'desc',
        title: 'title',
        tasks: []
      }])
    })
  });

  it('should set loading$', () => {
    component.loading$?.subscribe((v: boolean) => {
      expect(v).toEqual(true)
    })
  });

  it('should set error$', () => {
    component.loading$?.subscribe((v: boolean) => {
      expect(v).toEqual(false)
    })
  });
});

