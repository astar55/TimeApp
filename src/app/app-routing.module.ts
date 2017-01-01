import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerComponent } from './timer/timer.component';
import { IndexComponent } from './index/index.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent

  },
  {
    path: 'timer',
    component: TimerComponent
  },
  {
    path: 'stopwatch',
    component: StopwatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
