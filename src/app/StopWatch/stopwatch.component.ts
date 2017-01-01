import { Component, OnInit, ViewChild, ViewContainerRef,
  ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { MdDialog } from '@angular/material';

import { StopwatchDialogComponent } from './stopwatch-dialog/stopwatch-dialog.component';
import { StopwatchWidgetComponent } from './stopwatch-widget/stopwatch-widget.component';

import { StopwatchServiceService } from '../stopwatch-service.service';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  title = "StopWatch";
  stopwatches = [];
  stopwatchid = 0;
  currentstopwatchs: Array<ComponentRef<StopwatchWidgetComponent>> = [];
  @ViewChild("container", {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private dialog:MdDialog,
    private StopwatchService: StopwatchServiceService,
    private componentFactoryResolver: ComponentFactoryResolver,
    public dialogService: DialogService) { }

  ngOnInit() {
    this.getStopwatches();
  }

  ngOnDestroy() {
    this.stopwatches = [];
    this.StopwatchService.emptyStopwatch();
    this.container.clear();
  }

  getStopwatches(): void {
    this.stopwatches = this.StopwatchService.getStopwatch();
  }

  openDialog() {
    let dialogRef = this.dialog.open(StopwatchDialogComponent);
    dialogRef.afterClosed().subscribe((...args) => {
      this.getStopwatches();
      if (args[0] === "save") {
        this.createStopwatch(this.stopwatches[this.stopwatches.length -1].name, this.stopwatches[this.stopwatches.length -1].autostart);
      }
    }
    );
  }

createStopwatch(name:string, autostart: boolean): ComponentRef<StopwatchWidgetComponent> {
  let stopwatchComponentFactory = this.componentFactoryResolver.resolveComponentFactory(StopwatchWidgetComponent);
  let stopwatchComponentRef = this.container.createComponent(stopwatchComponentFactory);
  stopwatchComponentRef.instance.stopwatchname = name;
  stopwatchComponentRef.instance.started = autostart === true ? autostart : false;
  stopwatchComponentRef.instance.stopwatchid = this.stopwatchid;
  this.stopwatchid++;
  this.currentstopwatchs.push(stopwatchComponentRef);
  stopwatchComponentRef.instance.close.subscribe((id:number) => {
    stopwatchComponentRef.destroy();
    this.stopwatchid--;
    this.currentstopwatchs.splice(id, 1);
    for(let i = id; i < this.stopwatchid; i++) {
      this.currentstopwatchs[i].instance.stopwatchid = i;
    }
  })
  return stopwatchComponentRef;
}

canDeactivate(): Promise<boolean> | boolean {
  if(this.currentstopwatchs.length === 0) {
    return true;
  }

  return this.dialogService.confirm("All Stopwatches will be Discarded?");
  }

}
