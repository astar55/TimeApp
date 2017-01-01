import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TimerDialogComponent } from './timer/timer-dialog/timer-dialog.component';
import { TimerWidgetComponent } from './timer/timer-widget/timer-widget.component';

import { TimerServiceService } from './timer-service.service';
import { StopwatchServiceService } from './stopwatch-service.service';
import { TimerNotifyComponent } from './timer/timer-notify/timer-notify.component';
import { TimerComponent } from './timer/timer.component';
import { IndexComponent } from './index/index.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { StopwatchWidgetComponent } from './stopwatch/stopwatch-widget/stopwatch-widget.component';
import { StopwatchDialogComponent } from './stopwatch/stopwatch-dialog/stopwatch-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerDialogComponent,
    TimerWidgetComponent,
    TimerNotifyComponent,
    TimerComponent,
    IndexComponent,
    StopwatchComponent,
    StopwatchWidgetComponent,
    StopwatchDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [TimerServiceService, StopwatchServiceService],
  bootstrap: [AppComponent],
  entryComponents: [TimerDialogComponent, TimerNotifyComponent, TimerWidgetComponent,
    StopwatchDialogComponent, StopwatchWidgetComponent]
})
export class AppModule { }
