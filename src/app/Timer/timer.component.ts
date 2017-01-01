import { Component, OnInit, ViewChild, ViewContainerRef,
   ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { MdDialog } from '@angular/material';

import { TimerDialogComponent } from './timer-dialog/timer-dialog.component';
import { TimerWidgetComponent } from './timer-widget/timer-widget.component';

import { TimerServiceService } from '../timer-service.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  title = 'Timer';
  timers = [];
  timerid = 0;
  currenttimers: Array<ComponentRef<TimerWidgetComponent>> = [];
  @ViewChild("container", {read: ViewContainerRef}) container: ViewContainerRef;

  /*  
  constructor(public dialog:MdDialog,
    private TimerService: TimerServiceService,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {}
  */
    constructor(public dialog:MdDialog,
    private TimerService: TimerServiceService,
    private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.getTimers();
  }

  ngOnDestroy(): void {
    this.timers = [];
    this.TimerService.emptyTimer();
    this.container.clear();
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
    );
  }

  createTimer(name: string, total: number): ComponentRef<TimerWidgetComponent> {
    let timerComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TimerWidgetComponent);
    let timerComponentRef = this.container.createComponent(timerComponentFactory);
    timerComponentRef.instance.timername = name;
    timerComponentRef.instance.totaltime = total;
    timerComponentRef.instance.timerid = this.timerid;
    this.timerid++;
    this.currenttimers.push(timerComponentRef);
    timerComponentRef.instance.close.subscribe((id:number) => {
      timerComponentRef.destroy();
      this.timerid--;
      this.currenttimers.splice(id, 1);
      for(let i = id; i < this.timerid; i++){
        this.currenttimers[i].instance.timerid = i;
      }
    })
    return timerComponentRef;
  }

}
