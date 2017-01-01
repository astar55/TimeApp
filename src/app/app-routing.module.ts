import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerComponent } from './timer/timer.component';
import { IndexComponent } from './index/index.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';

import { CanDeactivateGuardService } from './can-deactivate-guard.service';

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
    component: TimerComponent,
    canDeactivate: [CanDeactivateGuardService]
  },
  {
    path: 'stopwatch',
    component: StopwatchComponent,
    canDeactivate: [CanDeactivateGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuardService]
})
export class AppRoutingModule { }
