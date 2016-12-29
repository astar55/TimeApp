import { Component, OnInit, ViewChild, ViewContainerRef,
   ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { MdDialog } from '@angular/material';

import { TimerDialogComponent } from './timer-dialog/timer-dialog.component';
import { TimerWidgetComponent } from './timer-widget/timer-widget.component';

import { TimerServiceService } from './timer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Timer';
  menu = [];
  timers = [];
  @ViewChild("container", {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(public dialog:MdDialog,
    private TimerService: TimerServiceService,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.getTimers();
  }

  getTimers(): void {
    this.timers = this.TimerService.getTimer();
  }

  openDialog() {
    let dialogRef = this.dialog.open(TimerDialogComponent);
    dialogRef.afterClosed().subscribe((...args) => {
      this.getTimers();
      if (args[0] === "save") {
        this.createTimer(this.timers[this.timers.length -1].name, this.timers[this.timers.length -1].total);
      }    
    }
    )
  }

  createTimer(name: string, total: number): ComponentRef<TimerWidgetComponent> {
    let timerComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TimerWidgetComponent)
    let timerComponentRef = this.viewContainer.createComponent(timerComponentFactory);
    timerComponentRef.instance.timername = name;
    timerComponentRef.instance.totaltime = total;
    timerComponentRef.instance.close.subscribe(() => {
      timerComponentRef.destroy();
    })

    return timerComponentRef;
  }

}
