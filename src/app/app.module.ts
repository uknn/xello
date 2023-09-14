import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './task/components/dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { metaReducers, reducers } from './task/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffects } from './task/store/effects/task.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { TaskListComponent } from './task/components/task-list/task-list.component';
import { CreateTaskComponent } from './task/components/create-task/create-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownValuePipe } from './task/pipe/dropdown-value.pipe';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {TaskDependencyValuesPipe} from './task/pipe/task-dependencies-value.pipe';
import {TaskTitlePipe} from './task/pipe/task-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskListComponent,
    CreateTaskComponent,
    DropdownValuePipe,
    TaskDependencyValuesPipe,
    TaskTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25 , logOnly: !isDevMode() }),
    EffectsModule.forRoot([TasksEffects]),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
