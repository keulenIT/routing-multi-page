import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AppComponent } from './app.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
];
