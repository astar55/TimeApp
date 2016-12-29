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
import { TimerNotifyComponent } from './timer/timer-notify/timer-notify.component';
import { TimerComponent } from './timer/timer.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerDialogComponent,
    TimerWidgetComponent,
    TimerNotifyComponent,
    TimerComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [TimerServiceService],
  bootstrap: [AppComponent],
  entryComponents: [TimerDialogComponent, TimerNotifyComponent, TimerWidgetComponent]
})
export class AppModule { }
