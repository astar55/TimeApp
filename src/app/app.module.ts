import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TimerDialogComponent } from './timer-dialog/timer-dialog.component';
import { TimerWidgetComponent } from './timer-widget/timer-widget.component';

import { TimerServiceService } from './timer-service.service';
import { TimerNotifyComponent } from './timer-notify/timer-notify.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerDialogComponent,
    TimerWidgetComponent,
    TimerNotifyComponent
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
